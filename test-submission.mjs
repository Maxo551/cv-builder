// Self-contained test — mirrors the sanitisation logic in route.ts exactly.
// Run with: node test-submission.mjs

let passed = 0;
let failed = 0;

function assert(description, condition, detail = "") {
    if (condition) {
        console.log(`  ✓ ${description}`);
        passed++;
    } else {
        console.error(`  ✗ ${description}${detail ? ` — ${detail}` : ""}`);
        failed++;
    }
}

// ─── Helpers (copied verbatim from route.ts) ─────────────────────────────────

function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
}

function toValidDate(value) {
    if (!hasText(value)) return null;
    const d = new Date(value);
    return isNaN(d.getTime()) ? null : d;
}

const VALID_EDUCATION_LEVELS = new Set([
    "PRIMARY", "HIGH_SCHOOL", "HIGH_SCHOOL_GRADUATION", "BACHELOR", "MASTER", "PHD",
]);

const VALID_LANGUAGE_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2"]);

function toSafeYear(value) {
    const n = typeof value === "number" ? value : parseInt(String(value ?? ""), 10);
    if (!Number.isFinite(n)) return null;
    const year = Math.trunc(n);
    if (year < 1900 || year > 2100) return null;
    return year;
}

function sanitizeEducation(raw) {
    return raw
        .map((edu) => {
            const level = typeof edu?.level === "string" ? edu.level.trim() : "";
            return {
                ...edu,
                level: VALID_EDUCATION_LEVELS.has(level) ? level : "",
                school: typeof edu?.school === "string" ? edu.school.trim() : "",
                field: typeof edu?.field === "string" ? edu.field.trim() : "",
                startDate: typeof edu?.startDate === "string" ? edu.startDate.trim() : "",
                endDate: typeof edu?.endDate === "string" ? edu.endDate.trim() : "",
                isCurrent: edu?.isCurrent === true,
            };
        })
        .filter((edu) =>
            hasText(edu.level) &&
            hasText(edu.school) &&
            hasText(edu.field) &&
            toValidDate(edu.startDate) !== null
        );
}

function sanitizeWorkExperience(raw) {
    return raw
        .map((exp) => ({
            ...exp,
            position: typeof exp?.position === "string" ? exp.position.trim() : "",
            company: typeof exp?.company === "string" ? exp.company.trim() : "",
            industry: typeof exp?.industry === "string" ? exp.industry.trim() : "",
            industryCustom: typeof exp?.industryCustom === "string" ? exp.industryCustom.trim() : "",
            startDate: typeof exp?.startDate === "string" ? exp.startDate.trim() : "",
            endDate: typeof exp?.endDate === "string" ? exp.endDate.trim() : "",
            description: typeof exp?.description === "string" ? exp.description.trim() : "",
            isCurrent: exp?.isCurrent === true,
        }))
        .filter((exp) =>
            hasText(exp.position) &&
            hasText(exp.company) &&
            toValidDate(exp.startDate) !== null &&
            (exp.isCurrent || toValidDate(exp.endDate) !== null)
        );
}

function sanitizeCertificates(raw) {
    return raw
        .map((cert) => ({
            ...cert,
            name: typeof cert?.name === "string" ? cert.name.trim() : "",
            organization: typeof cert?.organization === "string" ? cert.organization.trim() : "",
            year: toSafeYear(cert?.year),
        }))
        .filter((cert) => hasText(cert.name) && hasText(cert.organization) && cert.year !== null);
}

function sanitizeLanguages(raw) {
    return raw
        .map((lang) => {
            const level = typeof lang?.level === "string" ? lang.level.trim().toUpperCase() : "";
            return {
                ...lang,
                name: typeof lang?.name === "string" ? lang.name.trim() : "",
                level: VALID_LANGUAGE_LEVELS.has(level) ? level : "B1",
            };
        })
        .filter((lang) => hasText(lang.name));
}

function buildPrismaPayload(exp) {
    return {
        position: exp.position,
        company: exp.company,
        industry: exp.industry === "Iné" ? (exp.industryCustom || "Iné") : (exp.industry || null),
        startDate: toValidDate(exp.startDate),
        endDate: exp.isCurrent ? null : toValidDate(exp.endDate),
        isCurrent: exp.isCurrent === true,
        description: hasText(exp.description) ? exp.description : null,
    };
}

