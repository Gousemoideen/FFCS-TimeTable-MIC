const jsonHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const baseUrl = process.env.BASE_URL || "http://localhost:3000";
const ownerEmail = process.env.LOAD_TEST_OWNER_EMAIL || "";
const authCookie = process.env.LOAD_TEST_COOKIE || "";
const shareId = process.env.LOAD_TEST_SHARE_ID || "";
const existingTimetableId = process.env.LOAD_TEST_TIMETABLE_ID || "";
const titlePrefix = process.env.LOAD_TEST_TITLE_PREFIX || "stress-test";

const authHeaders = authCookie
  ? {
      ...jsonHeaders,
      Cookie: authCookie,
    }
  : jsonHeaders;

const buildUniqueTitle = () =>
  `${titlePrefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

export const PUBLIC_SCENARIOS = [
  {
    name: "home-page",
    method: "GET",
    url: `${baseUrl}/`,
    expectedStatuses: [200],
  },
  {
    name: "mobile-page",
    method: "GET",
    url: `${baseUrl}/mobile`,
    expectedStatuses: [200],
  },
  {
    name: "slots-page",
    method: "GET",
    url: `${baseUrl}/slots`,
    expectedStatuses: [200],
  },
  {
    name: "api-slots",
    method: "GET",
    url: `${baseUrl}/api/slots`,
    expectedStatuses: [200, 429],
  },
  {
    name: "api-courses-search",
    method: "GET",
    url: `${baseUrl}/api/courses?q=CSE&limit=20`,
    expectedStatuses: [200, 429],
  },
];

export const SHARED_LINK_SCENARIOS = shareId
  ? [
      {
        name: "shared-page",
        method: "GET",
        url: `${baseUrl}/share/${shareId}`,
        expectedStatuses: [200],
      },
      {
        name: "api-shared-timetable",
        method: "GET",
        url: `${baseUrl}/api/shared-timetable/${shareId}`,
        expectedStatuses: [200, 404, 429],
      },
    ]
  : [];

export const AUTH_SCENARIOS =
  authCookie && ownerEmail
    ? [
        {
          name: "api-timetables-list",
          method: "GET",
          url: `${baseUrl}/api/timetables?owner=${encodeURIComponent(ownerEmail)}`,
          headers: authHeaders,
          expectedStatuses: [200],
        },
        {
          name: "api-save-timetable",
          method: "POST",
          url: `${baseUrl}/api/save-timetable`,
          headers: authHeaders,
          expectedStatuses: [200, 409],
          bodyFactory: () =>
            JSON.stringify({
              title: buildUniqueTitle(),
              owner: ownerEmail,
              isPublic: false,
              slots: [
                {
                  slot: "A1",
                  courseCode: "BCSE202L",
                  courseName: "LOAD TEST COURSE",
                  facultyName: "LOAD TEST FACULTY",
                },
              ],
            }),
        },
        ...(existingTimetableId
          ? [
              {
                name: "api-update-timetable",
                method: "PATCH",
                url: `${baseUrl}/api/timetables/${existingTimetableId}`,
                headers: authHeaders,
                expectedStatuses: [200, 409],
                bodyFactory: () =>
                  JSON.stringify({
                    title: buildUniqueTitle(),
                    isPublic: false,
                  }),
              },
              {
                name: "api-get-timetable",
                method: "GET",
                url: `${baseUrl}/api/timetables/${existingTimetableId}`,
                headers: authHeaders,
                expectedStatuses: [200],
              },
            ]
          : []),
      ]
    : [];

export const SCENARIO_GROUPS = {
  public: PUBLIC_SCENARIOS,
  shared: SHARED_LINK_SCENARIOS,
  auth: AUTH_SCENARIOS,
  all: [...PUBLIC_SCENARIOS, ...SHARED_LINK_SCENARIOS, ...AUTH_SCENARIOS],
};
