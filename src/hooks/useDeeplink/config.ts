const config = {
  screens: {
    callback: {
      path: "/callback",
      parse: {
        code: (code: string) => code,
      },
    },
    privated_stack: {
      path: "",
      screens: {
        onboarding: {
          path: "onboarding",
        },
        tell_your_history: {
          path: "tell_your_history",
        },
        user_form: {
          path: "user_form",
        },
        user_steps: {
          path: "user_steps",
        },
        update_app: {
          path: "update_app",
        },
        location_permission: {
          path: "location_permission",
        },
        contact_permission: {
          path: "contact_permission",
        },
      },
    },
  },
};

export default config;
