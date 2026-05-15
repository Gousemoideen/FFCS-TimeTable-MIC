export const FEATURE_FLAGS = {
  facultyFirstPreferenceFlow: 'faculty_first_preference_flow',
  plannerOnboardingTour: 'planner_onboarding_tour',
} as const;

export type FeatureFlagName = typeof FEATURE_FLAGS[keyof typeof FEATURE_FLAGS];