function buildEduPrismaPayload(edu) {
    return {
        school: edu.school,
        field: edu.field,
        level: edu.level,
        startDate: toValidDate(edu.startDate),
        endDate: edu.isCurrent ? null : toValidDate(edu.endDate),
        isCurrent: edu.isCurrent === true,
    };
}

function clampMonths(rawMonths) {
    return Number.isFinite(rawMonths) ? Math.max(0, Math.trunc(rawMonths)) : 0;
}

// ─── Tests ────────────────────────────────────────────────────────────────────

console.log("\n=== toValidDate ===");
assert("valid ISO date returns Date", toValidDate("2020-01-01") instanceof Date);
assert("empty string returns null", toValidDate("") === null);
assert("null returns null", toValidDate(null) === null);
assert("undefined returns null", toValidDate(undefined) === null);
assert("'invalid-date' returns null", toValidDate("invalid-date") === null);
assert("valid partial date (YYYY-MM) returns Date", toValidDate("2020-01") instanceof Date);

console.log("\n=== toSafeYear ===");
assert("normal year number returns int", toSafeYear(2022) === 2022);
assert("year as string returns int", toSafeYear("2022") === 2022);
assert("NaN returns null", toSafeYear(NaN) === null);
assert("null returns null", toSafeYear(null) === null);
assert("undefined returns null", toSafeYear(undefined) === null);
assert("empty string returns null", toSafeYear("") === null);
assert("year < 1900 returns null", toSafeYear(1800) === null);
assert("year > 2100 returns null", toSafeYear(2200) === null);
assert("float is truncated", toSafeYear(2022.9) === 2022);

console.log("\n=== sanitizeEducation ===");

const edu_valid = [{ level: "BACHELOR", school: "MIT", field: "CS", startDate: "2018-09", endDate: "2022-06", isCurrent: false }];
const result_edu_valid = sanitizeEducation(edu_valid);
assert("valid entry passes through", result_edu_valid.length === 1);
assert("isCurrent defaults to false", result_edu_valid[0].isCurrent === false);

const edu_empty_startDate = [{ level: "BACHELOR", school: "MIT", field: "CS", startDate: "", endDate: "", isCurrent: false }];
assert("entry with empty startDate is dropped", sanitizeEducation(edu_empty_startDate).length === 0);

const edu_invalid_level = [{ level: "MASTERS", school: "MIT", field: "CS", startDate: "2018-09", endDate: "2022-06", isCurrent: false }];
assert("entry with invalid level is dropped", sanitizeEducation(edu_invalid_level).length === 0);

const edu_missing_school = [{ level: "BACHELOR", school: "", field: "CS", startDate: "2018-09", endDate: "2022-06", isCurrent: false }];
assert("entry with empty school is dropped", sanitizeEducation(edu_missing_school).length === 0);

const edu_no_end_isCurrent = [{ level: "BACHELOR", school: "MIT", field: "CS", startDate: "2018-09", endDate: "", isCurrent: true }];
assert("isCurrent=true entry with no endDate passes through", sanitizeEducation(edu_no_end_isCurrent).length === 1);

// Prisma payload should have valid Date object, not Invalid Date
const eduPayload = buildEduPrismaPayload(sanitizeEducation(edu_valid)[0]);
assert("education prisma startDate is a valid Date", eduPayload.startDate instanceof Date && !isNaN(eduPayload.startDate.getTime()));
assert("education prisma endDate is Date or null (not Invalid Date)", eduPayload.endDate === null || (!isNaN(eduPayload.endDate.getTime())));

console.log("\n=== sanitizeWorkExperience ===");

const exp_valid = [{ position: "Engineer", company: "ACME", startDate: "2020-01", endDate: "2023-12", isCurrent: false }];
assert("valid entry passes through", sanitizeWorkExperience(exp_valid).length === 1);

// Exact scenario from screenshot #1: NaN dates (user filled position/company but left dates empty)
const exp_nan_dates = [{ position: "Quality Engineer", company: "Some Corp", industry: "", startDate: "", endDate: "", isCurrent: false }];
assert("entry with empty dates is dropped (screenshot #1 scenario)", sanitizeWorkExperience(exp_nan_dates).length === 0);

const exp_missing_company = [{ position: "Engineer", company: "", startDate: "2020-01", endDate: "2023-12", isCurrent: false }];
assert("entry with empty company is dropped", sanitizeWorkExperience(exp_missing_company).length === 0);

