export const FEATURE_FLAGS = {
  facultyFirstPreferenceFlow: 'faculty_first_preference_flow',
  plannerOnboardingTour: 'planner_onboarding_tour',
  useNewCourseParser: 'use_new_course_parser',
  schoolSelectionStep: 'school_selection_step',
  directJumpToCourses: 'direct_jump_to_courses',
  courseUpdateAlert: 'course_update_alert',
} as const;

export type FeatureFlagName = typeof FEATURE_FLAGS[keyof typeof FEATURE_FLAGS];
