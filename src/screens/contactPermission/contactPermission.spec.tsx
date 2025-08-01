import { render } from "@testing-library/react-native";

import PermissionsScreen from "./contactPermission";
import {
  BACKGROUND_LOCATION_PERMISSION,
  FOREGROUND_LOCATION_PERMISSION,
} from "./general.constants";

jest.mock("react-native-linear-gradient", () => jest.fn());

jest.mock("@react-native-vector-icons/FontAwesome6", () => {
  return (props: any) => `MockedIcon(${JSON.stringify(props)})`;
});

jest.mock("@react-native-vector-icons/evil-icons", () => {
  return (props: any) => `MockedIcon(${JSON.stringify(props)})`;
});

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const mockedNavigate = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

jest.mock("react-native-permissions", () => {
  return {
    check: jest.fn(),
    checkMultiple: jest.fn().mockReturnValueOnce({
      FOREGROUND_LOCATION_PERMISSION: "grant",
      BACKGROUND_LOCATION_PERMISSION: "grant",
    }),
    PermissionStatus: {
      UNAVAILABLE: "unavailable",
      BLOCKED: "blocked",
      DENIED: "denied",
      GRANTED: "granted",
      LIMITED: "limited",
    },
    PERMISSIONS: {
      ANDROID: {
        ACCEPT_HANDOVER: "android.permission.ACCEPT_HANDOVER",
        ACCESS_BACKGROUND_LOCATION:
          "android.permission.ACCESS_BACKGROUND_LOCATION",
        ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION",
        ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION",
        ACCESS_MEDIA_LOCATION: "android.permission.ACCESS_MEDIA_LOCATION",
        ACTIVITY_RECOGNITION: "android.permission.ACTIVITY_RECOGNITION",
        ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL",
        ANSWER_PHONE_CALLS: "android.permission.ANSWER_PHONE_CALLS",
        BLUETOOTH_ADVERTISE: "android.permission.BLUETOOTH_ADVERTISE",
        BLUETOOTH_CONNECT: "android.permission.BLUETOOTH_CONNECT",
        BLUETOOTH_SCAN: "android.permission.BLUETOOTH_SCAN",
        BODY_SENSORS: "android.permission.BODY_SENSORS",
        BODY_SENSORS_BACKGROUND: "android.permission.BODY_SENSORS_BACKGROUND",
        CALL_PHONE: "android.permission.CALL_PHONE",
        CAMERA: "android.permission.CAMERA",
        GET_ACCOUNTS: "android.permission.GET_ACCOUNTS",
        NEARBY_WIFI_DEVICES: "android.permission.NEARBY_WIFI_DEVICES",
        POST_NOTIFICATIONS: "android.permission.POST_NOTIFICATIONS",
        PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS",
        READ_CALENDAR: "android.permission.READ_CALENDAR",
        READ_CALL_LOG: "android.permission.READ_CALL_LOG",
        READ_CONTACTS: "android.permission.READ_CONTACTS",
        READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE",
        READ_MEDIA_AUDIO: "android.permission.READ_MEDIA_AUDIO",
        READ_MEDIA_IMAGES: "android.permission.READ_MEDIA_IMAGES",
        READ_MEDIA_VIDEO: "android.permission.READ_MEDIA_VIDEO",
        READ_MEDIA_VISUAL_USER_SELECTED:
          "android.permission.READ_MEDIA_VISUAL_USER_SELECTED",
        READ_PHONE_NUMBERS: "android.permission.READ_PHONE_NUMBERS",
        READ_PHONE_STATE: "android.permission.READ_PHONE_STATE",
        READ_SMS: "android.permission.READ_SMS",
        RECEIVE_MMS: "android.permission.RECEIVE_MMS",
        RECEIVE_SMS: "android.permission.RECEIVE_SMS",
        RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH",
        RECORD_AUDIO: "android.permission.RECORD_AUDIO",
        SEND_SMS: "android.permission.SEND_SMS",
        USE_SIP: "android.permission.USE_SIP",
        UWB_RANGING: "android.permission.UWB_RANGING",
        WRITE_CALENDAR: "android.permission.WRITE_CALENDAR",
        WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG",
        WRITE_CONTACTS: "android.permission.WRITE_CONTACTS",
        WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE",
      },
      IOS: {
        APP_TRACKING_TRANSPARENCY: "ios.permission.APP_TRACKING_TRANSPARENCY",
        BLUETOOTH: "ios.permission.BLUETOOTH",
        CALENDARS: "ios.permission.CALENDARS",
        CALENDARS_WRITE_ONLY: "ios.permission.CALENDARS_WRITE_ONLY",
        CAMERA: "ios.permission.CAMERA",
        CONTACTS: "ios.permission.CONTACTS",
        FACE_ID: "ios.permission.FACE_ID",
        LOCATION_ALWAYS: "ios.permission.LOCATION_ALWAYS",
        LOCATION_WHEN_IN_USE: "ios.permission.LOCATION_WHEN_IN_USE",
        MEDIA_LIBRARY: "ios.permission.MEDIA_LIBRARY",
        MICROPHONE: "ios.permission.MICROPHONE",
        MOTION: "ios.permission.MOTION",
        PHOTO_LIBRARY: "ios.permission.PHOTO_LIBRARY",
        PHOTO_LIBRARY_ADD_ONLY: "ios.permission.PHOTO_LIBRARY_ADD_ONLY",
        REMINDERS: "ios.permission.REMINDERS",
        SIRI: "ios.permission.SIRI",
        SPEECH_RECOGNITION: "ios.permission.SPEECH_RECOGNITION",
        STOREKIT: "ios.permission.STOREKIT",
      },
      WINDOWS: {
        ACCESSORY_MANAGER: "windows.permission.accessoryManager",
        ACTIVITY: "windows.permission.activity",
        ALLOW_ELEVATION: "windows.permission.allowElevation",
        ALL_APP_MODS: "windows.permission.allAppMods",
        ALL_JOYN: "windows.permission.allJoyn",
        APPOINTMENTS: "windows.permission.appointments",
        APPOINTMENTS_SYSTEM: "windows.permission.appointmentsSystem",
        APP_BROADCAST_SERVICES: "windows.permission.appBroadcastServices",
        APP_CAPTURE_SERVICES: "windows.permission.appCaptureServices",
        APP_CAPTURE_SETTINGS: "windows.permission.appCaptureSettings",
        APP_DIAGNOSTICS: "windows.permission.appDiagnostics",
        APP_LICENSING: "windows.permission.appLicensing",
        AUDIO_DEVICE_CONFIGURATION:
          "windows.permission.audioDeviceConfiguration",
        BACKGROUND_MEDIA_PLAYBACK: "windows.permission.backgroundMediaPlayback",
        BACKGROUND_MEDIA_RECORDING:
          "windows.permission.backgroundMediaRecording",
        BACKGROUND_SPATIAL_PERCEPTION:
          "windows.permission.backgroundSpatialPerception",
        BACKGROUND_VOIP: "windows.permission.backgroundVoIP",
        BLOCKED_CHAT_MESSAGES: "windows.permission.blockedChatMessages",
        BLUETOOTH: "windows.permission.bluetooth",
        BROAD_FILE_SYSTEM_ACCESS: "windows.permission.broadFileSystemAccess",
        CAMERA_PROCESSING_EXTENSION:
          "windows.permission.cameraProcessingExtension",
        CELLULAR_DEVICE_CONTROL: "windows.permission.cellularDeviceControl",
        CELLULAR_DEVICE_IDENTITY: "windows.permission.cellularDeviceIdentity",
        CELLULAR_MESSAGING: "windows.permission.cellularMessaging",
        CHAT_SYSTEM: "windows.permission.chatSystem",
        CODE_GENERATION: "windows.permission.codeGeneration",
        CONFIRM_APP_CLOSE: "windows.permission.confirmAppClose",
        CONTACTS: "windows.permission.contacts",
        CONTACTS_SYSTEM: "windows.permission.contactsSystem",
        CORTANA_PERMISSIONS: "windows.permission.cortanaPermissions",
        CORTANA_SPEECH_ACCESSORY: "windows.permission.cortanaSpeechAccessory",
        CUSTOM_INSTALL_ACTIONS: "windows.permission.customInstallActions",
        DEVELOPMENT_MODE_NETWORK: "windows.permission.developmentModeNetwork",
        DEVICE_MANAGEMENT_DM_ACCOUNT:
          "windows.permission.deviceManagementDmAccount",
        DEVICE_MANAGEMENT_EMAIL_ACCOUNT:
          "windows.permission.deviceManagementEmailAccount",
        DEVICE_MANAGEMENT_FOUNDATION:
          "windows.permission.deviceManagementFoundation",
        DEVICE_MANAGEMENT_WAP_SECURITY_POLICIES:
          "windows.permission.deviceManagementWapSecurityPolicies",
        DEVICE_PORTAL_PROVIDER: "windows.permission.devicePortalProvider",
        DEVICE_UNLOCK: "windows.permission.deviceUnlock",
        DOCUMENTS_LIBRARY: "windows.permission.documentsLibrary",
        DUAL_SIM_TILES: "windows.permission.dualSimTiles",
        EMAIL: "windows.permission.email",
        EMAIL_SYSTEM: "windows.permission.emailSystem",
        ENTERPRISE_AUTHENTICATION:
          "windows.permission.enterpriseAuthentication",
        ENTERPRISE_CLOUD_S_S_O: "windows.permission.enterpriseCloudSSO",
        ENTERPRISE_DATA_POLICY: "windows.permission.enterpriseDataPolicy",
        ENTERPRISE_DEVICE_LOCKDOWN:
          "windows.permission.enterpriseDeviceLockdown",
        EXPANDED_RESOURCES: "windows.permission.expandedResources",
        EXTENDED_BACKGROUND_TASK_TIME:
          "windows.permission.extendedBackgroundTaskTime",
        EXTENDED_EXECUTION_BACKGROUND_AUDIO:
          "windows.permission.extendedExecutionBackgroundAudio",
        EXTENDED_EXECUTION_CRITICAL:
          "windows.permission.extendedExecutionCritical",
        EXTENDED_EXECUTION_UNCONSTRAINED:
          "windows.permission.extendedExecutionUnconstrained",
        FIRST_SIGN_IN_SETTINGS: "windows.permission.firstSignInSettings",
        GAME_BAR_SERVICES: "windows.permission.gameBarServices",
        GAME_LIST: "windows.permission.gameList",
        GAME_MONITOR: "windows.permission.gameMonitor",
        GAZE_INPUT: "windows.permission.gazeInput",
        GLOBAL_MEDIA_CONTROL: "windows.permission.globalMediaControl",
        HUMANINTERFACEDEVICE: "windows.permission.humaninterfacedevice",
        INPUT_FOREGROUND_OBSERVATION:
          "windows.permission.inputForegroundObservation",
        INPUT_INJECTION_BROKERED: "windows.permission.inputInjectionBrokered",
        INPUT_OBSERVATION: "windows.permission.inputObservation",
        INPUT_SUPPRESSION: "windows.permission.inputSuppression",
        INTERNET_CLIENT: "windows.permission.internetClient",
        INTERNET_CLIENT_SERVER: "windows.permission.internetClientServer",
        INTEROP_SERVICES: "windows.permission.interopServices",
        IOT: "windows.permission.iot",
        LOCAL_SYSTEM_SERVICES: "windows.permission.localSystemServices",
        LOCATION: "windows.permission.location",
        LOCATION_HISTORY: "windows.permission.locationHistory",
        LOCATION_SYSTEM: "windows.permission.locationSystem",
        LOW_LEVEL: "windows.permission.lowLevel",
        LOW_LEVEL_DEVICES: "windows.permission.lowLevelDevices",
        MICROPHONE: "windows.permission.microphone",
        MOBILE: "windows.permission.mobile",
        MODIFIABLE_APP: "windows.permission.modifiableApp",
        MUSIC_LIBRARY: "windows.permission.musicLibrary",
        NETWORKING_VPN_PROVIDER: "windows.permission.networkingVpnProvider",
        NETWORK_CONNECTION_MANAGER_PROVISIONING:
          "windows.permission.networkConnectionManagerProvisioning",
        NETWORK_DATA_PLAN_PROVISIONING:
          "windows.permission.networkDataPlanProvisioning",
        NETWORK_DATA_USAGE_MANAGEMENT:
          "windows.permission.networkDataUsageManagement",
        OEM_DEPLOYMENT: "windows.permission.oemDeployment",
        OEM_PUBLIC_DIRECTORY: "windows.permission.oemPublicDirectory",
        ONE_PROCESS_VOIP: "windows.permission.oneProcessVoIP",
        OPTICAL: "windows.permission.optical",
        PACKAGED_SERVICES: "windows.permission.packagedServices",
        PACKAGES_SERVICES: "windows.permission.packagesServices",
        PACKAGE_MANAGEMENT: "windows.permission.packageManagement",
        PACKAGE_POLICY_SYSTEM: "windows.permission.packagePolicySystem",
        PACKAGE_QUERY: "windows.permission.packageQuery",
        PACKAGE_WRITE_REDIRECTION_COMPATIBILITY_SHIM:
          "windows.permission.packageWriteRedirectionCompatibilityShim",
        PHONE_CALL: "windows.permission.phoneCall",
        PHONE_CALL_HISTORY: "windows.permission.phoneCallHistory",
        PHONE_CALL_HISTORY_SYSTEM: "windows.permission.phoneCallHistorySystem",
        PHONE_LINE_TRANSPORT_MANAGEMENT:
          "windows.permission.phoneLineTransportManagement",
        PICTURES_LIBRARY: "windows.permission.picturesLibrary",
        POINT_OF_SERVICE: "windows.permission.pointOfService",
        PREVIEW_INK_WORKSPACE: "windows.permission.previewInkWorkspace",
        PREVIEW_PEN_WORKSPACE: "windows.permission.previewPenWorkspace",
        PREVIEW_STORE: "windows.permission.previewStore",
        PREVIEW_UI_COMPOSITION: "windows.permission.previewUiComposition",
        PRIVATE_NETWORK_CLIENT_SERVER:
          "windows.permission.privateNetworkClientServer",
        PROTECTED_APP: "windows.permission.protectedApp",
        PROXIMITY: "windows.permission.proximity",
        RADIOS: "windows.permission.radios",
        RECORDED_CALLS_FOLDER: "windows.permission.recordedCallsFolder",
        REMOTE_PASSPORT_AUTHENTICATION:
          "windows.permission.remotePassportAuthentication",
        REMOTE_SYSTEM: "windows.permission.remoteSystem",
        REMOVABLE_STORAGE: "windows.permission.removableStorage",
        RESCAP: "windows.permission.rescap",
        RUN_FULL_TRUST: "windows.permission.runFullTrust",
        SCREEN_DUPLICATION: "windows.permission.screenDuplication",
        SECONDARY_AUTHENTICATION_FACTOR:
          "windows.permission.secondaryAuthenticationFactor",
        SECURE_ASSESSMENT: "windows.permission.secureAssessment",
        SERIALCOMMUNICATION: "windows.permission.serialcommunication",
        SHARED_USER_CERTIFICATES: "windows.permission.sharedUserCertificates",
        SLAPI_QUERY_LICENSE_VALUE: "windows.permission.slapiQueryLicenseValue",
        SMBIOS: "windows.permission.smbios",
        SMS_SEND: "windows.permission.smsSend",
        SPATIAL_PERCEPTION: "windows.permission.spatialPerception",
        START_SCREEN_MANAGEMENT: "windows.permission.startScreenManagement",
        STORE_LICENSE_MANAGEMENT: "windows.permission.storeLicenseManagement",
        SYSTEM_MANAGEMENT: "windows.permission.systemManagement",
        TARGETED_CONTENT: "windows.permission.targetedContent",
        TEAM_EDITION_DEVICE_CREDENTIAL:
          "windows.permission.teamEditionDeviceCredential",
        TEAM_EDITION_EXPERIENCE: "windows.permission.teamEditionExperience",
        TEAM_EDITION_VIEW: "windows.permission.teamEditionView",
        UAP: "windows.permission.uap",
        UI_AUTOMATION: "windows.permission.uiAutomation",
        UNVIRTUALIZED_RESOURCES: "windows.permission.unvirtualizedResources",
        USB: "windows.permission.usb",
        USER_ACCOUNT_INFORMATION: "windows.permission.userAccountInformation",
        USER_DATA_ACCOUNTS_PROVIDER:
          "windows.permission.userDataAccountsProvider",
        USER_DATA_SYSTEM: "windows.permission.userDataSystem",
        USER_PRINCIPAL_NAME: "windows.permission.userPrincipalName",
        USER_SYSTEM_ID: "windows.permission.userSystemId",
        VIDEOS_LIBRARY: "windows.permission.videosLibrary",
        VOIP_CALL: "windows.permission.voipCall",
        WALLET_SYSTEM: "windows.permission.walletSystem",
        WEBCAM: "windows.permission.webcam",
        WIFI_CONTROL: "windows.permission.wiFiControl",
        XBOX_ACCESSORY_MANAGEMENT: "windows.permission.xboxAccessoryManagement",
      },
    },
    request: jest.fn(),
  };
});

describe("Permission Screen Component", () => {
  it("should render component correctly", () => {
    const container = render(<PermissionsScreen />);

    expect(container).toMatchSnapshot();
  });
});