const exp_current_no_end = [{ position: "Engineer", company: "ACME", startDate: "2020-01", endDate: "", isCurrent: true }];
assert("isCurrent=true with no endDate passes through", sanitizeWorkExperience(exp_current_no_end).length === 1);

const exp_not_current_no_end = [{ position: "Engineer", company: "ACME", startDate: "2020-01", endDate: "", isCurrent: false }];
assert("isCurrent=false with no endDate is dropped", sanitizeWorkExperience(exp_not_current_no_end).length === 0);

// Prisma payload should never have Invalid Date
const expPayload = buildPrismaPayload(sanitizeWorkExperience(exp_valid)[0]);
assert("work exp prisma startDate is a valid Date", expPayload.startDate instanceof Date && !isNaN(expPayload.startDate.getTime()));
assert("work exp prisma endDate is valid Date or null", expPayload.endDate === null || (!isNaN(expPayload.endDate.getTime())));

console.log("\n=== sanitizeCertificates ===");

const cert_valid = [{ name: "AWS Cert", organization: "Amazon", year: 2022 }];
assert("valid cert passes through", sanitizeCertificates(cert_valid).length === 1);
assert("year is integer", sanitizeCertificates(cert_valid)[0].year === 2022);

// Scenario: parseInt("") = NaN → JSON → null
const cert_null_year = [{ name: "AWS Cert", organization: "Amazon", year: null }];
assert("cert with null year is dropped", sanitizeCertificates(cert_null_year).length === 0);

const cert_nan_year = [{ name: "AWS Cert", organization: "Amazon", year: NaN }];
assert("cert with NaN year is dropped", sanitizeCertificates(cert_nan_year).length === 0);

const cert_string_year = [{ name: "AWS Cert", organization: "Amazon", year: "2022" }];
assert("cert with string year is coerced to int", sanitizeCertificates(cert_string_year)[0]?.year === 2022);

const cert_no_name = [{ name: "", organization: "Amazon", year: 2022 }];
assert("cert with empty name is dropped", sanitizeCertificates(cert_no_name).length === 0);

const cert_no_org = [{ name: "AWS Cert", organization: "", year: 2022 }];
assert("cert with empty organization is dropped", sanitizeCertificates(cert_no_org).length === 0);

console.log("\n=== sanitizeLanguages ===");

const lang_valid = [{ name: "English", level: "B2" }];
assert("valid language passes through", sanitizeLanguages(lang_valid).length === 1);
assert("level preserved", sanitizeLanguages(lang_valid)[0].level === "B2");

const lang_lowercase = [{ name: "German", level: "c1" }];
assert("lowercase level is normalized to uppercase", sanitizeLanguages(lang_lowercase)[0].level === "C1");

const lang_invalid_level = [{ name: "Spanish", level: "native" }];
assert("invalid level falls back to B1", sanitizeLanguages(lang_invalid_level)[0].level === "B1");

const lang_no_name = [{ name: "", level: "B1" }];
assert("language with empty name is dropped", sanitizeLanguages(lang_no_name).length === 0);

console.log("\n=== clampMonths (NaN / Infinity guard) ===");

assert("NaN → 0", clampMonths(NaN) === 0);
assert("Infinity → 0", clampMonths(Infinity) === 0);
assert("negative → 0", clampMonths(-5) === 0);
assert("normal value preserved", clampMonths(24) === 24);
assert("float is truncated", clampMonths(25.9) === 25);

console.log("\n=== Full submission simulation (screenshot #1 — Daxeshkumar Dalal) ===");
// User had experience entries with no dates → NaN total months

const dalal_work = [
    // This is what caused the crash — position/company filled but dates empty
    { position: "Quality Engineer", company: "Mechanical Corp", industry: "Manufacturing", startDate: "", endDate: "", isCurrent: false },
    // A valid entry
    { position: "Design Engineer", company: "AutoDesign", industry: "Manufacturing", startDate: "2015-06", endDate: "2020-12", isCurrent: false },
];

const dalal_edu = [
    { level: "BACHELOR", school: "GTU", field: "Mechanical Engineering", startDate: "2010-07", endDate: "2014-05", isCurrent: false },
];

const sanitizedWork = sanitizeWorkExperience(dalal_work);
const sanitizedEdu = sanitizeEducation(dalal_edu);

assert("bad entry dropped, good entry kept", sanitizedWork.length === 1);
assert("kept entry has valid startDate", toValidDate(sanitizedWork[0].startDate) !== null);
assert("education passes through", sanitizedEdu.length === 1);

// Simulate month calculation
// We need a simple diff-in-months without date-fns for the test
function diffMonths(start, end) {
    return (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
}
const intervals = sanitizedWork.map(exp => ({
    startDate: toValidDate(exp.startDate),
    endDate: exp.isCurrent ? new Date() : toValidDate(exp.endDate),
}));
const rawMonths = intervals.reduce((sum, iv) => sum + diffMonths(iv.startDate, iv.endDate) + 1, 0);
const totalMonths = clampMonths(rawMonths);
assert("totalExperienceMonths is a finite integer", Number.isInteger(totalMonths) && Number.isFinite(totalMonths));
assert("totalExperienceMonths is not NaN", !isNaN(totalMonths));
assert("totalExperienceYears is not NaN", !isNaN(Math.floor(totalMonths / 12)));

// Simulate Prisma payload — ensure no field is Invalid Date
const prismaWorkPayloads = sanitizedWork.map(buildPrismaPayload);
const prismaEduPayloads = sanitizedEdu.map(buildEduPrismaPayload);

assert("no Invalid Date in workExperience.startDate",
    prismaWorkPayloads.every(p => p.startDate instanceof Date && !isNaN(p.startDate.getTime())));
assert("no Invalid Date in workExperience.endDate",
    prismaWorkPayloads.every(p => p.endDate === null || !isNaN(p.endDate.getTime())));
assert("no Invalid Date in education.startDate",
    prismaEduPayloads.every(p => p.startDate instanceof Date && !isNaN(p.startDate.getTime())));

console.log("\n=== Full submission simulation (screenshot #2 — AJOY MONDAL) ===");
// Appears similar — work dates missing

const mondal_work = [
    { position: "CNC OPERATOR", company: "Metalworks", industry: "Manufacturing", startDate: "", endDate: "", isCurrent: false },
];
const mondal_certs = [
    { name: "CNC Certificate", organization: "NSDC", year: NaN }, // NaN from cleared input
];

const sanitizedMondalWork = sanitizeWorkExperience(mondal_work);
const sanitizedMondalCerts = sanitizeCertificates(mondal_certs);

assert("bad work entry dropped", sanitizedMondalWork.length === 0);
assert("cert with NaN year dropped", sanitizedMondalCerts.length === 0);
const mondalMonths = clampMonths(NaN); // would have been NaN before fix
assert("totalExperienceMonths is 0 (no valid experience)", mondalMonths === 0);

console.log("\n=== Edge cases ===");

// Completely empty submission (no optional sections at all)
assert("empty education array stays empty", sanitizeEducation([]).length === 0);
assert("empty workExperience array stays empty", sanitizeWorkExperience([]).length === 0);
assert("empty certificates array stays empty", sanitizeCertificates([]).length === 0);
assert("empty languages array stays empty", sanitizeLanguages([]).length === 0);

// isCurrent work experience
const exp_isCurrent = [{ position: "Dev", company: "Corp", startDate: "2022-01", endDate: "", isCurrent: true }];
const sanitized_isCurrent = sanitizeWorkExperience(exp_isCurrent);
assert("isCurrent entry with blank endDate passes", sanitized_isCurrent.length === 1);
const payload_isCurrent = buildPrismaPayload(sanitized_isCurrent[0]);
assert("isCurrent entry has null endDate in payload", payload_isCurrent.endDate === null);

// Work experience without description (optional field)
const exp_no_desc = [{ position: "Dev", company: "Corp", startDate: "2022-01", endDate: "2023-12", isCurrent: false, description: "" }];
const payload_no_desc = buildPrismaPayload(sanitizeWorkExperience(exp_no_desc)[0]);
assert("empty description becomes null in payload", payload_no_desc.description === null);

// VALID_EDUCATION_LEVELS all pass
for (const level of ["PRIMARY", "HIGH_SCHOOL", "HIGH_SCHOOL_GRADUATION", "BACHELOR", "MASTER", "PHD"]) {
    const r = sanitizeEducation([{ level, school: "School", field: "Field", startDate: "2020-01", endDate: "2022-01" }]);
    assert(`education level "${level}" passes`, r.length === 1);
}

// ─── Summary ─────────────────────────────────────────────────────────────────

console.log(`\n${"─".repeat(50)}`);
console.log(`Total: ${passed + failed}  ✓ ${passed} passed  ${failed > 0 ? `✗ ${failed} FAILED` : ""}`);
if (failed > 0) process.exit(1);
