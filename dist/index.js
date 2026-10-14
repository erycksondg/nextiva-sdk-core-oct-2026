// src/utilities/logger.ts
var Logger = {
  error(...args) {
    if (!this.isTracing()) {
      return;
    }
    console.error(...args);
  },
  force(...args) {
    console.log(...args);
  },
  group(...args) {
    if (!this.isTracing()) {
      return;
    }
    console.group(...args);
  },
  groupEnd(...args) {
    if (!this.isTracing()) {
      return;
    }
    console.groupEnd(...args);
  },
  info(...args) {
    if (!this.isTracing()) {
      return;
    }
    console.info(...args);
  },
  isTracing() {
    return this.trace;
  },
  log(...args) {
    if (!this.isTracing()) {
      return;
    }
    console.log(...args);
  },
  setTracing(trace) {
    this.trace = trace;
  },
  trace: true,
  warn(...args) {
    if (!this.isTracing()) {
      return;
    }
    console.warn(...args);
  }
};

// src/models/constants.ts
var Errors = {
  ACDLoginError: {
    code: -1003,
    message: "Login to ACD failed",
    name: "ACDLoginError"
  },
  InvalidEmailAddress: {
    code: -1001,
    name: "InvalidEmailAddress"
  },
  InvalidUsernamePassword: {
    code: -1002,
    message: "Invalid username or password",
    name: "InvalidUsernamePassword"
  },
  LogoutNotification: {
    code: -1005,
    message: "Agent is required to relogin",
    name: "LogoutNotification"
  },
  TwilioRefreshTokenError: {
    code: -1004,
    message: "An error occured trying to refresh the telephony token",
    name: "TwilioRefreshTokenError"
  },
  Unknown: {
    code: -1e3,
    name: "Unknown"
  }
};
var Info = {
  ACDLoginSuccessful: {
    code: 1001,
    message: "ACD Login successful",
    name: "Success"
  },
  LoginSuccessful: {
    code: 1e3,
    message: "Login successful",
    name: "Success"
  },
  TwilioRefreshTokenSuccessful: {
    code: 1002,
    message: "Twilio refresh token successful",
    name: "Success"
  }
};
var RangeTypes = {
  /**
   * @deprecated Use RangeTypes.DateRange
   */
  DataRange: "daterange",
  DateRange: "daterange",
  Last30Days: "last30days",
  Last3Days: "last3days",
  Last7Days: "last7days",
  LastMonth: "lastmonth",
  LastWeek: "lastweek",
  ThisMonth: "thismonth",
  ThisWeek: "thisweek",
  Today: "today",
  Yesterday: "yesterday"
};
var WorkitemStates = {
  Accepted: "accepted",
  Active: "active",
  Conference: "conference",
  DirectConnect: "directconnect",
  Dispositioned: "dispositioned",
  History: "history",
  Hold: "hold",
  InQueue: "inqueue",
  InReview: "inreview",
  Offered: "offered",
  Terminated: "terminated",
  Transfer: "transfer",
  Voicemail: "voicemail"
};
var ChatMessageStates = {
  CONFIRMED: "confirmed",
  DELIVERED: "delivered",
  FAILED: "failed",
  PENDING: "pending",
  SENDING: "sending",
  SENT: "sent",
  TYPING: "typing",
  UNDELIVERED: "undelivered",
  WAITING: "waiting"
};
var WorkitemTypes = {
  Chat: "Chat",
  ConversationMessage: "ConversationMessage",
  ConversationWatermark: "ConversationWatermark",
  Facebook: "Facebook",
  InboundCall: "InboundCall",
  InboundEmail: "Email",
  InboundExtensionCall: "InboundExtensionCall",
  InboundFax: "InboundFax",
  InboundSMS: "InboundSMS",
  Instagram: "Instagram",
  OutboundCall: "OutboundCall",
  OutboundEmail: "OutboundEmail",
  OutboundExtensionCall: "OutboundExtensionCall",
  OutboundFax: "OutboundFax",
  OutboundSMS: "OutboundSMS",
  OutboundVideoMeeting: "OutboundVideoMeeting",
  PredictiveCall: "PredictiveCall",
  PredictiveSMS: "PredictiveSMS",
  PreviewCall: "PreviewCall",
  ProgressiveCall: "ProgressiveCall",
  Survey: "Survey",
  SystemCall: "SystemCall",
  Twitter: "Twitter",
  Unrecognized: "Unrecognized",
  Whatsapp: "Whatsapp",
  Workflow: "Workflow",
  Youtube: "Youtube"
};
var MediaTypes = {
  Chat: "Chat",
  Email: "Email",
  InboundCall: "InboundCall",
  InboundExtensionCall: "InboundExtensionCall",
  InboundSMS: "InboundSMS",
  OutboundCall: "OutboundCall",
  OutboundExtensionCall: "OutboundExtensionCall",
  OutboundSMS: "OutboundSMS",
  PredictiveCall: "PredictiveCall",
  PredictiveSMS: "PredictiveSMS",
  ProgressiveCall: "ProgressiveCall"
};
var TelephonyTypes = {
  PSTN: "PSTN",
  SIP: "SIP",
  WebRTC: "WEBRTC"
};
var WebRTCProviders = {
  Nextiva: "nextiva",
  Thrio: "thrio",
  Twilio: "twilio"
};
var ChatStatuses = {
  DELIVERED: "delivered",
  // final event
  FAILED: "failed",
  PENDING: "pending",
  // final event
  UNDELIVERED: "undelivered"
  // final event
};
var DialTypes = {
  Campaign: 1,
  Locked: 4,
  State: 3,
  User: 2
};
var PhoneStates = {
  OffHook: "offHook",
  OnHook: "onHook",
  Ringing: "ringing"
};
var ChannelTypes = {
  CHAT: "chat",
  CONVERSATION: "conversation",
  EMAIL: "email",
  FAX: "fax",
  SMS: "sms",
  SOCIAL: "social",
  VIDEO_MEETING: "videoMeeting",
  VOICE: "voice"
};
var OutboundChannelCategories = {
  COMPANY: "COMPANY",
  DIRECT: "DIRECT"
};
var ChatTypes = {
  AGENT: "agent",
  CHAT: "CHAT",
  CLIENT: "client",
  DIRECTORY: "directory",
  INSTAGRAM: "Instagram",
  MESSENGER: "Messanger",
  SMS: "SMS",
  SURVEY: "survey",
  THRIO: "Thrio",
  TWITTER: "Twitter",
  USER: "user",
  WHATSAPP: "Whatsapp"
};
var WorkItemPriorities = {
  High: 4,
  Highest: 5,
  Low: 2,
  Lowest: 1,
  Standard: 3
};
var TimeEventTypes = {
  ActiveForUser: "useractive",
  AnsweredByUserInQueue: "answered",
  AssignedToUser: "assigned",
  DispositionedByUser: "userdisposition",
  DroppedInQueue: "dropped",
  OutboundCallConnected: "outboundconnected",
  OutboundCallStarted: "startoutboundcall",
  StartACDCallback: "startacdcb",
  StartACDVoicemail: "startacdvm",
  TerminatedByCustomer: "terminated",
  TerminatedByUser: "userterminated",
  UserStartRecording: "userstartrecording",
  UserStopRecording: "userstoprecording",
  VideoMeetingCreated: "video_meeting_created",
  VideoMeetingParticipantConnected: "video_meeting_participant_connected",
  VideoMeetingParticipantDisconnected: "video_meeting_participant_disconnected",
  VideoMeetingStarted: "video_meeting_started",
  VideoMeetingTerminated: "video_meeting_terminated"
};
var WorkitemActions = {
  ACTIVE: "active",
  CONFERENCE: "conference",
  DIAL: "dial",
  DISPOSITIONED: "dispositioned",
  DTMF: "dtmf",
  FORWARD: "forward",
  HOLD: "hold",
  MUTE: "mute",
  NONE: "none",
  REPLY: "reply",
  REPLYALL: "replyAll",
  STARTRECORDING: "startRecording",
  STOPRECORDING: "stopRecording",
  TERMINATE: "hangup",
  TERMINATED: "terminated",
  TRANSFER: "transfer",
  UNMUTE: "unMute",
  VOICEMAIL: "voicemail"
};
var OutboundModes = {
  NotLoggedIn: 0,
  Predictive: 2,
  Progressive: 1,
  Quarterback: 3
};
var ConversationTypes = {
  Agent: "agent",
  Chat: "CHAT",
  Client: "client",
  Directory: "directory",
  SMS: "SMS",
  User: "user"
};
var ConversationSources = {
  Bot: "BOT",
  Client: "CLIENT",
  File: "FILE",
  MonitoringEnded: "MONITORING_ENDED",
  MonitoringStarted: "MONITORING_STARTED",
  Queue: "QUEUE",
  Supervisor: "SUPERVISOR",
  Topic: "TOPIC",
  User: "USER"
};
var TransferTypes = {
  Agent: "agent",
  External: "external",
  Queue: "queue",
  Reserve: "reserve",
  Warm: "warm"
};
var CallbackTypes = {
  ACDCallback: "ACDCALLBACK",
  Callback: "CALLBACK",
  PersonalCallback: "PERSONALCALLBACK",
  WebCallback: "WEBCALLBACK"
};
var StatusTypes = {
  Available: 0,
  Busy: 3,
  DoNotDisturb: 6,
  Login: 1,
  Logout: 2,
  NoAnswer: 4,
  OnCall: -3,
  Pause: 5,
  Working: -1,
  Wrapup: -2
};
var StatusTypesToLabel = {
  [StatusTypes.Available]: "Available",
  [StatusTypes.Busy]: "Busy",
  [StatusTypes.Login]: "Login",
  [StatusTypes.Logout]: "Logout",
  [StatusTypes.NoAnswer]: "No Answer",
  [StatusTypes.Working]: "Working",
  [StatusTypes.Wrapup]: "Wrapup",
  [StatusTypes.Pause]: "Pause",
  [StatusTypes.DoNotDisturb]: "Do not Disturb",
  [StatusTypes.OnCall]: "On Call"
};
var SupervisingStates = {
  Coach: 3,
  Join: 2,
  Listen: 1,
  Monitor: 5,
  MonitorWorkitem: 6,
  None: 0,
  Recording: 4
};
var StatisticTypes = {
  Campaigns: "campaigns",
  Dashboards: "dashboards",
  OutboundLists: "outboundlists",
  Queues: "queues",
  Supervision: "supervision",
  Users: "users",
  Workitems: "workitems"
};
var WidgetTypes = {
  AgentGoal: "agentGoal",
  AgentKPI: "agentKPI",
  Custom: "custom",
  Dashboard: "dashboard",
  GamificationAgentTotal: "gamificationAgentTotal",
  GamificationDispositionTotal: "gamificationDispositionTotal",
  GoogleDataStudio: "googleDataStudio",
  Grid: "grid",
  MissedCalls: "missedCalls",
  MyHistory: "myhistory",
  Occupancy: "occupancy",
  PersonalCallbacks: "personalCallbacks",
  SupervisorQueueKPI: "supervisorQueueKPI",
  SupervisorQueueSLA: "supervisorQueueSLA",
  SupervisorQueueTime: "supervisorQueueTime",
  Voicemail: "voicemail"
};
var FileStates = {
  Cancelled: "UPLOAD_CANCELLED",
  Commited: "UPLOAD_COMMITED",
  Error: "TERMINATED_ERROR",
  FileTooLarge: "FILE_TOO_LARGE",
  Success: "TERMINATED_SUCCESS",
  Uploading: "UPLOADING"
};
var DuplicateStrategies = {
  LastNameOrEmail: "LastNameOrEmail",
  NumbersAcrossLists: "NumbersAcrossLists",
  NumbersAcrossListsRemoveFromCurrent: "NumbersAcrossListsRemoveFromCurrent",
  NumbersAcrossListsSameCampaign: "NumbersAcrossListsSameCampaign",
  NumbersAcrossListsSameCampaignRemoveFromCurrent: "NumbersAcrossListsSameCampaignRemoveFromCurrent",
  NumbersOnly: "NumbersOnly"
};
var CHAT_MSG_SOURCE = {
  BOT: "BOT",
  CLIENT: "CLIENT",
  FILE: "FILE",
  MONITORING_ENDED: "MONITORING_ENDED",
  MONITORING_STARTED: "MONITORING_STARTED",
  QUEUE: "QUEUE",
  RATE: "RATE",
  SUPERVISOR: "SUPERVISOR",
  TOPIC: "TOPIC",
  USER: "USER"
};
var WORKITEM_RECORDING_OPTIONS = {
  KEEP_ACTION: "keepCurrent",
  START_RECORDING: "startRecording",
  STOP_RECORDING: "stopRecording"
};
var DispositionActions = {
  AnswerMachine: "answerMachine",
  Busy: "busy",
  ConnectedCallback: "connectedCallback",
  ConnectedHandled: "connectedHandled",
  ConnectedPersonalCallback: "connectedPersonalCallback",
  InvalidNumber: "invalidNumber"
};
var TOKEN_REFRESH_INTERVAL = 60 * 60 * 1e3;
var UserHistorySortTypes = {
  Address: "address",
  Channel: "channel",
  ChannelType: "channelType",
  CreatedDate: "createdDate",
  CreatedTime: "createdTime",
  FromUser: "fromUser",
  TicketId: "ticketId",
  ToUser: "toUser"
};
var AcdTypes = {
  ADVANCED: "ADVANCED",
  SIMPLE: "SIMPLE"
};
var WorkitemConversationTypes = {
  /** Internal conversation, new participants can be added without creating a new conversation */
  CHANNEL: "channel",
  /** External conversation, will be unique for the participants array,
   * if you need to change the participant list a new conversation will be created
   * */
  CONTACT_BASED: "contact_based",
  /** Internal conversation, will be unique for the participants array,
   * if you need to change the participant list a new conversation will be created
   * */
  INTERNAL_CHAT: "internal_chat",
  /** External conversation, will be unique for the participants array,
   * if you need to change the participant list a new conversation will be created
   * */
  QUEUE_CONTACT: "queue_contact",
  /** Internal conversation, new participants can be added without creating a new conversation */
  SHARED_INBOX_INTERNAL: "shared_inbox_internal"
};
var CACHE_BUSTER_VERSION = 1;

// src/utilities/feedFilter.ts
var TAB_TO_CONVERSATION_TYPES = {
  channels: [WorkitemConversationTypes.CHANNEL],
  external: [WorkitemConversationTypes.CONTACT_BASED, WorkitemConversationTypes.QUEUE_CONTACT],
  internal: [WorkitemConversationTypes.INTERNAL_CHAT, WorkitemConversationTypes.SHARED_INBOX_INTERNAL]
};
function tabAllowsConversationType(tab, conversationType) {
  if (!tab) return true;
  const allowed = TAB_TO_CONVERSATION_TYPES[String(tab).toLowerCase()];
  if (!allowed) return true;
  if (!conversationType) return true;
  return allowed.includes(conversationType);
}
function normalizeFeedFilter(filter3) {
  if (!filter3) return ["all"];
  const arr = Array.isArray(filter3) ? filter3 : [filter3];
  const sorted = arr.filter((v) => typeof v === "string" && v.trim().length > 0).sort((a, b) => a.localeCompare(b));
  const unique = [...new Set(sorted)];
  return unique.length === 0 ? ["all"] : unique;
}
function areFeedFiltersEqual(a, b) {
  const arrA = normalizeFeedFilter(a);
  const arrB = normalizeFeedFilter(b);
  return arrA.length === arrB.length && arrA.every((value, index) => value === arrB[index]);
}
function isFetchFeedPayloadEqual(prev, current) {
  if (prev.tab !== current.tab) return false;
  if (prev.queueIds && current.queueIds && prev.queueIds !== current.queueIds) {
    return false;
  }
  return areFeedFiltersEqual(prev.filter, current.filter);
}

// src/models/notificationevent.ts
var NotificationEvent = class {
  constructor(name, data) {
    this.name = name;
    this.data = data;
  }
  /**
   * The function `getProperties` returns the data properties of the class in TypeScript.
   * @returns The `data` property is being returned.
   */
  getProperties() {
    return this.data;
  }
  /**
   * The function `getType` returns the value of the `name` property.
   * @returns The `name` property is being returned.
   */
  getType() {
    return this.name;
  }
};

// src/models/schematype.ts
var SchemaType = class {
  constructor(model, dataService) {
    this.model = model;
    this.dataService = dataService;
    this.helper = this.dataService.getHelper(model.name);
  }
  // private collection: Array<any> = [];
  helper;
  /* Need to adjust based on the dataSet */
  original = {
    count: 0,
    next: 0,
    previous: 0,
    total: 0
  };
  searchConfig = {
    // next: 0,
    // previous: 0,
    // count: 0,
    // total: 0
  };
  ROWS = 100;
  stateService = dependencyInjectionContainer.resolve("stateService");
  logger = dependencyInjectionContainer.resolve("loggerService");
  /**
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  getName() {
    this.logger.warn("SchemaType - getName is deprecated, use SchemaTypeClient instead");
    return this.model.name;
  }
  // private mergeSearchConfig(search: Search): void {
  //     delete this.searchConfig.q;
  //     delete this.searchConfig.rows;
  //     delete this.searchConfig.advance;
  //     delete this.searchConfig.filter;
  //     delete this.searchConfig.master;
  //     Object.assign(this.searchConfig, search);
  // }
  /**
   * The `next` function updates the search configuration and retrieves data from a specified URL
   * asynchronously.
   * @returns The `next()` method is returning the result of calling the `getData(url)` method with the
   * `url` parameter generated by calling the `getSearchUrl()` method with various parameters such as
   * number of rows, next page number, search query, advance search criteria, filters, and master
   * search criteria. The `getData(url)` method likely makes an HTTP request to fetch data from the
   * specified URL.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async next() {
    this.logger.warn("SchemaType - next is deprecated, use SchemaTypeClient instead");
    this.searchConfig.start = this.searchConfig.next;
    const url = this.getSearchUrl(
      this.searchConfig.rows || this.ROWS,
      this.searchConfig.next,
      this.searchConfig.q,
      this.searchConfig.advance,
      this.searchConfig.filter,
      this.searchConfig.master
    );
    return await this.getData(url);
  }
  /**
   * The `previous` function updates the search configuration to retrieve data from the previous page
   * based on the current search criteria.
   * @returns The `previous()` method is returning the result of calling `this.getData(url)` after
   * setting the `start` property of `this.searchConfig` to the value of `this.searchConfig.previous`.
   * The `url` is generated using the `getSearchUrl()` method with various parameters passed in.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async previous() {
    this.logger.warn("SchemaType - previous is deprecated, use SchemaTypeClient instead");
    this.searchConfig.start = this.searchConfig.previous;
    const url = this.getSearchUrl(
      this.searchConfig.rows || this.ROWS,
      this.searchConfig.next,
      this.searchConfig.q,
      this.searchConfig.advance,
      this.searchConfig.filter,
      this.searchConfig.master
    );
    return await this.getData(url);
  }
  /**
   * This function deletes the schema model using a  ID .
   * @param {string} deleteId - The `deleteId` parameter is a string that represents the _id
   * of the schema model you want to delete.
   * @returns The `delete` method is returning a promise that resolves to the result of the
   * `axiosInstance.delete` call.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async delete(deleteId) {
    this.logger.warn("SchemaType - delete is deprecated, use SchemaTypeClient instead");
    const url = this.getDeleteUrl(deleteId, (/* @__PURE__ */ new Date()).getTime());
    return await axiosInstance.delete(url);
  }
  _checkIsValidModel(currModel) {
    if (currModel.constructor === FormData) {
      const formDataAsJson = Object.fromEntries(currModel);
      for (const key of ["fieldModifiers", "object"]) {
        if (formDataAsJson.hasOwnProperty(key)) {
          const jsonStr = formDataAsJson[key];
          currModel = JSON.parse(jsonStr);
          break;
        }
      }
    } else {
      currModel = cloneDeep(currModel);
    }
    for (const key of ["id"]) {
      if (currModel.hasOwnProperty(key)) {
        delete currModel[key];
      }
    }
    if (Object.keys(currModel).length == 0) {
      throw new Error(`SchemaType - No paramenter Passed`);
    }
    for (const field in this.model.fields) {
      if (currModel.hasOwnProperty(field)) {
        delete currModel[field];
      }
    }
    if (Object.keys(currModel).length > 0) {
      for (const field in this.model.relations) {
        if (currModel.hasOwnProperty(field)) {
          delete currModel[field];
        }
      }
    }
    if (Object.keys(currModel).length > 0) {
      throw new Error(
        `SchemaType - Unknown Parameter passed ${Object.keys(currModel).toString()}`
      );
    }
  }
  /**
   * The function creates a new schema model of a specific schemaType by sending a POST request with the provided schema model to a specified
   * URL.
   * @param {any} createModel - The `createModel` parameter is an object that contains the schema model needed
   * to create a new object. It is passed as an argument to the `create` method in the code snippet you
   * provided.
   * @returns The `create` method is returning a promise that resolves to the result of the POST request
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async create(createModel) {
    this.logger.warn("SchemaType - create is deprecated, use SchemaTypeClient instead");
    const url = this.getCreateUrl();
    this._checkIsValidModel(createModel);
    const formData = new FormData();
    formData.append("object", JSON.stringify(createModel));
    return await axiosInstance.post(url, formData, this.getRequestConfig("create"));
  }
  /**
   * This TypeScript function updates a model of a specific schemaType by sending a POST request if the schema model is of type
   * FormData, otherwise it sends a PATCH request.
   * @param {Update} updatedModel - The `updatedModel` parameter in the `update` function is an object
   * that contains the data to be updated. It has the following properties:
   * @returns The `update` method is returning the result of the axios POST or PATCH request based on
   * the type of data in the `updatedModel`. If the `updatedModel` data is of type FormData, a POST
   * request is made using `axiosInstance.post`, otherwise a PATCH request is made using
   * `axiosInstance.patch`. The method returns the result of the corresponding request.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async update(updatedModel) {
    this.logger.warn("SchemaType - update is deprecated, use SchemaTypeClient instead");
    this._checkIsValidModel(updatedModel.data);
    const url = this.getUpdateUrl(
      updatedModel._id,
      updatedModel.createdAt ? updatedModel.createdAt : (/* @__PURE__ */ new Date()).getTime()
    );
    if (updatedModel.data.constructor === FormData) {
      return await axiosInstance.post(url, updatedModel.data, this.getRequestConfig("update"));
    }
    return await axiosInstance.patch(url, updatedModel.data);
  }
  /**
   * The `search` function in this TypeScript code performs a search operation based on the provided
   * search parameters and returns the data fetched from a specified URL after checking for permission.
   * @param {Search} search - The `search` function you provided seems to be an asynchronous function
   * that performs a search operation based on the `search` parameter passed to it. The function first
   * checks if the current user has permission to search for data related to the specified
   * `model.name`. If permission is denied, it throws an error
   * @returns The `search` method is returning the result of calling `this.getData(url)` after setting
   * up the search configuration and URL based on the provided `search` object.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async search(search) {
    this.logger.warn("SchemaType - search is deprecated, use SchemaTypeClient instead");
    if (!this.stateService.canSearch(this.model.name)) {
      throw new Error(`Permission denied search ${this.model.name}`);
    }
    this.searchConfig = Object.assign({}, this.original, search);
    const url = this.getSearchUrl(
      search.rows ?? this.ROWS,
      this.searchConfig.next,
      this.searchConfig.q,
      this.searchConfig.advance,
      this.searchConfig.filter,
      this.searchConfig.master
    );
    return await this.getData(url);
  }
  /**
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async getData(url) {
    this.logger.warn("SchemaType - getData is deprecated, use SchemaTypeClient instead");
    const collection = [];
    const axiosResponse = await axiosInstance.get(url);
    const data = axiosResponse.data;
    const model = this.getNewModel();
    data.objects?.forEach((data2) => {
      collection.push(this.addModel(data2, model));
    });
    const sort = this.getSortedMethod();
    sortObject(collection, sort.ascending, sort.getter);
    this.searchConfig.previous = parseInt(data.previous) || 0;
    this.searchConfig.next = parseInt(data.next) || 0;
    this.searchConfig.count = data.count;
    this.searchConfig.total = data.total;
    return collection;
  }
  // public async retrieve(id: string, createdAt: number) {
  //     return new Promise<any>((resolve: any, reject: any) => {
  //         try {
  //             this.retrieveAsObservable(id, createdAt).subscribe({
  //                 next: (result: any) => {
  //                     resolve(result);
  //                 },
  //                 error: (err) => {
  //                     reject(err);
  //                 }
  //             });
  //         } catch(err) {
  //             reject(err);
  //         }
  //     });
  // }
  /**
   * The `searchEx` function in TypeScript performs a search operation, handles permissions, constructs
   * a search URL, fetches data using Axios, processes the data, sorts the results, and returns the
   * search configuration object.
   * @param {Search} search - The `searchEx` function is an asynchronous function that performs a
   * search operation based on the provided `search` object. Here is a breakdown of the function:
   * @returns The `searchEx` method is returning the `searchConfig` object after performing various
   * operations such as fetching data from an API, adding models to a collection, sorting the
   * collection, and updating the search configuration properties like `previous`, `next`, `count`, and
   * `total`.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async searchEx(search) {
    this.logger.warn("SchemaType - searchEx is deprecated, use SchemaTypeClient instead");
    if (!this.stateService.canSearch(this.model.name)) {
      throw new Error(`Permission denied search ${this.model.name}`);
    }
    const collection = [];
    this.searchConfig = Object.assign({}, this.original, search);
    const url = this.getSearchUrl(
      this.searchConfig.rows || this.ROWS,
      this.searchConfig.next,
      this.searchConfig.q,
      this.searchConfig.advance,
      this.searchConfig.filter,
      this.searchConfig.master
    );
    const axiosResponse = await axiosInstance.get(url);
    const data = axiosResponse.data;
    const model = this.getNewModel();
    data.objects?.forEach((data2) => {
      collection.push(this.addModel(data2, model));
    });
    const sort = this.getSortedMethod();
    sortObject(collection, sort.ascending, sort.getter);
    this.searchConfig.objects = [...collection];
    this.searchConfig.previous = parseInt(data.previous) || 0;
    this.searchConfig.next = parseInt(data.next) || 0;
    this.searchConfig.count = data.count;
    this.searchConfig.total = data.total;
    return this.searchConfig;
  }
  /**
   * This TypeScript function retrieves data based on an ID and optional creation timestamp, processes
   * the data, and returns a new model object.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * data you want to retrieve.
   * @param {number} [createdAt] - The `createdAt` parameter in the `retrieve` function is an optional
   * parameter of type number. It is used to specify a timestamp indicating when the data was created.
   * If provided, it is used to retrieve a specific version of the data based on the creation time. If
   * not provided, the function retrieves
   * @returns The `retrieve` method returns an object `o` which is a combination of a new model created
   * using `this.getNewModel()` and the data retrieved from the `axiosResponse`.
   * @deprecated Use `SchemaTypeClient` to interact with `SchemaTypes`
   */
  async retrieve(id2, createdAt) {
    this.logger.warn("SchemaType - retrieve is deprecated, use SchemaTypeClient instead");
    const url = this.getRetrieveUrl(id2, createdAt);
    if (this.model.name === "dashboard" || this.model.name === "auditlog") {
      return null;
    }
    const axiosResponse = await axiosInstance.get(url);
    const model = axiosResponse.data;
    this.helper.processData(model);
    const o = Object.assign({}, this.getNewModel(), model);
    return o;
  }
  // public async delete(id: string) {
  //   const url: string = this.getDeleteUrl(id, new Date().getTime());
  //   await axiosInstance.delete(url)
  // }
  // public create(properties: any, ...t): void {
  //   const fields: Array<any> = this.getFields();
  //   // check properties
  //   // properties.firstName
  //   // properties.lastName
  //   properties = {
  //     firstName: 'Guru',
  //     lastName: 'Nitin',
  //     name: 'Guru Nitin',
  //     mobile: '5145017992',
  //     email: 'pierre.stcyr@gmail.com'
  //   }
  //   axiosInstance.post(this.getCreateUrl(), properties);
  // }
  // public update(id: stirng): void {
  // }
  // public getCollection(): Array<any> {
  //     return this.collection;
  // }
  // public getFromId(id: string): any {
  //     let arr: Array<any> = this.collection.find((model: any) => model._id === id);
  //     if (!arr) {
  //         return null;
  //     }
  //     return arr[0];
  // }
  // public getFromName(name: string): any {
  //     let arr: Array<any> = this.collection.find((model: any) => model.name === name);
  //     if (!arr) {
  //         return null;
  //     }
  //     return arr[0];
  // }
  /**
   * The function `getFields` returns an array of values from the fields of a model object.
   * @returns An array of all the values of the fields in the model object.
   */
  getFields() {
    return Object.values(this.model.fields);
  }
  /**
   * This TypeScript function retrieves a field from a model object based on the provided field name.
   * @param {string} fieldname - The `fieldname` parameter is a string that represents the name of the
   * field you want to retrieve from the `model.fields` object.
   * @returns The getField method is returning the value of the field with the specified fieldname from
   * the model's fields object. If the field does not exist, it will return null.
   */
  getField(fieldname) {
    return this.model.fields[fieldname] || null;
  }
  /**
   * This function returns an array of fields from a model that have a type of 'avatar'.
   * @returns An array of fields from the model that have a type of 'avatar'.
   */
  getAvatarFields() {
    return this.model.fields.filter((field) => field.type === "avatar");
  }
  /**
   * This function returns an array of keys from the relations object of a model in TypeScript.
   * @returns An array of keys from the `relations` object of the model. If `this.model.relations` is
   * not defined or is null, an empty array is returned.
   */
  getRelationFields() {
    return Object.keys(this.model.relations || {});
  }
  /**
   * This TypeScript function retrieves a link URI based on the provided name from a model object.
   * @param {string} name - The `name` parameter is a string that represents the key used to access a
   * specific link URI in the `this.model.links` object.
   * @returns The `uri` property of the link with the specified `name` from the `model` object is being
   * returned.
   */
  getLink(name) {
    return this.model.links[name].uri;
  }
  /**
   * The function `getcontentType` returns the content type based on the provided request type.
   * @param {string} requestType - The `requestType` parameter is a string that represents the type of
   * request being made.
   * @returns The content type associated with the provided request type is being returned.
   */
  getcontentType(requestType) {
    return this.model.links[requestType].contentType;
  }
  /**
   * The getRequestConfig function returns an AxiosRequestConfig object with headers based on the
   * requestType provided.
   * @param {string} requestType - The `requestType` parameter in the `getRequestConfig` function is a
   * string that specifies the type of request being made. This parameter is used to determine the
   * `Content-Type` header for the Axios request configuration.
   * @returns An AxiosRequestConfig object is being returned, which includes a headers property with
   * the 'Content-Type' set based on the requestType provided.
   */
  getRequestConfig(requestType) {
    return {
      headers: { "Content-Type": this.getcontentType(requestType) }
    };
  }
  getCreateUrl() {
    return this.model.links.create.uri;
  }
  getComplianceUrl(workitemId, complianceId) {
    return this.model.links.compliance.uri.replace("{workitemId}", workitemId).replace("{complianceId}", complianceId);
  }
  /**
   * The function `getDuplicateUrl` returns a URL with a specific ID inserted into a placeholder.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
   * resource.
   * @returns The function `getDuplicateUrl` is returning a URL string with the `id` parameter replaced
   * in the URI template.
   */
  getDuplicateUrl(id2) {
    return this.model.links.duplicate.uri.replace("{{id}}", id2);
  }
  /**
   * The function `getDuplicateUrl` returns a URL with a specific ID inserted into a placeholder.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
   * resource.
   * @returns The function `getDuplicateUrl` is returning a URL string with the `id` parameter replaced
   * in the URI template.
   */
  getRetrieveUrl(id2, createdAt) {
    return this.model.links.retrieve.uri.replace("{{id}}", id2).replace("{{createdAt}}", createdAt);
  }
  /**
   * The function `getUpdateUrl` returns a formatted URL by replacing placeholders with provided `id`
   * and `createdAt` values.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
   * resource.
   * @param {number} createdAt - The `createdAt` parameter is a number representing the timestamp when
   * the resource was created.
   * @returns A string containing the updated URL with the placeholders '{{id}}' and '{{createdAt}}'
   * replaced by the values of the 'id' and 'createdAt' parameters, respectively.
   */
  getUpdateUrl(id2, createdAt) {
    return this.model.links.update.uri.replace("{{id}}", id2).replace("{{createdAt}}", createdAt);
  }
  /**
   * The function `getDeleteUrl` returns a formatted URL for deleting a resource based on the provided
   * `id` and `createdAt` values.
   * @param {string} id - The `id` parameter is a string that represents the unique identifier of the
   * item that you want to delete.
   * @param {number} createdAt - The `createdAt` parameter is a timestamp representing the date and
   * time when the resource was created.
   * @returns A URL string with placeholders for `id` and `createdAt` values replaced with the actual
   * values provided as arguments.
   */
  getDeleteUrl(id2, createdAt) {
    return this.model.links.delete.uri.replace("{{id}}", id2).replace("{{createdAt}}", createdAt);
  }
  /**
   * The function `getDownloadUrl` constructs a download URL by replacing placeholders in a base URI
   * with provided values and appending query parameters.
   * @param {string} fieldname - The `fieldname` parameter is a string that represents the name of the
   * field for which the download URL is being generated.
   * @param {string} id - The `id` parameter in the `getDownloadUrl` function represents the unique
   * identifier of the resource that you want to download.
   * @param {string} language - The `language` parameter in the `getDownloadUrl` function is a string
   * that represents the language for which the download URL is being generated.
   * @param {string} token - The `token` parameter is a string that represents an authentication token
   * used for accessing the download URL.
   * @param {number} time - The `time` parameter in the `getDownloadUrl` function is of type `number`.
   * It is used to generate a download URL by appending it as a query parameter `t` along with the
   * `token` parameter.
   * @returns The function `getDownloadUrl` returns a string that is generated by replacing
   * placeholders in the `this.model.links.download.uri` string with the provided `fieldname`, `id`,
   * and `language` values. Additionally, it appends `?token=&t=` to the end of the
   * generated string.
   */
  getDownloadUrl(fieldname, id2, language, token, time) {
    return (
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      this.model.links.download.uri.replace("{{fieldname}}", fieldname).replace("{{id}}", id2).replace("{{language}}", language) + `?token=${token}&t=${time}`
    );
  }
  /**
   * The function `getResetComplianceUrl` returns a URL with a specific `workitemId` parameter replaced
   * in the URI template.
   * @param {string} workitemId - The `workitemId` parameter is a string that represents the unique
   * identifier of a specific work item. This identifier is used to retrieve or manipulate information
   * related to that particular work item within the system.
   * @returns The function `getResetComplianceUrl` returns a string representing the compliance restart
   * URL with the `workitemId` parameter replaced in the URI template.
   */
  getResetComplianceUrl(workitemId) {
    return this.model.links.compliancerestart.uri.replace("{workitemId}", workitemId);
  }
  /**
   * The function `getSearchUrl` generates a search URL based on various parameters provided.
   * @param {number} rows - The `rows` parameter in the `getSearchUrl` function represents the number
   * of rows to be displayed in the search results. It determines how many search results will be shown
   * per page or per request.
   * @param {number} next - The `next` parameter in the `getSearchUrl` function represents the starting
   * index for the next set of search results. It is used to determine the position from which to fetch
   * the next batch of search results.
   * @param {string} q - The `q` parameter in the `getSearchUrl` function is a string that represents
   * the search query. It is used to specify the search terms for the search operation.
   * @param {any} advance - The `advance` parameter in the `getSearchUrl` function is an object that
   * may contain various properties used to build the search URL. These properties include `q`, `type`,
   * `state`, `noResult`, `searchState`, `ranges`, `options`, `fields`, `fl`,
   * @param {any} filter - The `getSearchUrl` function takes in several parameters to construct a
   * search URL. The `filter` parameter is used to filter the search results based on certain criteria.
   * If the `filter` object has a `url` property and its length is greater than 0, the function appends
   * the
   * @param {any} master - The `getSearchUrl` function takes in several parameters to construct a
   * search URL. Here's a breakdown of the parameters:
   * @returns The `getSearchUrl` function returns a string that represents a search URL based on the
   * provided parameters. The URL is constructed by combining various query parameters such as rows,
   * start, q (query), advance options, filters, and master data. The function handles dynamic
   * replacement of placeholders in the URL template and constructs the final URL accordingly.
   */
  getSearchUrl(rows, next, q, advance, filter3, master) {
    let tmp = this.model.links.search.uri;
    if (filter3?.url && filter3.url.length > 0) {
      tmp = // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      filter3.url + (filter3.url.indexOf("?") > -1 ? "&" : "?") + "filter=" + // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      filter3.type + ":" + // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      filter3.field;
    }
    while (tmp.includes("{{")) {
      const IndexFrom = tmp.indexOf("{{");
      const IndexTo = tmp.indexOf("}}") + 2;
      const s = tmp.substring(IndexFrom, IndexTo);
      const fieldname = s.substring(2, s.length - 2);
      tmp = tmp.replace(s, master ? master[fieldname] || "" : "");
    }
    if (advance) {
      let param = "";
      const arr = Object.keys(advance);
      for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
          case "q":
          case "type":
          case "state":
          case "noResult":
          case "searchState":
          case "ranges":
          case "options":
          case "fields":
            break;
          case "fl":
            break;
          case "action":
            rows = advance[arr[i]].rows || rows;
            param += "&sort=" + advance[arr[i]].action;
            break;
          case "duration":
            param += parseInt(advance[arr[i]]) > -1 ? "&duration=" + advance[arr[i]] : "";
            break;
          case "userId":
            param += advance[arr[i]] && advance[arr[i]] !== -1 ? "&userId=" + advance[arr[i]] : "";
            break;
          case "queueId":
            param += advance[arr[i]] && advance[arr[i]] !== -1 ? "&queueId=" + advance[arr[i]] : "";
            break;
          case "campaignId":
            param += // @ts-expect-error TODO: fix types
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            advance[arr[i]] && advance[arr[i]] !== -1 ? "&campaignId=" + advance[arr[i]] : "";
            break;
          case "dispositionId":
            param += // @ts-expect-error TODO: fix types
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            advance[arr[i]] && advance[arr[i]] !== -1 ? "&dispositionId=" + advance[arr[i]] : "";
            break;
          case "range":
            param += "&rangeType=" + // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            advance.range.type + // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            (advance.range.from ? "&rangeFrom=" + advance.range.from : "") + // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            (advance.range.to ? "&rangeTo=" + advance.range.to : "");
            break;
          default:
            param += // @ts-expect-error TODO: fix types
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            advance[arr[i]] && advance[arr[i]] !== -1 ? "&" + arr[i] + "=" + advance[arr[i]] : "";
            break;
        }
      }
      return (
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        tmp + (tmp.includes("?") ? "&" : "?") + "rows=" + rows + "&start=" + next + "&q=" + encodeURIComponent(q) + param
      );
    }
    return (
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      tmp + (tmp.includes("?") ? "&" : "?") + "rows=" + rows + "&start=" + next + "&q=" + encodeURIComponent(q)
    );
  }
  getDefaultValue(field) {
    switch (field.type) {
      case "jsonArray":
        return [];
      case "boolean":
        return field.hasOwnProperty("default") && field.default !== "empty" ? field.default : false;
      case "dateTime":
      case "datetime":
        return (/* @__PURE__ */ new Date()).getTime();
      case "objectId":
      case "textarea":
      case "bigTextarea":
      case "email":
      case "string":
      case "password":
      case "username":
        return field.hasOwnProperty("default") && field.default !== "empty" ? field.default : null;
      default:
        return null;
    }
  }
  getModelStructureFromFields(fields) {
    const model = {};
    Object.values(fields).forEach((field) => {
      if (field.type === "jsonObject") {
        model[field.name] = this.getModelStructureFromFields(field.fields);
      } else {
        model[field.name] = this.getDefaultValue(field);
      }
    });
    return model;
  }
  getNewModel() {
    const model = this.getModelStructureFromFields(this.getFields());
    model.objectType = this.model.name;
    if ((this.model.localizable || []).length > 0) {
      const languages = this.stateService.getLanguages();
      model.localizations = {};
      this.model.localizable.forEach((fieldname) => {
        model.localizations[fieldname] = {};
        (languages ?? []).forEach((language) => {
          model.localizations[fieldname][language.code] = { language: language.code, value: "" };
        });
      });
    }
    this.getRelationFields().forEach((fieldname) => {
      model[fieldname] = { count: 0, objects: [], total: 0 };
    });
    return model;
  }
  // private reset(): void {
  //     Logger.log('SchemaType - reset');
  //     this.collection.splice(0, this.collection.length);
  //     this.searchConfig = {
  //         q: '',
  //         count: -1,
  //         total: -1,
  //         next: 0,
  //         previous: 0
  //     };
  // }
  getSortedMethod() {
    switch (this.model.name) {
      case "workitem":
      case "recording":
        return {
          ascending: -1,
          fieldname: "model.createdAt",
          getter: (model) => {
            return model.createdAt;
          }
        };
      default:
        return {
          ascending: 1,
          fieldname: "model.name",
          getter: (model) => {
            return model.name;
          }
        };
    }
  }
  // private removeEmptyLocalization(model: any): void {
  //     if ((this.model.localizable || []).length > 0) {
  //         this.model.localizable.forEach((fieldname: string) => {
  //             if (model.localizations.hasOwnProperty(fieldname)) {
  //                 Object.keys(model.localizations).forEach((lang: string) => {
  //                     if (model.localizations[fieldname][lang].value.length === 0) {
  //                         delete model.localizations[fieldname][lang];
  //                     }
  //                 });
  //             }
  //             if (model.localizations[fieldname] && Object.keys(model.localizations[fieldname]).length === 0) {
  //                 delete model.localizations[fieldname];
  //             }
  //         });
  //     }
  // }
  addModel(model, baseModel) {
    this.helper.processData(model);
    const newModel = Object.assign({}, baseModel, model);
    return newModel;
  }
  updateModel(currentModel, newModel) {
    Object.assign(currentModel, newModel);
    return currentModel;
  }
};

// src/models/schemalayout.ts
var SchemaLayout = class {
  constructor(model, dataService) {
    this.model = model;
    this.dataService = dataService;
  }
  /**
   * The function `getName` returns the name property of the model object.
   * @returns The `name` property of the `model` object is being returned.
   */
  getName() {
    return this.model.name;
  }
  /**
   * This TypeScript function returns the label property of the model object.
   * @returns The `label` property of the `model` object is being returned.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getLabel() {
    return this.model.label;
  }
  /**
   * This function retrieves the schema type from the data service based on the schema type name
   * provided in the model.
   * @returns The `getSchemaType()` method is returning a value of type `SchemaType` or `null`. It
   * calls the `getSchemaType()` method of the `dataService` object with the `schemaTypeName` property
   * of the `model` object casted as a string.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getModel() {
    return this.model;
  }
  /**
   * The function `getSchemaType` returns the schema type based on the schema type name retrieved from
   * the data service.
   * @returns The `getSchemaType()` method is returning a value of type `SchemaType` or `null`. It is
   * calling the `getSchemaType()` method of the `dataService` object with the `schemaTypeName`
   * property of the `model` object casted as a string.
   */
  getSchemaType() {
    return this.dataService.getSchemaType(this.model.schemaTypeName);
  }
  /**
   * The function `getPanels` returns an array of panels from the model.
   * @returns An array of panels is being returned.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getPanels() {
    return this.model.panels;
  }
  // public getOption(): Option {
  //     let model: any = this.getModel();
  //     this.dataService.translate(model.label)
  //     return {
  //         _id: model._id,
  //         name: model.name,
  //         label: this.dataService.translate(model.label),
  //         icon: model.icon,
  //         synonyms: model.synonyms || null,
  //         // position: model.position || null,
  //         badges: model.badges || null,
  //         badge: 0,
  //         hover: model.hover || null,
  //         state: '',
  //         selected: false,
  //         // visible: model.visible,
  //         showInNavigation: model.showInSideMenu,
  //         reference: this.getModel()
  //         // command: command,
  //         // style: style,
  //     };
  // }
  /**
   * The `print` function logs the JSON string representation of the `model` property with an
   * indentation of 4 spaces.
   */
  print() {
    Logger.log(JSON.stringify(this.model, void 0, 4));
  }
};

// src/models/schematypes.ts
var schemaTypes = /* @__PURE__ */ new Map();
var SchemaTypes = {
  get(name) {
    return schemaTypes.get(name);
  },
  has(name) {
    return schemaTypes.has(name);
  },
  set(name, schemaType) {
    schemaTypes.set(name, schemaType);
  },
  values() {
    return Array.from(schemaTypes.values());
  }
};

// src/models/schemalayouts.ts
var schemaLayouts = /* @__PURE__ */ new Map();
var SchemaLayouts = {
  get(name) {
    return schemaLayouts.get(name);
  },
  has(name) {
    return schemaLayouts.has(name);
  },
  set(name, schemaLayout) {
    schemaLayouts.set(name, schemaLayout);
  },
  values() {
    return Array.from(schemaLayouts.values());
  }
};

// src/models/events.ts
var InternalEvents = {
  ACDLoginNotification: "ACDLoginNotification",
  ACDLogoutNotification: "ACDLogoutNotification",
  AISummaryNotification: "AISummaryNotification",
  AiEmployeeUpdatedNotification: "AiEmployeeUpdatedNotification",
  BackfillWorkitemsNotification: "BackfillWorkitemsNotification",
  CallExternalTransferNotification: "CallExternalTransferNotification",
  CallRecordingNotification: "CallRecordingNotification",
  CampaignTotalsNotification: "CampaignTotalsNotification",
  CannedMessageCollectionEvent: "CannedMessageCollectionEvent",
  CannedResponseTemplateEvent: "CannedResponseTemplateEvent",
  CannedResponseTemplateImportEvent: "CannedResponseTemplateImportEvent",
  ChangeStatusNotification: "ChangeStatusNotification",
  CompanyDirectoryNotification: "CompanyDirectoryNotification",
  ConferenceStateNotification: "ConferenceStateNotification",
  ContactImportFailureNotificationEvent: "ContactImportFailureNotificationEvent",
  ContactImportNotificationEvent: "ContactImportNotificationEvent",
  ConversationEngagementDataNotification: "ConversationEngagementDataNotification",
  ConversationFeedPushNotification: "ConversationFeedPushNotification",
  ConversationStatusEvent: "ConversationStatusEvent",
  ConversationWorkitemFeedPushNotification: "ConversationWorkitemFeedPushNotification",
  // Copilot Session Lifecycle Events
  CopilotSessionCreatedNotification: "CopilotSessionCreatedNotification",
  CopilotSessionDeletedNotification: "CopilotSessionDeletedNotification",
  CopilotSessionUpdatedNotification: "CopilotSessionUpdatedNotification",
  // Copilot Stream Events
  CopilotStreamChunkNotification: "CopilotStreamChunkNotification",
  CopilotStreamDoneNotification: "CopilotStreamDoneNotification",
  CopilotStreamErrorNotification: "CopilotStreamErrorNotification",
  CopilotStreamStartNotification: "CopilotStreamStartNotification",
  DynamicChangeNotification: "DynamicChangeNotification",
  DynamicStatusChangeNotification: "DynamicStatusChangeNotification",
  EngagementDataStatusUpdateNotification: "EngagementDataStatusUpdateNotification",
  ExtensionWorkitemNotification: "ExtensionWorkitemNotification",
  InformationNotification: "InformationNotification",
  LiveTranscriptionNotification: "LiveTranscriptionNotification",
  LoadMandatoryData: "LoadMandatoryData",
  LoadSystemData: "LoadSystemData",
  LogoutNotification: "LogoutNotification",
  MandatoryDataLoaded: "MandatoryDataLoaded",
  MandatoryDataReceived: "MandatoryDataReceived",
  MessageNotification: "MessageNotification",
  MessageStatusNotification: "MessageStatusNotification",
  MessageTypingNotification: "MessageTypingNotification",
  MuteStateNotification: "MuteStateNotification",
  NewTicketNotification: "NewTicketNotification",
  OfferAcceptedNotification: "OfferAcceptedNotification",
  OfferExpiredNotification: "OfferExpiredNotification",
  OfferNotification: "OfferNotification",
  OfferRejectedNotification: "OfferRejectedNotification",
  OfferTerminatedByHangupNotification: "OfferTerminatedByHangupNotification",
  PhoneStateNotification: "PhoneStateNotification",
  ProactiveAgentAssistNotification: "ProactiveAgentAssistNotification",
  SessionChange: "SessionChange",
  SessionChangeNotification: "SessionChangeNotification",
  SocketClosedNotification: "SocketClosedNotification",
  SocketConnectedNotification: "SocketConnectedNotification",
  SocketConnectionNotification: "SocketConnectionNotification",
  SocketDisconnectedNotification: "SocketDisconnectedNotification",
  SocketErrordNotification: "SocketErrordNotification",
  SocketStateChangedNotification: "SocketStateChangedNotification",
  StatusChangedNotification: "StatusChangedNotification",
  SupervisorNotification: "SupervisorNotification",
  SupervisorStatsNotification: "SupervisorStatsNotification",
  SupervisorTicketUpdateNotification: "SupervisorTicketUpdateNotification",
  SystemDataLoaded: "SystemDataLoaded",
  TypingStatusNotification: "TypingStatusNotification",
  UnreadCountNotification: "UnreadCountNotification",
  UpdateTicketNotification: "UpdateTicketNotification",
  UserAutoReplyConfigNotification: "UserAutoReplyConfigNotification",
  UserMessagesNotification: "UserMessagesNotification",
  UserRemovedFromChannelNotification: "UserRemovedFromChannelNotification",
  WallboardNotification: "WallboardNotification",
  WebSocketSubscriptionStatusNotification: "WebSocketSubscriptionStatusNotification",
  WidgetsDataNotification: "WidgetsDataNotification",
  WorkitemConversationMessageNotification: "WorkitemConversationMessageNotification",
  WorkitemDeletedNotification: "WorkitemDeletedNotification",
  WorkitemDirectConnectNotification: "WorkitemDirectConnectNotification",
  WorkitemFailedNotification: "WorkitemFailedNotification",
  WorkitemPredictiveNotification: "WorkitemPredictiveNotification",
  WorkitemProgressiveNotification: "WorkitemProgressiveNotification",
  WorkitemReadNotification: "WorkitemReadNotification",
  WorkitemRemovedNotification: "WorkitemRemovedNotification",
  WorkitemStateChangeNotification: "WorkitemStateChangeNotification",
  WorkitemSummaryNotification: "WorkitemSummaryNotification",
  WorkitemTerminatedNotification: "WorkitemTerminatedNotification",
  WorkitemTransferNotification: "WorkitemTransferNotification",
  WorkitemVoicemailNotification: "WorkitemVoicemailNotification",
  WorkitemsAISummaryNotification: "WorkitemsAiSummaryNotification"
};
var ExternalEvents = {
  ACDSessionChangeNotification: "ACDSessionChangeNotification",
  AISummaryNotification: "AISummaryNotification",
  ActiveCallStateChangeNotification: "ActiveCallStateChangeNotification",
  AuthenticationSuccess: "AuthenticationSuccess",
  BackfillWorkitemsNotification: "BackfillWorkitemsNotification",
  CallRecordingNotification: "CallRecordingNotification",
  CampaignTotalsNotification: "CampaignTotalsNotification",
  CampaignsChangedNotification: "CampaignsChangedNotification",
  CannedMessageCollectionEvent: "CannedMessageCollectionEvent",
  CannedResponseTemplateEvent: "CannedResponseTemplateEvent",
  CannedResponseTemplateImportEvent: "CannedResponseTemplateImportEvent",
  ChangeStatusNotification: "ChangeStatusNotification",
  CompanyDirectoryNotification: "CompanyDirectoryNotification",
  ConferenceStateNotification: "ConferenceStateNotification",
  ContactImportFailureNotificationEvent: "ContactImportFailureNotificationEvent",
  ContactImportNotificationEvent: "ContactImportNotificationEvent",
  ConversationEngagementDataNotification: "ConversationEngagementDataNotification",
  ConversationStatusEvent: "ConversationStatusEvent",
  ConversationWorkitemsFeedErrorChanged: "ConversationWorkitemsFeedErrorChanged",
  ConversationWorkitemsFeedLoadingChanged: "ConversationWorkitemsFeedLoadingChanged",
  ConversationWorkitemsQueryUpdated: "ConversationWorkitemsQueryUpdated",
  ConversationsFeedErrorChanged: "ConversationsFeedErrorChanged",
  ConversationsFeedLoadingChanged: "ConversationsFeedLoadingChanged",
  ConversationsFeedQueryUpdated: "ConversationsFeedQueryUpdated",
  // Copilot Session Lifecycle Events
  CopilotSessionCreatedNotification: "CopilotSessionCreatedNotification",
  CopilotSessionDeletedNotification: "CopilotSessionDeletedNotification",
  CopilotSessionLoadingChanged: "CopilotSessionLoadingChanged",
  CopilotSessionQueryUpdated: "CopilotSessionQueryUpdated",
  CopilotSessionUpdatedNotification: "CopilotSessionUpdatedNotification",
  CopilotSessionsLoadingChanged: "CopilotSessionsLoadingChanged",
  CopilotSessionsQueryUpdated: "CopilotSessionsQueryUpdated",
  // Copilot Stream Events
  CopilotStreamChunkNotification: "CopilotStreamChunkNotification",
  CopilotStreamDoneNotification: "CopilotStreamDoneNotification",
  CopilotStreamErrorNotification: "CopilotStreamErrorNotification",
  CopilotStreamStartNotification: "CopilotStreamStartNotification",
  DynamicChangeNotification: "DynamicChangeNotification",
  DynamicCompanyDirectoryChangeNotification: "DynamicCompanyDirectoryChangeNotification",
  EngagementDataStatusUpdateNotification: "EngagementDataStatusUpdateNotification",
  ExpiredTokenNotification: "ExpiredTokenNotification",
  ExtensionWorkitemNotification: "ExtensionWorkitemNotification",
  InformationNotification: "InformationNotification",
  InitAutoLoginToAcd: "InitAutoLoginToAcd",
  InitAutoLoginToAcdEnabled: "InitAutoLoginToAcdEnabled",
  InitAutoLoginToAcdError: "InitAutoLoginToAcdError",
  InitChangeTelephonyImplementation: "InitChangeTelephonyImplementation",
  InitChangeTelephonyImplementationError: "InitChangeTelephonyImplementationError",
  InitChangeTelephonyImplementationFreeswitch: "InitChangeTelephonyImplementationFreeswitch",
  InitChangeTelephonyImplementationPSTN: "InitChangeTelephonyImplementationPSTN",
  InitChangeTelephonyImplementationTwilio: "InitChangeTelephonyImplementationTwilio",
  InitConnectStatisticsSocket: "InitConnectStatisticsSocket",
  InitConnectStatisticsSocketError: "InitConnectStatisticsSocketError",
  InitConnectStatisticsSocketSuccess: "InitConnectStatisticsSocketSuccess",
  InitConnectUserSocket: "InitConnectUserSocket",
  InitConnectUserSocketError: "InitConnectUserSocketError",
  InitConnectUserSocketSuccess: "InitConnectUserSocketSuccess",
  InitDataDogServiceLoadMandatoryData: "InitDataDogServiceLoadMandatoryData",
  /**
   * @deprecated InitDataDogServiceSetUser will be removed in a future version
   */
  InitDataDogServiceSetUser: "InitDataDogServiceSetUser",
  InitError: "init_error",
  InitFetchWidgets: "InitFetchWidgets",
  InitFetchWidgetsError: "InitFetchWidgetsError",
  InitFetchWidgetsSuccess: "InitFetchWidgetsSuccess",
  /**
   * @deprecated InitRefreshToken will be removed in a future version
   */
  InitRefreshToken: "InitRefreshToken",
  /**
   * @deprecated InitRefreshTokenCycleStarted will be removed in a future version
   */
  InitRefreshTokenCycleStarted: "InitRefreshTokenCycleStarted",
  InitRefreshTokenError: "InitRefreshTokenError",
  /**
   * @deprecated InitRefreshTokenSuccess will be removed in a future version
   */
  InitRefreshTokenSuccess: "InitRefreshTokenInitRefreshTokenSuccess",
  /**
   * @deprecated InitResolveSession will be removed in a future version
   */
  InitResolveSession: "InitResolveSession",
  InitRetrieveLocalStorageDevices: "InitRetrieveLocalStorageDevices",
  /**
   * @deprecated InitRetrieveLocalStorageDevicesError will be removed in a future version
   */
  InitRetrieveLocalStorageDevicesError: "InitRetrieveLocalStorageDevicesError",
  /**
   * @deprecated InitRetrieveLocalStorageDevicesSuccess will be removed in a future version
   */
  InitRetrieveLocalStorageDevicesSuccess: "InitRetrieveLocalStorageDevicesSuccess",
  InitStatusNotification: "InitStatusNotification",
  InitSuccess: "init_success",
  LanguageLoaded: "LanguageLoaded",
  LiveTranscriptionCompletedNotification: "LiveTranscriptionCompletedNotification",
  LiveTranscriptionNotification: "LiveTranscriptionNotification",
  LoginSuccess: "LoginSuccess",
  LogoutNotification: "LogoutNotification",
  MessageNotification: "MessageNotification",
  MessageTypingNotification: "MessageTypingNotification",
  /**
   * @deprecated MessagesNotification will be removed in a future version
   */
  MessagesNotification: "MessagesNotification",
  MonitorWorkitemNotification: "MonitorWorkitemNotification",
  NetWorkStateChangedNotification: "NetWorkStateChangedNotification",
  // Ticket Notifications (Nexar)
  NewTicketNotification: "NewTicketNotification",
  OffersChangedNotification: "OffersChangedNotification",
  PhoneStateNotification: "PhoneStateNotification",
  ProactiveAgentAssistNotification: "ProactiveAgentAssistNotification",
  QualityWarningsChangedNotification: "QualityWarningsChangedNotification",
  Ready: "ready",
  SessionChangeNotification: "SessionChangeNotification",
  SessionStateUpdateNotification: "SessionStateUpdateNotification",
  StatusChangedNotification: "StatusChangedNotification",
  SupervisorNotification: "SupervisorNotification",
  SupervisorStatsNotification: "SupervisorStatsNotification",
  SupervisorTicketUpdateNotification: "SupervisorTicketUpdateNotification",
  TicketDetailLoadingChanged: "TicketDetailLoadingChanged",
  TicketLinkedWorkitemsLoadingChanged: "TicketLinkedWorkitemsLoadingChanged",
  TicketLinkedWorkitemsQueryUpdated: "TicketLinkedWorkitemsQueryUpdated",
  TicketNotesLoadingChanged: "TicketNotesLoadingChanged",
  TicketsLoadingChanged: "TicketsLoadingChanged",
  TicketsQueryUpdated: "TicketsQueryUpdated",
  TokenRefreshNotification: "TokenRefreshNotification",
  TypingStatusNotification: "TypingStatusNotification",
  UnreadCountNotification: "UnreadCountNotification",
  UpdateTicketNotification: "UpdateTicketNotification",
  UserAutoReplyConfigNotification: "UserAutoReplyConfigNotification",
  UserMessagesNotification: "UserMessagesNotification",
  UserRemovedFromChannelNotification: "UserRemovedFromChannelNotification",
  UserSocketStateChangedNotification: "UserSocketStateChangedNotification",
  UsersChangedNotification: "UsersChangedNotification",
  WallboardNotification: "WallboardNotification",
  WebRTCClientReady: "WebRTCClientReady",
  WebRTCConnectionState: "WebRTCConnectionState",
  WebRTCNotification: "WebRTCNotification",
  WebRTCSocketStatusNotification: "WebRTCSocketStatusNotification",
  WorkitemConversationMessageNotification: "WorkitemConversationMessageNotification",
  WorkitemDeletedNotification: "WorkitemDeletedNotification",
  WorkitemFailedNotification: "WorkitemFailedNotification",
  WorkitemPredictiveNotification: "WorkitemPredictiveNotification",
  WorkitemProgressiveNotification: "WorkitemProgressiveNotification",
  WorkitemReadNotification: "WorkitemReadNotification",
  WorkitemRemovedNotification: "WorkitemRemovedNotification",
  WorkitemStateChangeNotification: "WorkitemStateChangeNotification",
  WorkitemSummaryNotification: "WorkitemSummaryNotification",
  WorkitemTerminatedNotification: "WorkitemTerminatedNotification",
  WorkitemTerminationFailedNotification: "WorkitemTerminationFailedNotification",
  WorkitemTransferNotification: "WorkitemTransferNotification",
  WorkitemVoicemailNotification: "WorkitemVoicemailNotification",
  WorkitemsAISummaryNotification: "WorkitemsAiSummaryNotification",
  WorkitemsChangedNotification: "WorkitemsChangedNotification"
};

// src/models/schemaTypeClient.ts
import { AxiosHeaders } from "axios";

// src/utilities/guards/user.ts
var isUserObject = (value) => {
  return typeof value === "object" && value !== null && "objectType" in value && typeof value.objectType === "string" && value.objectType === "user";
};
var normalizeUserQueues = (queues) => {
  const objects = queues?.objects ?? [];
  return {
    ...queues ?? {},
    count: queues?.count ?? objects.length,
    objects,
    total: queues?.total ?? objects.length
  };
};

// src/models/schemaTypeClient.ts
var REPLACEABLE_PATH_VALUE_REGEX = /\{?\{[a-z]+\}\}?/gi;
var BaseSchemaTypeClient = class {
  stateService;
  localStorageService;
  persisterClient;
  logger;
  constructor({
    localStorageService,
    loggerService,
    persisterClient,
    stateService
  }) {
    this.stateService = stateService;
    this.localStorageService = localStorageService;
    this.persisterClient = persisterClient;
    this.logger = loggerService;
  }
  has(name) {
    return this.stateService.getSchemaTypeMap().has(name);
  }
  async search(name, { q = "", queryParams, rows = 100, start = 0 } = {}) {
    if (!this.stateService.canSearch(name)) {
      throw new Error(`Permission denied search ${name}`);
    }
    this.logger.debug(`SchemaTypeClient - search - schemaTypeName [${name}]`);
    const uri = this.getLinkURI(name, "search");
    const params = {
      ...queryParams,
      q,
      rows,
      start
    };
    const response = await axiosInstance.get(uri, {
      params
    });
    return response.data;
  }
  async create(name, payload) {
    this.logger.debug(`SchemaTypeClient - create - schemaTypeName [${name}] and payload`, payload);
    const { file } = payload;
    let { data } = payload;
    const uri = this.getLinkURI(name, "create");
    const contentType = this.getLinkContentType(name, "create");
    const isFormDataRequired = contentType === "multipart/form-data";
    data = this.fixLocalizableFields(name, data);
    let formData;
    const headers = new AxiosHeaders();
    if (isFormDataRequired) {
      headers.setContentType("multipart/form-data");
      formData = new FormData();
      formData.append("object", JSON.stringify(data));
      if (file) {
        formData.append("file_file", file);
      }
    }
    const response = await axiosInstance.post(
      uri,
      formData ?? data,
      { headers }
    );
    return response.data;
  }
  async retrieve(name, payload) {
    this.logger.debug(
      `SchemaTypeClient - retrieve - schemaTypeName [${name}] and payload`,
      payload
    );
    const uri = this.getLinkURI(name, "retrieve", { ...payload });
    const isStaticDataRequest = name === "user" && this.stateService.getUserId() === payload.id || name === "userprofile" && this.stateService.getUserProfileId() === payload.id || name === "tenant" && this.stateService.getTenantId() === payload.id;
    let data;
    if (isStaticDataRequest) {
      try {
        data = await queryClient.ensureQueryData({
          queryFn: async ({ client, queryKey }) => {
            const queryData = client.getQueryData(queryKey);
            const response = await axiosInstance.get(uri, {
              params: {
                ifModifiedSince: queryData?.modifiedAt ? queryData.modifiedAt : void 0
              }
            });
            if (response.status === 304) {
              if (isUserObject(queryData)) {
                let localDevices;
                try {
                  localDevices = await this.localStorageService.getObjectValue(
                    "user.settings.devices"
                  );
                } catch (error) {
                  this.logger.error(
                    "SchemaTypeClient - retrieve - error retrieving devices from local storage:",
                    error
                  );
                }
                queryData.settings.devices = {
                  ...queryData.settings.devices ?? {},
                  ...localDevices ?? {}
                };
                queryData.queues = normalizeUserQueues(queryData.queues);
              }
              return queryData;
            }
            if (isUserObject(response.data)) {
              let localDevices;
              try {
                localDevices = await this.localStorageService.getObjectValue(
                  "user.settings.devices"
                );
              } catch (error) {
                this.logger.error(
                  "SchemaTypeClient - retrieve - error retrieving devices from local storage:",
                  error
                );
              }
              const queryDataDevices = isUserObject(queryData) ? queryData.settings.devices : void 0;
              response.data.settings.devices = {
                ...queryDataDevices ?? {},
                ...localDevices ?? {}
              };
              response.data.queues = normalizeUserQueues(response.data.queues);
            }
            return response.data;
          },
          queryKey: ["static", name],
          revalidateIfStale: true
        });
      } catch (error) {
        this.logger.error(
          "SchemaTypeClient - retrieve - error retrieving static data from queryClient:",
          error
        );
        throw error;
      }
    } else {
      const response = await axiosInstance.get(uri);
      data = response.data;
    }
    return data;
  }
  async download(name, payload) {
    const uri = this.getLinkURI(name, "download", { ...payload });
    const response = await axiosInstance.get(uri);
    return response.data;
  }
  async delete(name, payload) {
    this.logger.debug(
      `SchemaTypeClient - delete - schemaTypeName [${name}] with id [${payload.id}]`,
      payload
    );
    const uri = this.getLinkURI(name, "delete", { ...payload });
    const response = await axiosInstance.delete(uri);
    return response.data;
  }
  async update(name, payload) {
    this.logger.debug(`SchemaTypeClient - update - schemaTypeName [${name}] and payload`, payload);
    const { createdAt, file, filesMetadata, id: id2 } = payload;
    let { data } = payload;
    const uri = this.getLinkURI(name, "update", { createdAt, id: id2 });
    const contentType = this.getLinkContentType(name, "update");
    const isFormDataRequired = contentType === "multipart/form-data";
    data = this.fixLocalizableFields(name, data);
    let response;
    let localUserDevices;
    const queryKey = ["static", name];
    const shouldOptimisticallyUpdateUser = name === "user" && this.stateService.getUserId() === id2;
    if (shouldOptimisticallyUpdateUser) {
      const userDetails = data;
      if (userDetails.settings?.devices) {
        try {
          await this.localStorageService.upsertObjectValue(
            "user.settings.devices",
            {
              ...userDetails.settings.devices
            }
          );
          localUserDevices = userDetails.settings.devices;
        } catch (error) {
          this.logger.error(
            "SchemaTypeClient - update - error saving devices to local storage:",
            error
          );
        }
        delete userDetails.settings.devices;
      } else {
        try {
          localUserDevices = await this.localStorageService.getObjectValue(
            "user.settings.devices"
          );
        } catch (error) {
          this.logger.error(
            "SchemaTypeClient - update - error retrieving devices from local storage:",
            error
          );
        }
      }
    }
    const backupUserData = shouldOptimisticallyUpdateUser ? queryClient.getQueryData(queryKey) : void 0;
    if (backupUserData) {
      queryClient.setQueryData(queryKey, {
        ...backupUserData,
        ...data,
        settings: {
          ...backupUserData.settings,
          ...data.settings ?? {},
          devices: {
            ...backupUserData.settings.devices ?? {},
            ...localUserDevices ?? {}
          }
        }
      });
    }
    try {
      if (isFormDataRequired) {
        const formData = new FormData();
        formData.append("fieldModifiers", JSON.stringify(data));
        if (filesMetadata) {
          formData.append("filesMetadata", JSON.stringify(filesMetadata));
        }
        if (file) {
          formData.append("file_file", file);
        }
        response = await axiosInstance.post(
          uri,
          formData,
          {
            headers: {
              "Content-Type": contentType
            }
          }
        );
      } else {
        response = await axiosInstance.patch(
          uri,
          data
        );
      }
    } catch (error) {
      if (backupUserData) {
        const backupDataWithDevices = {
          ...backupUserData,
          settings: {
            ...backupUserData.settings,
            devices: {
              ...backupUserData.settings.devices ?? {},
              ...localUserDevices ?? {}
            }
          }
        };
        queryClient.setQueryData(queryKey, backupDataWithDevices);
      }
      throw error;
    }
    const currentQueryData = queryClient.getQueryData(
      queryKey
    );
    if (!currentQueryData) {
      if (isUserObject(response.data) && this.stateService.getUserId() === id2) {
        response.data.settings.devices = {
          ...response.data.settings.devices ?? {},
          ...localUserDevices ?? {}
        };
        response.data.queues = normalizeUserQueues(response.data.queues);
      }
      return response.data;
    }
    let newQueryData;
    const newData = response.data;
    if (Array.isArray(currentQueryData)) {
      newQueryData = currentQueryData.map(
        (object) => object._id === newData._id ? newData : object
      );
    } else if (currentQueryData._id === newData._id) {
      newQueryData = newData;
      if (isUserObject(currentQueryData) && isUserObject(newQueryData)) {
        newQueryData.settings.devices = {
          ...currentQueryData.settings.devices ?? {},
          ...localUserDevices ?? {}
        };
        newQueryData.queues = normalizeUserQueues(newQueryData.queues);
      }
    }
    if (newQueryData) {
      queryClient.setQueryData(queryKey, newQueryData);
      const persister = this.persisterClient.getQueryPersister();
      persister?.persistQueryByKey(queryKey, queryClient).catch((error) => {
        this.logger.error("SchemaTypeClient - update - persister error: ", error);
      });
    }
    return response.data;
  }
  getLink(schemaTypeName, linkName) {
    const map = this.stateService.getSchemaTypeMap();
    const schemaType = map.get(schemaTypeName);
    return schemaType?.links[linkName];
  }
  getLinkURI(schemaTypeName, linkName, replacements) {
    const link = this.getLink(schemaTypeName, linkName);
    const uri = link?.uri;
    if (!uri) {
      throw new Error(`Expected to find ${schemaTypeName} Schema Type with ${linkName} Link URI.`);
    }
    let newURI = uri;
    const matches = uri.match(REPLACEABLE_PATH_VALUE_REGEX);
    matches?.forEach((match) => {
      const path = match.replaceAll("{", "").replaceAll("}", "");
      const value = replacements?.[path];
      if (!value) {
        throw new Error(
          `Expected ${match} to be replaced in ${uri}. The replacement value must be passed to getLinkURI()`
        );
      }
      const stringifiedValue = typeof value === "string" ? value : JSON.stringify(value);
      newURI = newURI.replace(match, stringifiedValue);
    });
    return newURI;
  }
  getLinkContentType(schemaTypeName, linkName) {
    const link = this.getLink(schemaTypeName, linkName);
    const contentType = link?.contentType;
    if (!contentType) {
      throw new Error(`Expected to find ${schemaTypeName} Schema Type with ${linkName} Link`);
    }
    return contentType;
  }
  async request(schemaTypeName, linkName, options) {
    this.logger.debug(
      `SchemaTypeClient - request - schemaTypeName [${schemaTypeName}] linkName [${linkName}] and payload`,
      options
    );
    if (linkName === "create") {
      const response2 = await this.create(
        schemaTypeName,
        options.payload
      );
      return response2;
    } else if (linkName === "retrieve") {
      const response2 = await this.retrieve(
        schemaTypeName,
        options.payload
      );
      return response2;
    } else if (linkName === "update") {
      const response2 = await this.update(
        schemaTypeName,
        options.payload
      );
      return response2;
    } else if (linkName === "delete") {
      const response2 = await this.delete(
        schemaTypeName,
        options.payload
      );
      return response2;
    } else if (linkName === "search") {
      const response2 = await this.search(
        schemaTypeName,
        options.payload
      );
      return response2;
    } else if (linkName === "download") {
      const response2 = await this.download(
        schemaTypeName,
        options.payload
      );
      return response2;
    }
    const httpMethod = options.method ?? (options.data ? "post" : "get");
    const uri = this.getLinkURI(schemaTypeName, linkName, options.replacements);
    const contentType = this.getLinkContentType(schemaTypeName, linkName);
    const isFormDataRequired = !options.jsonOverride && contentType === "multipart/form-data" && httpMethod !== "get" && httpMethod !== "GET";
    let formData;
    const headers = new AxiosHeaders();
    if (options.headers) {
      for (const header of Object.keys(options.headers)) {
        headers.set(header, options.headers[header]);
      }
    }
    if (isFormDataRequired && options.data || options.files?.length) {
      headers.setContentType("multipart/form-data");
      formData = new FormData();
      if (schemaTypeName === "contact" && linkName === "import" && options.data?.["file"]) {
        for (const key in options.data) {
          if (options.data[key] === void 0 || options.data[key] === null) {
            continue;
          }
          if (typeof options.data[key] == "string" || key == "file") {
            formData.append(key, options.data[key]);
          } else {
            formData.append(key, JSON.stringify(options.data[key]));
          }
        }
      } else {
        if (options.files && options.files.length > 0) {
          for (const file of options.files) {
            formData.append("file", file);
          }
        }
        if (options.data) {
          formData.append("object", JSON.stringify(options.data));
        }
      }
    }
    const response = await axiosInstance({
      data: formData ?? options.data,
      headers,
      method: httpMethod,
      params: options.queryParams,
      url: uri
    });
    return response.data;
  }
  get(schemaTypeName) {
    const map = this.stateService.getSchemaTypeMap();
    const schemaType = map.get(schemaTypeName);
    if (!schemaType) {
      throw new Error(`Expected to find ${schemaTypeName} Schema Type`);
    }
    return schemaType;
  }
  fixLocalizableFields(schemaTypeName, data) {
    const schemaType = this.get(schemaTypeName);
    if (schemaType.localizable) {
      data = { ...data };
      const language = this.stateService.getLanguage();
      const { localizable } = schemaType;
      localizable.forEach((localizableField) => {
        const value = data[localizableField];
        if (!data[localizableField]) {
          return;
        }
        const localizations = {
          ...data["localizations"]
        };
        if (!localizations[localizableField]?.[language]) {
          localizations[localizableField] = {
            [language]: {
              language,
              value
            }
          };
        }
        data["localizations"] = localizations;
      });
    }
    return data;
  }
};

// src/internal/dependencyInjectionContainer/index.ts
import { asClass, asValue, createContainer } from "awilix";

// src/services/helper/base.ts
var Helper = class {
  constructor(language, dataService) {
    this.language = language;
    this.dataService = dataService;
  }
  // public processData(model: any, schemaType: SchemaType): void {
  //     if ( ! model.name ) {
  //         this.adjustName(model);
  //     }
  //     let avatars: Array<any> = schemaType.getAvatarFields();
  //     if ( avatars.length > 0 ) {
  //         /* read base 64 data from image */
  //         this.loadAvatar();
  //     }
  // }
  adjustName(model) {
    if (model._id) {
      if (!model.name && (model.firstName || model.lastName || model.username || model.tenantId)) {
        if (model.firstName || model.lastName) {
          model.name = `${model.firstName} ${model.lastName}`;
        } else if (model.username) {
          model.name = `${model.username}`;
        }
      }
      if (!model.name) {
        model.name = "Unknown";
      }
      model.name = model.name.trim();
    } else {
      model.name = "";
    }
  }
  loadAvatar() {
    Logger.log("Helper - loadAvatar");
  }
  getHelper(_objectType) {
    return null;
  }
};

// src/services/helper/layout.ts
var HelperLayout = class _HelperLayout extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperLayout(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    const schemaType = this.dataService.getSchemaTypeModelByName(
      model.schemaTypeName
    );
    model.name = model.name || schemaType.schemaTypeName;
    model.label = schemaType.label;
    model.icon = schemaType.icon;
    model.showWallboard = model.hasOwnProperty("showWallboard") && model.showWallboard;
    if (!model.hasOwnProperty("showInSideMenu")) {
      model.showInSideMenu = true;
    }
    if (model.hasOwnProperty("showInNavigationMenu")) {
      model.showInSideMenu = model.showInNavigationMenu;
    }
    if (!model.type) {
      model.type = "panels";
    }
    if (!model.index) {
      model.index = "search";
    }
    delete model?.list?.nameField;
    delete model?.list?.descriptionField;
    delete model?.list?.timeField;
    delete model?.list?.otherField;
    delete model.designer;
    delete model.group;
    delete model.panel;
    delete model.showFooter;
    delete model.position;
    delete model.showInNavigationMenu;
    model.panels = model.panels.filter(
      (panel) => (panel.version === void 0 || panel.version === 0 || panel.version === 2) && !(panel.type === "list" && (panel.version === void 0 || panel.version === 1))
    );
    model.panels.forEach((panel) => delete panel.version);
    sortObject(model.panels, 1, (model2) => {
      return model2.position;
    });
    model.panels.forEach((panel) => {
      try {
        this.setPanel(panel, schemaType);
      } catch (error) {
        model.panels[model.panels.indexOf(panel)] = null;
      }
    });
    model.panels = model.panels.filter((panel) => panel !== null);
  }
  setPanel(panel, mainSchemaType) {
    if (!panel.layout) {
      panel.layout = {};
    }
    if (!panel.title) {
      panel.title = {};
    }
    panel._hide = false;
    panel._panelId = panel.staticId || getUniqueIdAsString();
    panel.minHeight = panel.minHeight === null || panel.minHeight === void 0 ? 200 : panel.minHeight;
    const schemaType = this.dataService.getSchemaTypeModel(panel?.expansion?.schema) || mainSchemaType;
    if (panel.type === "wrapper") {
      if (!panel.version && panel.version !== 0) {
        panel.version = 0;
      }
      const labels = [];
      ((panel.title || {}).label || "T_UNKNOWN").split(" ").forEach((label) => {
        labels.push(this.dataService.adjustLabel(this.language, label, "Unknown") || "");
      });
      panel.title.label = labels.join(" ");
      panel.left.forEach((leftPanel) => {
        this.setPanel(leftPanel, mainSchemaType);
      });
      panel.right.forEach((rightPanel) => {
        this.setPanel(rightPanel, mainSchemaType);
      });
    }
    if (panel.type === "form") {
      panel.title.label = panel.title.label ? this.dataService.adjustLabel(this.language, panel.title.label, "Unknown") : this.dataService.adjustLabel(
        this.language,
        schemaType.label,
        schemaType.label
      );
    }
    if (panel.type === "list") {
      panel.title.label = panel.title.label ? this.dataService.adjustLabel(this.language, panel.title.label, "Unknown") : this.dataService.adjustLabel(
        this.language,
        schemaType.relations[panel.relation.field].label,
        "N/A"
      );
    }
    if (panel.type === "data") {
      try {
        panel.title.label = panel.title.label ? this.dataService.adjustLabel(this.language, panel.title.label, "Unknown") : this.dataService.adjustLabel(
          this.language,
          panel.data.label || schemaType.relations[panel.data.fieldname].label,
          "N/A"
        );
      } catch (error) {
        Logger.error(error);
      }
    }
    if (!panel.layout.style) {
      if (panel.type === "page") {
        panel.layout.style = "page-view";
      }
      if (panel.type === "form") {
        panel.layout.style = "form-view";
      }
      if (panel.type === "list") {
        panel.layout.style = "grid-view";
      }
    }
    if (panel.layout.style === "grid-view" && !panel.layout.component) {
      panel.layout.component = "card";
    }
    if (!panel.layout.fields) {
      panel.layout.fields = [];
    }
    if (!panel.layout.headers) {
      panel.layout.headers = [];
    }
    if (!panel.layout.styles || panel.layout.styles.length === 1) {
      panel.layout.styles = [];
    }
    if (panel.showCategory === void 0 || panel.showCategory === null) {
      panel.showCategory = false;
    }
    if (panel.type === "data") {
      ["title", "data"].forEach((fieldname) => {
        if (panel[fieldname]?.actions) {
          const actions = panel[fieldname].actions;
          actions.forEach((action) => {
            if (action.label) {
              action.label = this.dataService.adjustLabel(
                this.language,
                action.label,
                action.label
              );
            }
            if (action.hover) {
              action.hover = this.dataService.adjustLabel(
                this.language,
                action.hover,
                action.hover
              );
            }
            (action.fields || []).forEach((field) => {
              try {
                if (field.schema) {
                  const properties = this.dataService.getSchemaType(field.schema).getField(field.name);
                  Object.keys(properties || {}).forEach((key) => {
                    field[key] = properties[key];
                  });
                }
                field.label = this.dataService.adjustLabel(
                  this.language,
                  field.label,
                  field.label
                );
                if (!field.hasOwnProperty("readOnly")) {
                  field.readOnly = false;
                }
                field._component = adjustComponent(field);
              } catch (error) {
              }
            });
          });
        }
      });
    } else {
      if (!panel.title.actions) {
        panel.title.actions = {};
      }
      if (!panel.title.icon) {
        panel.title.icon = schemaType.icon || "icon-bullseye";
      }
      if (panel.title.layout && !panel.title.layout?.default) {
        panel.title.layout.default = "grid-view";
      }
      for (const key in panel.title.actions) {
        const action = panel.title.actions[key];
        action.name = key;
        if (!action.icon) {
          switch (key) {
            case "add":
              action.icon = "icon-add-c";
              break;
            case "clone":
              action.icon = "icon-lead-to-contact";
              break;
            case "edit":
              action.icon = "icon-edit-pencil";
              break;
            case "get":
              action.icon = "icon-bullseye";
              break;
            case "post":
              action.icon = "icon-bullseye";
              break;
            case "set":
              action.icon = "icon-open-dialog";
              break;
          }
        }
        if (action.label) {
          action.label = this.dataService.adjustLabel(
            this.language,
            action.label,
            action.label
          );
        }
        if (action.hover?.label) {
          action.hover = this.dataService.adjustLabel(
            this.language,
            action.hover.label,
            action.hover.label
          );
        }
        (action.fields || []).forEach((field) => {
          try {
            const properties = this.dataService.getSchemaTypeModel(field.schema);
            Object.keys(properties || {}).forEach((key2) => {
              field[key2] = properties[key2];
            });
            field.label = this.dataService.adjustLabel(
              this.language,
              field.label,
              field.label
            );
            if (!field.hasOwnProperty("readOnly")) {
              field.readOnly = false;
            }
            field._component = adjustComponent(field);
          } catch (error) {
          }
        });
        if (action.popup) {
          if (action.popup.title) {
            action.popup.title.label = this.dataService.adjustLabel(
              this.language,
              action.popup.title.label,
              action.popup.title.label
            );
          }
          if (action.popup.placeholder) {
            action.popup.placeholder.label = this.dataService.adjustLabel(
              this.language,
              action.popup.placeholder.label,
              action.popup.placeholder.label
            );
          }
        }
        if (!action.mandatoryFields) {
          action.mandatoryFields = [];
        }
        if (action.linkFromSchemaField) {
          action.link = schemaType.fields[action.linkFromSchemaField].links[action.name];
        }
      }
    }
    this.adjustFields(panel.layout.fields);
    this.adjustHeaders(panel.layout.headers, panel.layout.fields);
    if (panel.relation) {
      if (!panel.relation.order && !schemaType.fields[panel.relation.order]) {
        panel.relation.order = "-createdAt";
      }
      let icon = null;
      let properties = {};
      if (panel.relation.field && schemaType.relations) {
        properties = schemaType.relations[panel.relation.field];
        if (properties) {
          icon = this.dataService.getSchemaTypeModel(properties.target.type)?.icon;
          for (const key in properties) {
            panel.relation[key] = properties[key];
          }
        }
      }
      if (!panel.layout.icon) {
        panel.layout.icon = icon || "icon-bullseye";
      }
      if (!panel.layout.name) {
        panel.layout.name = "name";
      }
    }
  }
  // private getFieldsFromSchemaType(name: string): Array<any> {
  //     let schemaType: SchemaType = this.dataService.getSchemaType(name);
  //     if ( schemaType ) {
  //         return schemaType.getFields();
  //     }
  //     return [];
  // }
  getFieldFromSchemaType(name, fieldname) {
    const schemaType = this.dataService.getSchemaType(name);
    return schemaType ? schemaType.getFields().find((field) => field.name === fieldname) : null;
  }
  // @ts-ignore implicit any
  adjustFields(fields) {
    fields.forEach((field) => {
      if (field.title) {
        field.title.label = field.label = this.dataService.adjustLabel(
          this.language,
          field.title.label,
          field.title.label
        );
        field.type = "title";
      } else {
        Object.assign(
          field,
          this.getFieldFromSchemaType(field.schema, field.name),
          field
        );
        if (field.format) {
          field.type = field.format;
        }
        field.label = this.dataService.adjustLabel(
          this.language,
          field.label,
          field.label
        );
        (field.actions || []).forEach((action) => {
          (action.context || []).forEach((context) => {
            if (context.label) {
              context.label = this.dataService.adjustLabel(
                this.language,
                context.label,
                context.label
              );
            }
          });
          (action.options || []).forEach((option) => {
            if (option.label) {
              option.label = this.dataService.adjustLabel(
                this.language,
                option.label,
                option.label
              );
            }
          });
        });
        if (!field.hasOwnProperty("readOnly")) {
          field.readOnly = false;
        }
      }
      if (!field.containerClass) {
        field.containerClass = "normal";
      } else {
        if (field.type === "html") {
          field.containerClass = "full-height";
        }
        if (field.type === "title") {
          field.containerClass = field.type;
        }
      }
      field._component = adjustComponent(field);
      field._hasCondition = field.conditions !== null && field.conditions !== void 0;
      field._show = true;
    });
  }
  adjustHeaders(headers, fields) {
    for (let i = 0; i < headers.length; i++) {
      const header = headers[i];
      if (header.hasOwnProperty("label")) {
        headers[i] = this.dataService.adjustLabel(this.language, header.label, "Unknown");
      } else if (header.hasOwnProperty("name") && header.hasOwnProperty("schema")) {
        const properties = this.dataService.getSchemaType(header.schema).getField(header.name);
        headers[i] = this.dataService.adjustLabel(this.language, properties?.label, "Unknown");
      } else {
        const tmp = fields.find((field) => field.name === header);
        headers[i] = tmp?.label || header || "Unknown";
      }
    }
  }
  // private getSchemaTypeFromExpansion(panel: any): any {
  //     if ( panel.expansion ) {
  //         try {
  //             return this.dataService.getSchemaType(panel.expansion.schema);
  //         } catch (err) {
  //             Logger.error(err);
  //         }
  //     } else {
  //         return this.schemaType;
  //     }
  //     return null;
  // };
};

// src/services/helper/type.ts
var HelperType = class _HelperType extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperType(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    if (model.name === "realtimestats") {
      const statistics = model.fields.stats || {};
      Object.keys(statistics).forEach((statistic) => {
        const stat = statistics[statistic];
        Object.keys(stat.fields || {}).forEach((fieldname) => {
          if (fieldname === "statuses") {
            stat.fields[fieldname] = {
              fields: stat.fields[fieldname],
              label: fieldname,
              type: "jsonObject"
            };
            Object.keys(stat.fields[fieldname].fields).forEach((fieldname2) => {
              stat.fields[fieldname].fields[fieldname2] = {
                fields: stat.fields[fieldname].fields[fieldname2],
                label: fieldname2,
                type: "jsonObject"
              };
            });
          }
        });
      });
    }
    model.mappable = model.mappable === 1;
    this.adjustSchemaTypeFields(model.fields, model.definitions, model.localizable);
  }
  adjustSchemaTypeFields(fields, definitions, localizable) {
    Object.keys(fields).forEach((fieldname) => {
      let field = fields[fieldname];
      if (field.hasOwnProperty("_ref")) {
        try {
          const definition = new Function(
            "definitions",
            `return definitions.${field._ref.split("/").slice(2).join(".")}`
          )(definitions);
          field = Object.assign(definition, field);
          delete field._ref;
        } catch (error) {
          Logger.log(`Reference error in schema ${field._ref}`, definitions);
          field.label = "Reference error in schema";
          field.type = "string";
        }
      }
      if (field.type === "avatar") {
      }
      if (!field.hasOwnProperty("subType")) {
        field.subType = null;
      }
      if (field.type === "objectId" && field.hasOwnProperty("selection")) {
        field.type = "query";
      }
      field.name = fieldname;
      field.mappable = field.mappable === 1;
      field.isLocalizable = localizable !== void 0 && localizable !== null && localizable.includes(fieldname);
      field._component = field.type;
      if (field.type?.startsWith("jsonArray")) {
        const tmp = field.type.split(":");
        if (tmp.length === 2) {
          field.type = tmp[0];
          field.subType = tmp[1];
          if (field.subType === "timeevent") {
            field.type = "timeevent";
            field.subType = null;
          }
        } else if (!["queryFields", "uniqueKey", "localizable", "relations", "panels"].includes(fieldname)) {
          field.type = "query";
        }
      }
      if (field.type === "jsonObject") {
      }
      field._component = adjustComponent(field);
      if (field.hasOwnProperty("fields")) {
        this.adjustSchemaTypeFields(field.fields, definitions, localizable);
      }
    });
  }
  // private adjustFieldComponent(field: any): string {
  //     if ( ['percentage'].indexOf(field.type) > -1 ) { /* Should create those same type to remove the need of doing this */
  //         return 'progress';
  //     }
  //     if ( ['int', 'long', 'objectId', 'string'].indexOf(field.type) > -1 ) { /* Should create those same type to remove the need of doing this */
  //         return 'string';
  //     }
  //     return field.type;
  // }
};

// src/services/helper/default.ts
var HelperDefault = class _HelperDefault extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperDefault(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    if (!model.name) {
      this.adjustName(model);
    }
  }
};

// src/services/helper/campaign.ts
var HelperCampaign = class _HelperCampaign extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperCampaign(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperCampaign - processData ${model.name}`);
  }
};

// src/services/helper/campaigngoal.ts
var HelperCampaignGoal = class _HelperCampaignGoal extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperCampaignGoal(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperCampaignGoal - processData ${model.name}`);
    const campaigns = this.dataService.getData("campaigns");
    if (!campaigns) {
      return;
    }
    const schemaType = this.dataService.getSchemaType("campaigngoals");
    if (!schemaType) {
      return;
    }
  }
};

// src/services/helper/contact.ts
var HelperContact = class _HelperContact extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperContact(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    if (!model.name) {
      if (model.firstName && model.lastName) {
        model.name = `${model.firstName} ${model.lastName}`;
      } else {
        if (model.firstName) {
          model.name = `${model.firstName}`;
        } else {
          model.name = `${model.lastName}`;
        }
      }
    }
  }
};

// src/services/helper/home.ts
var HelperHome = class _HelperHome extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  stateService = dependencyInjectionContainer.resolve("stateService");
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperHome(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperHome - processData ${model.name}`);
    if (!model) {
      return;
    }
    model.objectType = "home";
    model.tenantId = this.stateService.getTenantId();
    model._id = getUniqueIdAsString();
    model.workitemlog = null;
    model.workitemlogsummary = {
      totalChat: -1,
      totalContactsLast30days: -1,
      totalContactsLast7days: -1,
      totalContactsToday: -1,
      totalEmail: -1,
      totalFax: -1,
      totalInbound: -1,
      totalOutbound: -1,
      totalPersonalCallback: -1,
      totalPredictive: -1,
      totalProgressive: -1,
      totalSMS: -1,
      totalSocial: -1
    };
    model.personalcallbacks = null;
    model.personalcallbackssummary = {
      totalChat: -1,
      totalContactsLast30days: -1,
      totalContactsLast7days: -1,
      totalContactsToday: -1,
      totalEmail: -1,
      totalFax: -1,
      totalInbound: -1,
      totalOutbound: -1,
      totalPersonalCallback: -1,
      totalPredictive: -1,
      totalProgressive: -1,
      totalSMS: -1,
      totalSocial: -1
    };
  }
};

// src/services/helper/user.ts
var HelperUser = class _HelperUser extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  settings = {
    acd: {
      // @ts-ignore implicit any
      channels: [],
      // @ts-ignore implicit any
      queues: [],
      status: {}
    },
    devices: {
      // @ts-ignore implicit any
      dtmfSinkId: null,
      // @ts-ignore implicit any
      notificationSinkId: null,
      // @ts-ignore implicit any
      promptSinkId: null,
      // @ts-ignore implicit any
      ringSinkId: null,
      // @ts-ignore implicit any
      voiceInputSinkId: null,
      // @ts-ignore implicit any
      voiceOutputSinkId: null
    },
    dial: {
      closeOnDial: false
    },
    directory: {
      agentMessageNotification: false,
      // @ts-ignore implicit any
      agentSoundNotification: null,
      closeOnDial: false,
      closeOnTransfer: false,
      // @ts-ignore implicit any
      highPrioritySoundNotification: null,
      // @ts-ignore implicit any
      queueMessageNotification: [],
      // @ts-ignore implicit any
      queueSoundNotification: null,
      topicMessageNotification: false,
      // @ts-ignore implicit any
      topicSoundNotification: null
    },
    disposition: {
      // @ts-ignore implicit any
      dispositionSoundNotification: null
    },
    general: {
      // @ts-ignore implicit any
      defaultCampaignId: null,
      defaultDialType: "1",
      // @ts-ignore implicit any
      defaultEmailCampaignId: null,
      // @ts-ignore implicit any
      defaultFaxCampaignId: null,
      // @ts-ignore implicit any
      defaultSMSCampaignId: null
    },
    workitem: {
      alwaysDigitalMessagesWebNotification: false,
      alwaysDigitalWebNotification: false,
      alwaysVoiceWebNotification: false,
      // @ts-ignore implicit any
      digitalMessageRingtone: null,
      // @ts-ignore implicit any
      digitalRingtone: null,
      enableDigitalMessagesWebNotification: false,
      enableDigitalWebNotification: false,
      enableVoiceWebNotification: false,
      repeatDigitalMessagesRingtone: false,
      repeatDigitalRingtone: false,
      repeatVoiceRingtone: false,
      // @ts-ignore implicit any
      voiceRingtone: null
    }
  };
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperUser(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperUser - processData ${model.name}`);
    if (!model.settings) {
      model.settings = {};
    }
    Object.keys(this.settings).forEach((key) => {
      if (!model.settings[key]) {
        model.settings[key] = this.settings[key];
      }
    });
    model.allowClientTracing = model.allowClientTracing || model.allowClientTracing === true;
    model.allowServerTracing = model.allowServerTracing || model.allowServerTracing === true;
  }
};

// src/services/helper/userclientsetting.ts
var HelperUserClientSetting = class _HelperUserClientSetting extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperUserClientSetting(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperUserClientSetting - processData ${model.name}`);
    if (Object.keys(model.layouts).length > 0) {
      return;
    }
    model.layouts = {
      mandatory: [],
      optional: [],
      user1: [],
      user2: []
    };
  }
};

// src/services/helper/userprofile.ts
var HelperUserProfile = class _HelperUserProfile extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperUserProfile(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperUserProfile - processData ${model.name}`);
  }
};

// src/services/helper/tenant.ts
var HelperTenant = class _HelperTenant extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperTenant(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    Logger.log(`HelperTenant - processData ${model.name}`);
  }
};

// src/services/helper/workitem.ts
var HelperWorkitem = class _HelperWorkitem extends Helper {
  constructor(language, dataService) {
    super(language, dataService);
    this.language = language;
    this.dataService = dataService;
  }
  static instance;
  static getInstance(language, dataService) {
    if (!this.instance) {
      this.instance = new _HelperWorkitem(language, dataService);
    }
    return this.instance;
  }
  processData(model) {
    if (!model.name) {
      if (model.contact) {
        if (model.contact.name) {
          model.name = model.contact.name;
        } else {
          if (model.contact.firstName && model.contact.lastName) {
            model.name = `${model.firstName} ${model.lastName}`;
          } else {
            if (model.contact.firstName) {
              model.name = `${model.firstName}`;
            }
            if (model.contact.lastName) {
              model.name = `${model.lastName}`;
            }
          }
        }
      } else {
        if (
          // @ts-expect-error TODO: revisit this logic since it currently doesn't check anything
          [
            WorkitemTypes.OutboundCall,
            WorkitemTypes.OutboundEmail,
            WorkitemTypes.OutboundExtensionCall,
            WorkitemTypes.OutboundFax,
            WorkitemTypes.OutboundSMS
          ].indexOf
        ) {
          model.name = model.to;
        } else {
          model.name = model.from;
        }
      }
    }
    if (["undefined", "null"].includes(model.contactId) || model.contactId === void 0) {
      model.contactId = null;
    }
    Logger.log(`HelperWorkitem - processData ${model.name}`);
  }
};

// src/services/acd.ts
var ACDService = class {
  eventsService;
  stateService;
  logger;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.eventsService = eventsService;
    this.stateService = stateService;
    this.logger = loggerService;
    this.handleOfferNotification();
    this.handleOfferRemovedNotification();
  }
  /**
   * Accepts an offer with the specified offer ID.
   * @param offerId - The ID of the offer to accept.
   * @returns A Promise that resolves to the response from the server.
   */
  accept(offerId) {
    this.logger.debug(`ACDService - accept - accepting offer [${offerId}]`);
    return axiosInstance.post(`/acd/api/offers/${offerId}/accepted`);
  }
  /**
   * Rejects an offer.
   *
   * @param offerId - The ID of the offer to reject.
   * @param status - The status of the rejection.
   * @param statusId - The ID of the rejection status.
   * @returns A promise that resolves to the response from the server.
   */
  reject({ offerId, status, statusId }) {
    this.logger.debug(`ACDService - reject - rejecting offer [${offerId}]`);
    const payload = {
      status,
      statusId
    };
    return axiosInstance.post(`/acd/api/offers/${offerId}/refused`, payload);
  }
  /**
   * Marks an offer as expired.
   *
   * @param offerId - The ID of the offer to mark as expired.
   * @param status - The status of the offer.
   * @param statusId - The ID of the status.
   * @returns A Promise that resolves to the response from the server.
   */
  expired({ offerId, status, statusId }) {
    this.logger.debug(`ACDService - reject - expiring offer [${offerId}]`);
    const payload = {
      status,
      statusId
    };
    return axiosInstance.post(`/acd/api/offers/${offerId}/expired`, payload);
  }
  handleOfferNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.OfferNotification)).subscribe(({ data }) => {
      this.logger.debug("ACDService - handleOfferNotification", data);
      const platform = this.stateService.getPlatform();
      if (platform !== "android" && platform !== "ios" && this.stateService.getDomainEnvironment() === "ncx" && this.stateService.getUser()?.acdAutoAccept) {
        this.logger.info(`ACDService - auto accepting offer [${data.offer._id}]`);
        this.accept(data.offer._id).catch(() => {
          const offers2 = this.addOffer(data.offer);
          this.eventsService.emitExternal(ExternalEvents.OffersChangedNotification, {
            offers: offers2
          });
        });
        return;
      }
      const offers = this.addOffer(data.offer);
      this.eventsService.emitExternal(ExternalEvents.OffersChangedNotification, {
        offers
      });
    });
  }
  handleOfferRemovedNotification() {
    this.eventsService.internalEvents$.pipe(
      ofType([
        InternalEvents.OfferAcceptedNotification,
        InternalEvents.OfferExpiredNotification,
        InternalEvents.OfferRejectedNotification,
        InternalEvents.OfferTerminatedByHangupNotification
      ])
    ).subscribe(({ data, name }) => {
      this.logger.debug(`ACDService - handleOfferRemovedNotification - ${name}`, data);
      const offers = this.removeOffer(data.offerId ?? data.offerid);
      this.eventsService.emitExternal(ExternalEvents.OffersChangedNotification, {
        offers
      });
    });
  }
  addOffer(offer) {
    const offers = this.stateService.getOffers() ?? [];
    const clonedOffers = [...offers];
    clonedOffers.push(offer);
    this.stateService.setOffers(clonedOffers);
    return clonedOffers;
  }
  removeOffer(offerId) {
    const offers = this.stateService.getOffers() ?? [];
    const filteredOffers = offers.filter((offer) => offerId !== offer.offerId);
    this.stateService.setOffers(filteredOffers);
    return filteredOffers;
  }
};

// src/utilities/s360AxiosClient.ts
import axios from "axios";
var s360AxiosClient = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  withCredentials: true
});
var configureS360Axios = () => {
  s360AxiosClient.defaults.baseURL = "https://ncx-sandbox.simplify360.com";
};

// src/services/agentAssist.ts
var AgentAssistService = class {
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
    this.logger.trace("AgentAssistService - constructor");
  }
  // ============================================
  // API Methods
  // ============================================
  /**
   * Posts a conversation to the Agent Assist service.
   *
   * @param conversation - The conversation to post.
   * @returns A Promise that resolves to the response from the server.
   */
  async createConversation(conversation) {
    await s360AxiosClient.post(
      "/agent-assist-orchestration-service/private/v1/conversation",
      conversation
    );
    return;
  }
  /**
   * Updates a conversation in the Agent Assist service.
   *
   * @param conversation - The conversation to update.
   * @returns A Promise that resolves to the response from the server.
   */
  async updateConversation(conversation) {
    await s360AxiosClient.put(
      "/agent-assist-orchestration-service/private/v1/conversation",
      conversation
    );
    return;
  }
  /**
   * Gets a conversation from the Agent Assist service.
   *
   * @param conversationId - The ID of the conversation to get.
   * @param tenantId - The ID of the tenant.
   * @returns A Promise that resolves to the response from the server.
   */
  async getConversation(conversationId, tenantId) {
    const response = await s360AxiosClient.get(
      `/agent-assist-orchestration-service/private/v1/conversation?tenant_id=${tenantId}&conversaton_uuid=${conversationId}`
    );
    return response.data;
  }
  /**
   * Gets a suggestion from the Agent Assist service.
   *
   * @param conversation - The conversation to get a suggestion for.
   * @param version - The version is to target api version. Defaults to 'v1'.
   * @returns A Promise that resolves to the response from the server.
   */
  async getSuggestion(conversation, version = "v1") {
    const response = await s360AxiosClient.post(
      `/agent-assist-orchestration-service/private/${version}/suggest-response`,
      conversation
    );
    return response.data;
  }
  /**
   * Decorates text using the Agent Assist service.
   *
   * @param options - The options to use when decorating the text.
   * @returns A Promise that resolves to the response from the server.
   */
  async decorateText(options) {
    const response = await s360AxiosClient.post(
      "/agent-assist-orchestration-service/private/v1/text-manipulation",
      options
    );
    return response.data;
  }
};

// src/services/proactiveAgentAssist.ts
var SCHEMA_TYPE_NAME = "nextiqagentassist";
var ProactiveAgentAssistService = class {
  eventsService;
  logger;
  schemaTypeClient;
  constructor({
    eventsService,
    loggerService,
    schemaTypeClient
  }) {
    this.eventsService = eventsService;
    this.logger = loggerService;
    this.schemaTypeClient = schemaTypeClient;
    this.logger.trace("ProactiveAgentAssistService - constructor");
    this.handleProactiveAgentAssistNotification();
  }
  // ============================================
  // Socket Event Handling
  // ============================================
  handleProactiveAgentAssistNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ProactiveAgentAssistNotification)).subscribe((event) => {
      const notification = event.data ?? void 0;
      if (!notification?.task || !notification.responseId) {
        this.logger.warn(
          "ProactiveAgentAssistService - dropped malformed notification",
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          { hasData: !!event.data, responseId: notification?.responseId, task: notification?.task }
        );
        return;
      }
      this.logger.debug("ProactiveAgentAssistService - received notification", notification);
      this.eventsService.emitExternal(ExternalEvents.ProactiveAgentAssistNotification, notification);
    });
  }
  // ============================================
  // Conversation API Methods
  // ============================================
  /**
   * Loads the conversation context when the UI opens or switches to a
   * conversation. Runs synchronously — the context is returned in the
   * response body. Subsequent live updates are pushed automatically as
   * ProactiveAgentAssistNotification events (task=prefetch); do not poll
   * this endpoint.
   *
   * @param payload - The conversation identifiers to prefetch context for.
   * @returns A Promise that resolves to the prefetched context (data is null when no summary exists yet).
   */
  async prefetchConversation(payload) {
    return this.schemaTypeClient.request(SCHEMA_TYPE_NAME, "prefetch", {
      data: payload,
      method: "post"
    });
  }
  /**
   * Runs an AI-powered assist task on a conversation. Returns 202 Accepted
   * immediately; the result is delivered asynchronously as a
   * ProactiveAgentAssistNotification event, correlated by responseId.
   *
   * @param payload - The conversation identifiers and task to run. channelType is required for reply-style tasks.
   * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
   */
  async runAssistTask(payload) {
    return this.schemaTypeClient.request(SCHEMA_TYPE_NAME, "assist", {
      data: payload,
      method: "post"
    });
  }
  /**
   * Discovers which quick suggestions and agent actions are available for a
   * conversation. Returns 202 Accepted immediately; the result is delivered
   * asynchronously as a ProactiveAgentAssistNotification event
   * (task=get_assist_types), correlated by responseId.
   *
   * @param payload - The conversation identifiers to discover assist types for.
   * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
   */
  async getAssistTypes(payload) {
    return this.schemaTypeClient.request(SCHEMA_TYPE_NAME, "getTypes", {
      data: payload,
      method: "post"
    });
  }
  // ============================================
  // Ticket API Methods
  // ============================================
  /**
   * Preloads ticket context when the UI opens or switches to a ticket.
   * Unlike conversation prefetch, this returns 202 Accepted and the context
   * is delivered asynchronously as a ProactiveAgentAssistNotification event
   * (task=prefetch, conversationId=null), correlated by responseId.
   *
   * @param payload - The ticket identifier plus optional workitemIds to scope the context.
   * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
   */
  async prefetchTicket(payload) {
    return this.schemaTypeClient.request(SCHEMA_TYPE_NAME, "ticketPrefetch", {
      data: payload,
      method: "post"
    });
  }
  /**
   * Runs an AI-powered assist task scoped to a ticket. Returns 202 Accepted
   * immediately; the result is delivered asynchronously as a
   * ProactiveAgentAssistNotification event (conversationId=null, correlate
   * by ticketId), matched by responseId.
   *
   * @param payload - The ticket identifiers and task to run. channelType is required for reply tasks.
   * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
   */
  async runTicketAssistTask(payload) {
    return this.schemaTypeClient.request(SCHEMA_TYPE_NAME, "ticketAssist", {
      data: payload,
      method: "post"
    });
  }
  /**
   * Discovers which quick suggestions and agent actions are available for a
   * ticket. Returns 202 Accepted immediately; the result is delivered
   * asynchronously as a ProactiveAgentAssistNotification event
   * (task=get_assist_types), correlated by responseId.
   *
   * @param payload - The ticket identifier plus optional workitemIds to scope the context.
   * @returns A Promise that resolves to the 202 acknowledgement containing the correlation responseId.
   */
  async getTicketAssistTypes(payload) {
    return this.schemaTypeClient.request(SCHEMA_TYPE_NAME, "ticketGetTypes", {
      data: payload,
      method: "post"
    });
  }
};

// src/services/audioquality.ts
var AudioQualityService = class {
  //   protected handleInternalEvent(_event: NotificationEvent): void {
  //     // Logger.log('AudioQualityService - handleInternalEvent', event);
  //   }
  //   protected handleSessionEvent(_event: NotificationEvent): void {
  //     // Logger.log('AudioQualityService - handleInternalEvent', event);
  //   }
  /**
   * Report quality warnings to the voice service
   *
   * @param warningMessage warnings raised status
   */
  async sendCurrentWarnings(warningMessage) {
    await axiosInstance.post("/users/api/voice/insights", warningMessage);
  }
};

// src/services/campaign.ts
var CampaignService = class {
  schemaTypeClient;
  logger;
  constructor({
    loggerService,
    schemaTypeClient
  }) {
    this.schemaTypeClient = schemaTypeClient;
    this.logger = loggerService;
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().search('campaign')
   */
  async fetchCampaigns(payload) {
    this.logger.warn("CampaignService - fetchCampaigns is deprecated");
    return this.schemaTypeClient.search("campaign", payload);
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().retrieve('campaign', { id })
   */
  async fetchCampaign(id2) {
    this.logger.warn("CampaignService - fetchCampaign is deprecated");
    return this.schemaTypeClient.retrieve("campaign", { id: id2 });
  }
};

// src/services/contact.ts
var ContactService = class {
  eventsService;
  schemaTypeClient;
  logger;
  constructor({
    eventsService,
    loggerService,
    schemaTypeClient
  }) {
    this.eventsService = eventsService;
    this.schemaTypeClient = schemaTypeClient;
    this.logger = loggerService;
    this.handleContactImportNotification();
    this.handleContactImportFailureNotification();
  }
  handleContactImportNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ContactImportNotificationEvent)).subscribe(({ data }) => {
      this.logger.debug("ContactService - handleContactImportNotification", data);
      this.eventsService.emitExternal(
        ExternalEvents.ContactImportNotificationEvent,
        data.message
      );
    });
  }
  handleContactImportFailureNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ContactImportFailureNotificationEvent)).subscribe(({ data }) => {
      this.logger.debug("ContactService - handleContactImportFailureNotification", data);
      this.eventsService.emitExternal(
        ExternalEvents.ContactImportFailureNotificationEvent,
        data.message
      );
    });
  }
  /**
   * Blocks or unblocks a contact based on the provided block parameter (true to block, false to unblock).
   * @param block - Whether to block or unblock the contact.
   * @param contactId - The ID of the contact.
   */
  async block({ block, contactId }) {
    await axiosInstance.put(`/data/api/types/contact/${contactId}/blocked`, block);
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().search('contact')
   */
  async fetchContacts(payload) {
    this.logger.warn("ContactService - fetchContacts is deprecated");
    return this.schemaTypeClient.search("contact", payload);
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().retrieve('contact', { id })
   */
  async fetchContact(id2) {
    this.logger.warn("ContactService - fetchContact is deprecated");
    return this.schemaTypeClient.retrieve("contact", { id: id2 });
  }
};

// src/services/data.ts
import { isAxiosError as isAxiosError2 } from "axios";

// src/utilities/axios.ts
import axios2, { isAxiosError } from "axios";
var axiosInstance = axios2.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  // Axios will treat any non 2xx status codes as an error
  validateStatus: (status) => status >= 200 && status < 300 || status == 304,
  withCredentials: true
});
axiosInstance.interceptors.response.use(void 0, (error) => {
  if (isAxiosError(error) && error.response?.status === 403 && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  error.response.data?.errorCode === 403020) {
    const datadogService = dependencyInjectionContainer.resolve("datadogService");
    datadogService?.addAction(ExternalEvents.ExpiredTokenNotification);
    dependencyInjectionContainer.resolve("eventsService").emitExternal(ExternalEvents.ExpiredTokenNotification);
  }
  throw error;
});
var upsertDefaultRequestHeader = (header, value) => {
  const logger = dependencyInjectionContainer.resolve("loggerService");
  logger.debug(`upsertDefaultRequestHeader - Axios header [${header}]`);
  axiosInstance.defaults.headers.common[header] = value;
};
var getDefaultRequestHeader = (header) => {
  const value = axiosInstance.defaults.headers.common[header];
  return typeof value === "string" ? value : void 0;
};
var deleteDefaultRequestHeader = (header) => {
  const logger = dependencyInjectionContainer.resolve("loggerService");
  logger.debug(`deleteDefaultRequestHeader - Axios header [${header}] was deleted`);
  axiosInstance.defaults.headers.common[header] = void 0;
};
var configureAxios = (options) => {
  const { baseURL, language = "en" } = options;
  const logger = dependencyInjectionContainer.resolve("loggerService");
  logger.debug("configureAxios - Axios configured with options", options);
  upsertDefaultRequestHeader("Accept-Language", language);
  axiosInstance.defaults.baseURL = baseURL;
};

// src/utilities/queries/getStaticDataQueryOptions.ts
function getStaticDataQueryOptions(key) {
  return {
    queryFn: async ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      const ifModifiedSince = queryData?.reduce((previous, current) => {
        const { modifiedAt } = current;
        return modifiedAt > previous ? modifiedAt : previous;
      }, 0);
      const response = await axiosInstance.get(
        staticDataURLs[key],
        {
          params: {
            ifModifiedSince
          }
        }
      );
      if (response.status === 304) {
        return queryData;
      }
      let data;
      if (!queryData) {
        data = response.data.objects ?? [];
      } else {
        data = queryData.reduce((acc, objectType) => {
          const schema = response.data.objects?.find((schemaFromResponse) => {
            return schemaFromResponse._id === objectType._id;
          });
          if (schema) {
            if (schema.deletedAt) {
              return acc;
            }
            acc.push(schema);
            return acc;
          }
          acc.push(objectType);
          return acc;
        }, []);
      }
      return data;
    },
    queryKey: ["static", key]
  };
}
var staticDataURLs = {
  campaign: "/users/api/types/campaign?rows=1000",
  disposition: "/users/api/types/disposition?q=*",
  language: "/data/api/types/language?q=*&rows=1000",
  schemalayout: "/data/api/types/schemalayout?q=*&rows=1000",
  schematype: "/data/api/types/schematype?q=*&rows=1000",
  status: "/users/api/types/status?q=*&rows=1000"
  // &fields=%5B_id,name,status,presentToAgent%5D
};

// src/utilities/queries/getCompanyDirectoryQueryOptions.ts
function getCompanyDirectoryQueryOptions() {
  return {
    queryFn: async ({ client, queryKey }) => {
      const logger = dependencyInjectionContainer.resolve("loggerService");
      const queryData = client.getQueryData(queryKey);
      const ifModifiedSince = queryData?.queues.reduce((previous, current) => {
        const { modifiedAt } = current;
        return modifiedAt > previous ? modifiedAt : previous;
      }, 0);
      const response = await axiosInstance.get(
        "/users/api/directory",
        {
          params: {
            ifModifiedSince
          }
        }
      );
      logger.debug(
        `getCompanyDirectoryQueryOptions - request resolved with status [${response.status}] and data`,
        response.data
      );
      if (response.status === 304) {
        logger.info("getCompanyDirectoryQueryOptions - returning cached data");
        return queryData;
      }
      if (!response.data) {
        logger.debug("getCompanyDirectoryQueryOptions - returning cached data");
        return queryData ?? { queues: [], topics: [], users: [] };
      }
      const responseData = response.data;
      let queues;
      let topics;
      let users;
      if (!queryData) {
        queues = Object.values(responseData.queues);
        topics = Object.values(responseData.topics);
        users = Object.values(responseData.users);
      } else {
        const responseQueues = responseData.queues;
        queues = queryData.queues.reduce((acc, cachedQueue) => {
          const updatedQueue = responseQueues[cachedQueue._id];
          if (updatedQueue) {
            if (updatedQueue.deletedAt) {
              return acc;
            }
            acc.push(updatedQueue);
            return acc;
          }
          acc.push(cachedQueue);
          return acc;
        }, []);
        Object.values(responseQueues).forEach((queue) => {
          if (!queryData.queues.some((q) => q._id === queue._id) && !queue.deletedAt) {
            queues.push(queue);
          }
        });
        const responseTopics = responseData.topics;
        topics = queryData.topics.reduce((acc, cachedTopic) => {
          const updatedTopic = responseTopics[cachedTopic._id];
          if (updatedTopic) {
            if (updatedTopic.deletedAt) {
              return acc;
            }
            acc.push(updatedTopic);
            return acc;
          }
          acc.push(cachedTopic);
          return acc;
        }, []);
        Object.values(responseTopics).forEach((topic) => {
          if (!queryData.topics.some((t) => t._id === topic._id) && !topic.deletedAt) {
            topics.push(topic);
          }
        });
        const responseUsers = responseData.users;
        users = queryData.users.reduce((acc, cachedUser) => {
          const updatedUser = responseUsers[cachedUser.userId];
          if (updatedUser) {
            acc.push(updatedUser);
            return acc;
          }
          acc.push(cachedUser);
          return acc;
        }, []);
        Object.values(responseUsers).forEach((user) => {
          if (!queryData.users.some((u) => u.userId === user.userId)) {
            users.push(user);
          }
        });
      }
      logger.info("getCompanyDirectoryQueryOptions - company directory after applying updates", {
        queuesCount: queues.length,
        topicsCount: topics.length,
        usersCount: users.length
      });
      return { queues, topics, users };
    },
    queryKey: ["static", "companyDirectory"]
  };
}

// src/utilities/queries/getAIEmployeesQueryOptions.ts
function getAIEmployeesQueryOptions() {
  return {
    queryFn: async ({ client, queryKey }) => {
      const logger = dependencyInjectionContainer.resolve("loggerService");
      const rawCachedData = client.getQueryData(queryKey);
      const queryData = Array.isArray(rawCachedData) ? { cursor: void 0, employees: rawCachedData } : rawCachedData;
      const cursor = queryData?.cursor;
      logger.debug("getAIEmployeesQueryOptions - requesting", {
        cursor,
        hasQueryData: queryData !== void 0
      });
      const response = await axiosInstance.get(
        "/data/api/types/aiemployee/summary",
        {
          params: cursor === void 0 ? void 0 : { cursor }
        }
      );
      logger.debug(
        `getAIEmployeesQueryOptions - request resolved with status [${response.status}]`,
        response.data
      );
      const responseObjects = response.data.objects ?? [];
      const nextCursor = response.data.cursor;
      if (!queryData) {
        logger.info("getAIEmployeesQueryOptions - first load, seeding cache");
        return {
          cursor: nextCursor,
          employees: responseObjects.filter((emp) => !emp.deletedAt)
        };
      }
      if (responseObjects.length === 0) {
        return { cursor: nextCursor, employees: queryData.employees };
      }
      logger.debug("getAIEmployeesQueryOptions - merging incremental response objects");
      const merged = queryData.employees.reduce((acc, cachedEmployee) => {
        const updatedEmployee = responseObjects.find(
          (emp) => emp.aiemployeeId === cachedEmployee.aiemployeeId
        );
        if (updatedEmployee) {
          if (updatedEmployee.deletedAt) {
            return acc;
          }
          acc.push(updatedEmployee);
          return acc;
        }
        acc.push(cachedEmployee);
        return acc;
      }, []);
      responseObjects.forEach((emp) => {
        if (!queryData.employees.some((cached) => cached.aiemployeeId === emp.aiemployeeId) && !emp.deletedAt) {
          merged.push(emp);
        }
      });
      return { cursor: nextCursor, employees: merged };
    },
    queryKey: ["static", "aiemployees"]
  };
}

// src/services/data.ts
var DataService = class {
  // protected schemaTypes: Map<string, SchemaType> = new Map();
  // protected schemaLayouts: Map<string, SchemaLayout> = new Map();
  eventsService;
  translatorService;
  stateService;
  schemaTypeClient;
  internalStateManagementService;
  persisterClient;
  logger;
  constructor({
    eventsService,
    internalStateManagementService,
    loggerService,
    persisterClient,
    schemaTypeClient,
    stateService,
    translatorService
  }) {
    this.eventsService = eventsService;
    this.translatorService = translatorService;
    this.stateService = stateService;
    this.schemaTypeClient = schemaTypeClient;
    this.internalStateManagementService = internalStateManagementService;
    this.persisterClient = persisterClient;
    this.logger = loggerService;
    this.loadSystemData();
    this.handleDynamicChangeNotification();
    this.handleStatusChangedNotification();
    this.handleCompanyDirectoryNotification();
    this.handleUserMessagesNotification();
  }
  handleUserMessagesNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.UserMessagesNotification)).subscribe((event) => {
      this.logger.debug("DataService - handleUserMessagesNotification", event);
      const { objects = [] } = event.data.queryResults;
      this.stateService.setUserMessages(objects);
      this.eventsService.emitExternal(ExternalEvents.UserMessagesNotification, event.data);
    });
  }
  handleCompanyDirectoryNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CompanyDirectoryNotification)).subscribe((event) => {
      this.logger.debug("DataService - handleCompanyDirectoryNotification", event.data);
      this.processCompanyDirectory(event.data);
    });
  }
  processCompanyDirectory({
    queues: queuesObject,
    topics: topicsObject,
    users: usersObject
  }) {
    const queues = Object.values(queuesObject).map((queue) => {
      if (!queue.emoji) {
        queue.emoji = "\u{1F4EC}";
      }
      return freezeItem(queue);
    });
    const topics = Object.values(topicsObject).map((topic) => freezeItem(topic));
    const users = Object.values(usersObject).map((user) => freezeItem(user));
    const newUsers = users.map((user) => {
      return {
        ...user,
        signedAvatarURL: user.avatar ? this.buildAvatarSignedURL({ userId: user.userId }) : ""
      };
    });
    const data = {
      queues,
      topics,
      users: newUsers
    };
    const queryKey = ["static", "companyDirectory"];
    queryClient.setQueryData(queryKey, data);
    const queryPersister = this.persisterClient.getQueryPersister();
    queryPersister?.persistQueryByKey(queryKey, queryClient).catch((error) => {
      this.logger.error("DataService - processCompanyDirectory - queryPersister error:", error);
    });
    this.eventsService.emitExternal(ExternalEvents.CompanyDirectoryNotification, data);
  }
  handleStatusChangedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.StatusChangedNotification)).subscribe((event) => {
      this.logger.debug("DataService - handleStatusChangedNotification", event.data);
      this.stateService.setUserStatusRecord(event.data.statuses);
      this.eventsService.emitExternal(ExternalEvents.StatusChangedNotification, event.data);
      const queryKey = getCompanyDirectoryQueryOptions().queryKey;
      const companyQueryData = queryClient.getQueryData(queryKey);
      if (!companyQueryData?.users) {
        return;
      }
      const newCompanyQueryData = {
        ...companyQueryData,
        users: companyQueryData.users.map((user) => {
          const statusId = event.data.statuses[user.userId];
          if (!statusId) {
            return user;
          }
          const status = this.stateService.getStatus(statusId);
          if (!status) {
            return user;
          }
          return {
            ...user,
            signedAvatarURL: user.avatar ? this.buildAvatarSignedURL({ userId: user.userId }) : "",
            status: status.status,
            statusId
          };
        })
      };
      queryClient.setQueryData(queryKey, newCompanyQueryData);
      this.persisterClient.getQueryPersister()?.persistQueryByKey(queryKey, queryClient).catch((error) => {
        this.logger.error(
          "DataService - handleStatusChangedNotification - persister error: ",
          error
        );
      });
    });
  }
  handleDynamicChangeNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.DynamicChangeNotification)).subscribe((event) => {
      const dynamicChangeNotification = event.getProperties();
      const { action, objectType } = dynamicChangeNotification;
      const model = dynamicChangeNotification.object;
      const map = this.stateService.getMap();
      this.logger.debug(
        `DataService - handleDynamicChangeNotification - action [${action}] objectType [${objectType}]`,
        model
      );
      switch (action) {
        case "create":
          this.handleCreateV2(objectType, model);
          break;
        case "delete":
          this.handleDeleteV2(objectType, model);
          break;
        case "update":
          this.handleUpdateV2(objectType, model);
          break;
        default:
          this.logger.error(
            `DataService - handleDynamicChangeNotification - Unknown action [${action}]`
          );
          return;
      }
      if (objectType === "user" || objectType === "queue" || objectType === "contact") {
        const isCompanyDirectoryData = objectType === "queue" || !model.objectType;
        this.eventsService.emitExternal(
          isCompanyDirectoryData ? ExternalEvents.DynamicCompanyDirectoryChangeNotification : ExternalEvents.DynamicChangeNotification,
          event.data
        );
      }
      const data = this.getObjectType(objectType);
      if (!data) {
        this.logger.error(
          `DataService - handleDynamicChangeNotification - can't find objectType [${objectType}]`
        );
        return;
      }
      const relation = this.getRelationFieldname(objectType);
      switch (action) {
        case "create":
          this.handleCreate(map, model, relation);
          break;
        case "delete":
          this.handleDelete(map, model, relation);
          break;
        case "update":
          this.handleUpdate(map, model, relation);
          break;
        default:
          this.logger.error(
            `DataService - handleDynamicChangeNotification - Unknown action [${action}]`
          );
          return;
      }
      switch (objectType) {
        case "status":
          this.eventsService.emitInternal(InternalEvents.DynamicStatusChangeNotification);
          break;
        case "campaigncompliance":
        case "campaigntemplate":
        case "campaigndisposition":
        case "campaignagentscript":
        case "campaign":
        case "survey":
        case "disposition":
        case "compliancedisposition":
        case "template":
        case "speeddial":
        case "scorecard":
        case "classification":
        case "user":
        case "queue":
        case "topic":
        default:
          break;
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getObjectType(objectType) {
    switch (objectType) {
      case "campaigncompliance":
      case "campaigntemplate":
      case "campaigndisposition":
      case "campaignagentscript":
      case "campaign":
        return this.stateService.getCampaigns();
      case "campaignscript":
        return this.stateService.getCampaignScripts();
      case "survey":
        return this.stateService.getSurveys();
      case "disposition":
        return this.stateService.getDispositions();
      case "compliancedisposition":
        return this.stateService.getComplianceDispositions();
      case "status":
        return this.stateService.getStatuses();
      case "template":
        return this.stateService.getTemplates();
      case "speeddial":
        return this.stateService.getSpeedDials();
      case "scorecard":
        return this.stateService.getScoreCards();
      case "classification":
        return this.stateService.getClassifications();
      case "user":
        return this.stateService.getUsers();
      case "queue":
        return this.stateService.getInboxes();
      case "topic":
        return this.stateService.getTopics();
      // case 'campaignscript':
      //     return this.data.get('agentScripts');
      default:
        return this.stateService.get(objectType);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getRelationFieldname(objectType) {
    switch (objectType) {
      case "campaigncompliance":
        return {
          field: "compliance",
          source: "campaignId",
          target: "compliancedispositionId"
        };
      case "campaigntemplate":
        return {
          field: "templates",
          source: "campaignId",
          target: "templateId"
        };
      case "campaigndisposition":
        return {
          field: "dispositions",
          source: "campaignId",
          target: "dispositionId"
        };
      case "campaignagentscript":
        return {
          field: "scripts",
          source: "campaignId",
          target: "campaignscriptId"
        };
    }
    return null;
  }
  handleCreateV2(objectType, object) {
    const isCompanyDirectoryData = objectType === "queue" || objectType === "user" && !object.objectType;
    const queryKey = ["static", isCompanyDirectoryData ? "companyDirectory" : objectType];
    const currentQueryData = queryClient.getQueryData(queryKey);
    if (!currentQueryData) {
      return;
    }
    let newQueryData;
    if (Array.isArray(currentQueryData)) {
      newQueryData = [...currentQueryData, object];
    } else if (isCompanyDirectoryData) {
      const { queues, topics, users } = currentQueryData;
      newQueryData = {
        queues,
        topics,
        users
      };
      if (objectType === "user") {
        const correctedObject = object;
        newQueryData.users = [...newQueryData.users, correctedObject];
      } else {
        const correctedObject = object;
        newQueryData.queues = [...newQueryData.queues, correctedObject];
      }
    }
    if (newQueryData) {
      queryClient.setQueryData(queryKey, newQueryData);
      const persister = this.persisterClient.getQueryPersister();
      persister?.persistQueryByKey(queryKey, queryClient).catch((error) => {
        this.logger.error(
          "DataService - handleDynamicChangeNotification - persister error: ",
          error
        );
      });
    }
    switch (objectType) {
      case "entitlementsuserentitlement": {
        const userEntitlements = object;
        const userEntitlementsList = this.stateService.getUserEntitlements() ?? [];
        userEntitlementsList.push(userEntitlements);
        this.stateService.setUserEntitlements(userEntitlementsList);
        break;
      }
      case "entitlementstenantentitlement": {
        const tenantEntitlements = object;
        const tenantEntitlementsList = this.stateService.getTenantEntitlements() ?? [];
        tenantEntitlementsList.push(tenantEntitlements);
        this.stateService.setTenantEntitlements(tenantEntitlementsList);
        break;
      }
    }
  }
  handleUpdateV2(objectType, object) {
    const isCompanyDirectoryData = objectType === "queue" || objectType === "user" && !object.objectType;
    const queryKey = ["static", isCompanyDirectoryData ? "companyDirectory" : objectType];
    const currentQueryData = queryClient.getQueryData(queryKey);
    if (!currentQueryData) {
      return;
    }
    let newQueryData;
    if (Array.isArray(currentQueryData)) {
      newQueryData = currentQueryData.map((o) => {
        if (o._id === object._id) {
          return object;
        }
        return o;
      });
    } else if (isCompanyDirectoryData) {
      const { queues, topics, users } = currentQueryData;
      newQueryData = {
        queues,
        topics,
        users
      };
      if (objectType === "user") {
        const correctedObject = object;
        newQueryData.users = newQueryData.users.map(
          (user) => user.userId === correctedObject.userId ? correctedObject : user
        );
      } else {
        const correctedObject = object;
        newQueryData.queues = newQueryData.queues.map(
          (queue) => queue._id === correctedObject._id ? correctedObject : queue
        );
      }
    } else {
      if (currentQueryData._id !== object._id) {
        return;
      }
      if (objectType === "user" && object._id === this.stateService.getUserId()) {
        if (isUserObject(object)) {
          let queryDataDevices;
          if (isUserObject(currentQueryData)) {
            queryDataDevices = currentQueryData.settings.devices;
          }
          object.settings.devices = {
            ...queryDataDevices
          };
          object.queues = normalizeUserQueues(object.queues);
        }
      }
      newQueryData = object;
    }
    queryClient.setQueryData(queryKey, newQueryData);
    const persister = this.persisterClient.getQueryPersister();
    persister?.persistQueryByKey(queryKey, queryClient).catch((error) => {
      this.logger.error("DataService - handleDynamicChangeNotification - persister error: ", error);
    });
    switch (objectType) {
      case "entitlementsuserentitlement": {
        const userEntitlements = object;
        const userEntitlementsList = this.stateService.getUserEntitlements() ?? [];
        const entitlementIndex = userEntitlementsList.findIndex(
          (entitlement) => entitlement._id === userEntitlements._id
        );
        if (entitlementIndex !== -1) {
          userEntitlementsList[entitlementIndex] = userEntitlements;
        } else {
          userEntitlementsList.push(userEntitlements);
        }
        this.stateService.setUserEntitlements(userEntitlementsList);
        break;
      }
      case "entitlementstenantentitlement": {
        const tenantEntitlements = object;
        const tenantEntitlementsList = this.stateService.getTenantEntitlements() ?? [];
        const entitlementIndex = tenantEntitlementsList.findIndex(
          (entitlement) => entitlement._id === tenantEntitlements._id
        );
        if (entitlementIndex !== -1) {
          tenantEntitlementsList[entitlementIndex] = tenantEntitlements;
        } else {
          tenantEntitlementsList.push(tenantEntitlements);
        }
        this.stateService.setTenantEntitlements(tenantEntitlementsList);
        break;
      }
    }
  }
  handleDeleteV2(objectType, object) {
    const isCompanyDirectoryData = objectType === "queue" || objectType === "user" && !object.objectType;
    const queryKey = ["static", isCompanyDirectoryData ? "companyDirectory" : objectType];
    const currentQueryData = queryClient.getQueryData(queryKey);
    if (!currentQueryData) {
      return;
    }
    let newQueryData;
    if (Array.isArray(currentQueryData)) {
      newQueryData = currentQueryData.filter((o) => o._id !== object._id);
    } else if (isCompanyDirectoryData) {
      const { queues, topics, users } = currentQueryData;
      newQueryData = {
        queues,
        topics,
        users
      };
      if (objectType === "user") {
        const correctedObject = object;
        newQueryData.users = newQueryData.users.filter((o) => o.userId !== correctedObject.userId);
      } else {
        newQueryData.queues = newQueryData.queues.filter((o) => o._id !== object._id);
      }
    }
    if (newQueryData) {
      queryClient.setQueryData(queryKey, newQueryData);
      const persister = this.persisterClient.getQueryPersister();
      persister?.persistQueryByKey(queryKey, queryClient).catch((error) => {
        this.logger.error(
          "DataService - handleDynamicChangeNotification - persister error: ",
          error
        );
      });
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleCreate(data, model, relationInformation) {
    if (!relationInformation) {
      if (!model._id) {
        return;
      }
      data.set(model._id, model);
      this.adjustName(model);
      return;
    }
    const relation = data.get(model[relationInformation.source]);
    if (!relation[relationInformation.field]) {
      relation[relationInformation.field] = {
        count: 0,
        next: 0,
        objects: [],
        previous: 0,
        total: 0
      };
    }
    if (!relation[relationInformation.field].objects) {
      relation[relationInformation.field].objects = [];
    }
    relation[relationInformation.field].objects.push(model);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleDelete(data, model, relationInformation) {
    if (!relationInformation) {
      if (!model._id) {
        return;
      }
      data.delete(model._id);
      return;
    }
    const relation = data.get(model[relationInformation.source]);
    const arr = relation[relationInformation.field] ? (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      relation[relationInformation.field].objects
    ) : [];
    let index = -1;
    for (let i = 0; i < arr.length && index === -1; i++) {
      const o = arr[i];
      if (o._id === model._id) {
        index = i;
      }
    }
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleUpdate(data, model, relationInformation) {
    this.logger.trace("DataService - handleUpdate");
    if (!relationInformation) {
      let tmp = null;
      if (!model._id) {
        if (!data[model.userId]) {
          return;
        }
        tmp = data[model.userId];
        delete tmp.expansions;
        Object.assign(tmp, model);
      } else {
        if (!data[model.userId]) {
          return;
        }
        tmp = data[model.userId];
        delete tmp.expansions;
        Object.keys(tmp).forEach((field) => {
          if (!model.hasOwnProperty(field)) {
            delete tmp[field];
          }
        });
        Object.assign(tmp, model);
      }
      this.adjustName(model);
      return;
    }
    const relation = data.get(model[relationInformation.source]);
    const arr = relation[relationInformation.field] ? (
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      relation[relationInformation.field].objects
    ) : [];
    let index = -1;
    for (let i = 0; i < arr.length && index === -1; i++) {
      const o = arr[i];
      if (o._id === model._id) {
        index = i;
      }
    }
    if (index > -1) {
      delete arr[index].expansions;
      Object.assign(arr[index], model);
    }
  }
  /**
   * The function `getTenantEx` retrieves tenant data asynchronously based on certain conditions.
   * @returns The `getTenantEx` function is returning the `tenant` object. If the `tenant` object is
   * already stored in the `data` property, it will return that object directly. If not, it will
   * retrieve the `tenant` object using the `tenantSchemaType.retrieve` method and store it in the
   * `data` property before returning it.
   * @deprecated getTenantEx is deprecated, use sdk.getStateService().getTenant()
   */
  async getTenantEx() {
    this.logger.warn(
      "DataService - getTenantEx is deprecated, use sdk.getStateService().getTenant()"
    );
    const tenant = this.stateService.getTenant();
    if (tenant) {
      return tenant;
    }
    if (this.stateService.canView("tenant") || this.stateService.canViewMine("tenant")) {
      const tenantId = this.stateService.getTenantId();
      if (!tenantId) {
        return void 0;
      }
      const tenant2 = await this.schemaTypeClient.retrieve("tenant", {
        createdAt: -1,
        id: tenantId
      });
      return tenant2;
    }
    return void 0;
  }
  /**
   * The function `getSchemaTypes` returns the schema type from the data.
   * @returns The `schemaType` value from the `data` object is being returned.
   * @deprecated getSchemaTypes is deprecated, use sdk.getStateService().getSchemaTypes()
   */
  getSchemaTypes() {
    this.logger.warn(
      "DataService - getSchemaTypes is deprecated, use sdk.getStateService().getSchemaTypes()"
    );
    return this.stateService.getSchemaTypes();
  }
  /**
   * The function `getSchemaType` returns the SchemaType corresponding to a given
   * schema type name or null if not found.
   * @param {string} schemaTypeName - The `schemaTypeName` parameter is a string
   * that represents the name of a schema type.
   * @returns The function `getSchemaType` is returning the `SchemaType`
   * corresponding to the `schemaTypeName` provided as a parameter. If a matching
   * `SchemaType` is found in the `SchemaTypes` collection, it is returned.
   * Otherwise, `null` is returned.
   * @deprecated Use sdk.getSchemaTypeClient()
   */
  getSchemaType(schemaTypeName) {
    this.logger.warn("DataService - getSchemaType is deprecated");
    return SchemaTypes.get(schemaTypeName) ?? null;
  }
  /**
   * This function retrieves a schema type model based on a given schema type ID.
   * @param {string} schemaTypeId - The `schemaTypeId` parameter in the `getSchemaTypeModel` function
   * is a string that represents the unique identifier of a schema type. The function retrieves the
   * schema type model based on this identifier from a list of schema types.
   * @returns The `getSchemaTypeModel` function is returning the schema type object that matches the
   * provided `schemaTypeId`. If a matching schema type is found in the array returned by
   * `this.getSchemaTypes()`, it will be returned. Otherwise, `null` will be returned.
   * @deprecated Use sdk.getSchemaTypeClient()
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSchemaTypeModel(schemaTypeId) {
    this.logger.warn("DataService - getSchemaTypeModel is deprecated");
    return this.stateService.getSchemaTypeModel(schemaTypeId);
  }
  /**
   * This function retrieves a schema type model by its name from a list of schema types.
   * @param {string} schemaTypeName - The `schemaTypeName` parameter is a string that represents the
   * name of a schema type. The `getSchemaTypeModelByName` method is used to retrieve a schema type
   * model based on the provided schema type name.
   * @returns The `getSchemaTypeModelByName` function is returning the schema type model that matches
   * the provided `schemaTypeName`. It searches for a schema type with a name that matches
   * `schemaTypeName` within the list of schema types obtained from `this.getSchemaTypes()`. If a
   * matching schema type is found, it is returned; otherwise, `null` is returned.
   * @deprecated Use sdk.getSchemaTypeClient()
   */
  getSchemaTypeModelByName(schemaTypeName) {
    this.logger.warn("DataService - getSchemaTypeModelByName is deprecated");
    return this.stateService.getSchemaTypeModelByName(schemaTypeName);
  }
  /**
   * The function `getSchemaLayouts` retrieves schema layouts if not already loaded and returns the
   * values of the schema layouts.
   * @returns The function `getSchemaLayouts` is returning the values of the `SchemaLayouts` object
   * after checking if the data has been loaded and loading it if necessary.
   * @deprecated Use sdk.getStateService().getSchemaLayouts()
   */
  async getSchemaLayouts() {
    this.logger.warn(
      "DataService - getSchemaLayouts is deprecated, use sdk.getStateService().getSchemaLayouts()"
    );
    const schemaLayouts2 = this.stateService.getSchemaLayouts();
    if (!schemaLayouts2) {
      await this.loadSchemaLayouts();
    }
    return SchemaLayouts.values();
  }
  /**
   * This function retrieves a schema layout model based on a given schema layout ID.
   * @param {string} schemaLayoutId - The `schemaLayoutId` parameter is a string that represents the
   * unique identifier of a schema layout. This function retrieves the schema layout model based on the
   * provided `schemaLayoutId`.
   * @returns The `getSchemaLayoutModel` function is returning the schema layout object that matches
   * the provided `schemaLayoutId`. It first retrieves the `schemaLayout` data from `this.data`, then
   * uses the `find` method to search for a schema layout object with an `_id` property that matches
   * `schemaLayoutId`. If a matching schema layout object is found, it is returned; otherwise, `
   * @deprecated Use sdk.getStateService().getSchemaLayout()
   */
  getSchemaLayoutModel(schemaLayoutId) {
    this.logger.warn(
      "DataService - getSchemaLayoutModel is deprecated, use sdk.getStateService().getSchemaLayout()"
    );
    return this.stateService.getSchemaLayout(schemaLayoutId);
  }
  /**
   * This function retrieves a schema layout model by its name from a data source.
   * @param {string} schemaLayoutName - The `schemaLayoutName` parameter is a string that represents
   * the name of a schema layout model that you want to retrieve from the data.
   * @returns The `getSchemaLayoutModelByName` function returns the schema layout model object that has
   * a name matching the `schemaLayoutName` parameter. If a matching schema layout is found, it is
   * returned; otherwise, `null` is returned.
   * @deprecated Use sdk.getStateService().getSchemaLayout()
   */
  getSchemaLayoutModelByName(schemaLayoutName) {
    this.logger.warn(
      "DataService - getSchemaLayoutModelByName is deprecated, use sdk.getStateService().getSchemaLayout()"
    );
    return this.stateService.getSchemaLayouts()?.find((schemaLayout) => schemaLayout.name === schemaLayoutName);
  }
  /**
   * This function retrieves a schema layout by name or returns null if not found.
   * @param {string} schemaLayoutName - The `schemaLayoutName` parameter is a string that represents
   * the name of a schema layout. This function `getSchemaLayout` takes this parameter and returns the
   * corresponding `SchemaLayout` object if it exists in the `SchemaLayouts` collection. If the schema
   * layout does not exist, it returns
   * @returns The `getSchemaLayout` function is returning a `SchemaLayout` object corresponding to the
   * provided `schemaLayoutName` if it exists in the `SchemaLayouts` collection. If the
   * `schemaLayoutName` is not found in the collection, it returns `null`.
   * @deprecated Use sdk.getStateService().getSchemaLayout()
   */
  getSchemaLayout(schemaLayoutName) {
    this.logger.warn(
      "DataService - getSchemaLayout is deprecated, use sdk.getStateService().getSchemaLayout()"
    );
    return SchemaLayouts.get(schemaLayoutName) ?? null;
  }
  /**
   * This function returns an array of languages from the data.
   * @returns An array of Language objects is being returned.
   * @deprecated Use sdk.getStateService().getLanguages()
   */
  getLanguages() {
    this.logger.warn(
      "DataService - getLanguages is deprecated, use sdk.getStateService().getLanguages()"
    );
    return this.stateService.getLanguages();
  }
  /**
   * The function `getDispositions` asynchronously retrieves dispositions from data, handling errors
   * using promises in TypeScript.
   * @returns An asynchronous function `getDispositions()` is being returned. This function returns a
   * Promise that resolves to an array of type `any[]`. The function first checks if the data has a key
   * 'disposition'. If it does not, it calls the `fetchDispositions()` method to load the dispositions.
   * Once the dispositions are loaded, it resolves the Promise with the data stored under the '
   * @deprecated Use sdk.getStateService().getDispositions()
   */
  async getDispositions() {
    this.logger.warn(
      "DataService - getDispositions is deprecated, use sdk.getStateService().getDispositions()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getDispositions()) {
          this.loadDispositions().then(() => {
            resolve(this.stateService.getDispositions());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getDispositions());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * This TypeScript function asynchronously retrieves surveys from data storage and returns a Promise
   * containing an array of survey data.
   * @returns An array of type `any` is being returned asynchronously.
   * @deprecated Use sdk.getStateService().getSurveys()
   */
  async getSurveys() {
    this.logger.warn(
      "DataService - getSurveys is deprecated, use sdk.getStateService().getSurveys()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getSurveys()) {
          this.loadSurveys().then(() => {
            resolve(this.stateService.getSurveys());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getSurveys());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * This function asynchronously retrieves compliances data and returns a promise that resolves with
   * an array of any type.
   * @returns The `getCompliances` function is returning a Promise that resolves to an array of type
   * `any[]`. The function first checks if the data has already been loaded, and if not, it calls the
   * `loadCompliances` method to load the data. Once the data is loaded, it resolves the Promise with
   * the compliance data. If there is an error during the process, it rejects
   * @deprecated Use sdk.getStateService().getComplianceDispositions()
   */
  async getCompliances() {
    this.logger.warn(
      "DataService - getCompliances is deprecated, use sdk.getStateService().getComplianceDispositions()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getComplianceDispositions()) {
          this.loadCompliances().then(() => {
            resolve(this.stateService.getComplianceDispositions());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getComplianceDispositions());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * @deprecated Use sdk.getStateService().getCampaignScripts()
   */
  async getAgentScripts() {
    this.logger.warn(
      "DataService - getAgentScripts is deprecated, use sdk.getStateService().getCampaignScripts()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getCampaignScripts()) {
          this.loadAgentScripts().then(() => {
            resolve(this.stateService.getCampaignScripts());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getCampaignScripts());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Asynchronously retrieves templates from the data storage.
   * If the templates are not already loaded, it loads them first.
   *
   * @returns {Promise<any[]>} A promise that resolves to an array of templates.
   *
   * @remarks
   * This function checks if the 'templates' key exists in the data storage.
   * If it does not exist, it calls the `loadTemplates
   * @deprecated Use sdk.getStateService().getTemplates()
   */
  async getTemplates() {
    this.logger.warn(
      "DataService - getTemplates is deprecated, use sdk.getStateService().getTemplates()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getTemplates()) {
          this.loadTemplates().then(() => {
            resolve(this.stateService.getTemplates());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getTemplates());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Asynchronously retrieves a list of campaigns, optionally filtered by type.
   *
   * @param {string} [type] - The type of campaigns to filter by. Possible values include 'Email', 'Extension', 'Fax', 'Outbound', 'Predictive', 'Progressive', and 'SMS'.
   * @returns {Promise<any[]>} A promise that resolves to an array of campaign objects. Each campaign object contains `id`, `label`, and `name` properties.
   * @throws Will throw an error if the campaigns cannot be loaded or processed.
   * @deprecated Use sdk.getStateService().getCampaigns()
   */
  async getCampaigns(type) {
    this.logger.warn(
      "DataService - getCampaigns is deprecated, use sdk.getStateService().getCampaigns()"
    );
    if (!this.stateService.getCampaigns()) {
      await this.loadCampaigns();
    }
    let campaigns = this.stateService.getCampaigns();
    if (!type) {
      sortObject(campaigns, 1, (campaign) => {
        return campaign.name;
      });
      return campaigns;
    }
    switch (type) {
      case "Email":
        campaigns = campaigns.filter((campaign) => campaign.useForEmail);
        break;
      case "Extension":
        campaigns = campaigns.filter((campaign) => campaign.useForExtension);
        break;
      case "Fax":
        campaigns = campaigns.filter((campaign) => campaign.useForFax);
        break;
      case "Outbound":
        campaigns = campaigns.filter((campaign) => campaign.useForOutbound);
        break;
      case "Predictive":
        campaigns = campaigns.filter((campaign) => campaign.useForPredictive);
        break;
      case "Progressive":
        campaigns = campaigns.filter((campaign) => campaign.useForProgressive);
        break;
      case "SMS":
        campaigns = campaigns.filter((campaign) => campaign.useForSMS);
        break;
    }
    sortObject(campaigns, 1, (campaign) => {
      return campaign.name;
    });
    return campaigns;
  }
  /**
   * Asynchronously retrieves a list of skills from the data storage.
   * If the skills are not already loaded, it loads them first.
   *
   * @returns {Promise<Skill[]>} A promise that resolves to an array of skills.
   * @throws Will throw an error if the skills cannot be loaded or processed.
   * @deprecated Use sdk.getStateService().getCampaigns()
   */
  async getSkills() {
    this.logger.warn(
      "DataService - getSkills is deprecated, use sdk.getStateService().getSkills()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getSkills()) {
          this.loadSkills().then(() => {
            resolve(this.stateService.getSkills());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getSkills());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * @deprecated Use sdk.getStateService().getScoreCards()
   */
  async getScoreCards() {
    this.logger.warn(
      "DataService - getScoreCards is deprecated, use sdk.getStateService().getScoreCards()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getScoreCards()) {
          this.loadScoreCards().then(() => {
            resolve(this.stateService.getScoreCards());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getScoreCards());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Retrieves the regex data from the service.
   * @returns A promise that resolves to an array of regex data.
   * @deprecated Use sdk.getStateService().getRegexes()
   */
  async getRegex() {
    this.logger.warn(
      "DataService - getRegex is deprecated, use sdk.getStateService().getRegexes()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getRegexes()) {
          this.loadRegex().then(() => {
            resolve(this.stateService.getRegexes());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getRegexes());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * Retrieves the classifications from the data service.
   * @returns A promise that resolves to an array of classifications.
   * @deprecated Use sdk.getStateService().getClassifications()
   */
  async getClassifications() {
    this.logger.warn(
      "DataService - getClassifications is deprecated, use sdk.getStateService().getClassifications()"
    );
    return new Promise((resolve, reject) => {
      try {
        if (!this.stateService.getClassifications()) {
          this.loadClassifications().then(() => {
            resolve(this.stateService.getClassifications());
          }).catch((error) => {
            reject(error);
          });
        }
        resolve(this.stateService.getClassifications());
      } catch (error) {
        reject(error);
      }
    });
  }
  /**
   * TODO
   * This could return an array or an object, need to formalize the return
   * @deprecated Use sdk.getStateService().get()
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getData(name) {
    this.logger.warn("DataService - getData is deprecated, use sdk.getStateService().get()");
    return this.stateService.get(name);
  }
  /**
   * Translates the given key using the translator service.
   * @param key - The key to be translated.
   * @param params - Optional parameters to be used in the translation.
   * @returns The translated string.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  translate(key, params) {
    return this.translatorService.translate(key, params);
  }
  /**
   * Adjusts the label based on the specified language.
   * If the label is an object with language-specific values, it returns the value for the specified language.
   * If the label is a string, it returns the translated version of the label.
   * If the label is null or undefined, it returns null.
   * If an error occurs during the translation process, it returns the default label or 'Error in label'.
   *
   * @param language - The language code for which to adjust the label.
   * @param label - The label to adjust.
   * @param defaultLabel - The default label to use if the label is not found or an error occurs.
   * @returns The adjusted label or null.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  adjustLabel(language, label, defaultLabel) {
    if (!label) {
      return null;
    }
    try {
      if (typeof label === "object" && label[language]) {
        return this.translate(label[language]);
      }
      if (typeof label === "string") {
        return this.translate(label);
      }
      return this.translate(defaultLabel);
    } catch (error) {
      return defaultLabel || "Error in label";
    }
  }
  /**
   * Loads provider data and performs necessary operations.
   * @returns A promise that resolves with the response from the server.
   * @throws Throws an error if there is an error while loading provider data.
   */
  async loadProviderData() {
    this.logger.trace("DataService - loadProviderData");
    try {
      const language = this.stateService.getLanguage();
      const response = await this.internalStateManagementService.upsertValueFromAPI(
        "translations",
        `/provider/translation/translationkey/${language}`
      );
      this.stateService.setTranslations(language, response.data);
      this.logger.debug(
        `DataService - loadProviderData - translations for language [${language}] were loaded successfully`,
        response.data
      );
      this.translatorService.load(this.stateService.getLanguage(), response.data);
      this.eventsService.emitExternal(ExternalEvents.LanguageLoaded);
      return response;
    } catch (error) {
      let message = "";
      if (isAxiosError2(error)) {
        message = JSON.stringify(error.toJSON());
      }
      this.logger.error("DataService - loadProviderData - error", message);
      throw error;
    }
  }
  async loadSchemaLayouts() {
    await this.internalStateManagementService.upsertValueFromAPI(
      "schemaLayout",
      "/data/api/types/schemalayout?q=*&rows=1000"
    );
    this.processArrayData("schemaLayout", this.stateService.getSchemaLayouts(), (model) => {
      SchemaLayouts.set(model.name, new SchemaLayout(model, this));
    });
  }
  async loadDispositions() {
    const response = await queryClient.ensureQueryData({
      ...getStaticDataQueryOptions("disposition"),
      revalidateIfStale: true
    });
    return response;
  }
  async loadSurveys() {
    await this.loadData("surveys", "/users/api/types/survey?q=*");
  }
  async loadCompliances() {
    await this.loadData("compliance", "/users/api/types/compliancedisposition?q=*");
  }
  async loadAgentScripts() {
    await this.loadData("agentScripts", "/users/api/types/campaignscript?q=*&limit=1000");
  }
  async loadTemplates() {
    await this.loadData("templates", "/users/api/types/template?q=*&limit=1000");
  }
  async loadCampaigns() {
    const campaignsQueryData = await queryClient.ensureQueryData({
      ...getStaticDataQueryOptions("campaign"),
      revalidateIfStale: true
    });
    return campaignsQueryData;
  }
  async loadSkills() {
    await this.loadData("skills", "/data/api/types/skill?q=*");
  }
  async loadScoreCards() {
    await this.loadData("scorecards", "/users/api/types/scorecard");
  }
  async loadRegex() {
    await this.loadData("regex", "/users/api/types/regex");
  }
  async loadClassifications() {
    await this.loadData("classifications", "/users/api/types/classification");
  }
  /**
   * The function `loadData` asynchronously loads data from a specified URL, logs the delay, and
   * processes the data.
   * @param {string} objectType - The `objectType` parameter in the `loadData` function represents the
   * type of object that you are loading data for. It could be a string value such as "user", "product",
   * "order", etc.
   * @param {string} url - The `url` parameter in the `loadData` function is a string that represents the
   * URL from which data will be fetched for the specified `objectType`.
   * @param [fields] - The `fields` parameter in the `loadData` function is an optional parameter of type
   * `Array<string>`. It allows you to specify an array of field names that you want to retrieve for the
   * given `objectType`. If `fields` is provided, only the specified fields will be fetched and
   */
  async loadData(objectType, url, fields) {
    await this.internalStateManagementService.upsertValueFromAPI(objectType, url, fields);
    this.processData(objectType, this.stateService.get(objectType));
  }
  /**
   * The function `loadMandatoryData` asynchronously loads essential data such as languages, schema
   * types, user information, and widgets, handling errors and logging the delay in milliseconds.
   */
  async loadMandatoryData() {
    this.logger.trace("DataService - loadMandatoryData");
    try {
      const schemaTypesPromise = this.fetchSchemaTypes();
      const languagesPromise = this.fetchLanguages();
      const statusesPromise = this.fetchStatuses();
      const directoryPromise = this.stateService.getDomainEnvironment() === "ncx" ? this.fetchCompanyDirectory() : Promise.resolve();
      const schemaLayoutsPromise = this.fetchSchemaLayouts();
      const campaignsPromise = this.loadCampaigns();
      const dispositionsPromise = this.loadDispositions();
      const aiEmployeesPromise = this.fetchAIEmployees();
      const promises = [
        directoryPromise,
        schemaTypesPromise,
        languagesPromise,
        statusesPromise,
        schemaLayoutsPromise,
        campaignsPromise,
        dispositionsPromise,
        aiEmployeesPromise
      ];
      await Promise.all(promises);
      await this.loadMandatoryUserData();
    } catch (error) {
      this.logger.error("DataService - loadMandatoryData - error", error);
      throw error;
    }
  }
  async loadMandatoryUserData() {
    this.logger.trace("DataService - loadMandatoryUserData");
    const hasUserSchemaType = this.schemaTypeClient.has("user");
    const hasUserProfileSchemaType = this.schemaTypeClient.has("userprofile");
    if (hasUserSchemaType && hasUserProfileSchemaType && this.stateService.isAgent() && this.stateService.canViewMine("user")) {
      const userId = this.stateService.getUserId();
      const userProfileId = this.stateService.getUserProfileId();
      if (!userId || !userProfileId) {
        throw new Error("DataService - loadMandatoryData - User or UserProfile not loaded");
      }
      await Promise.all([
        this.schemaTypeClient.retrieve("user", { id: userId }),
        this.schemaTypeClient.retrieve("userprofile", { id: userProfileId })
      ]);
      const campaigns = this.stateService.getCampaigns();
      if (campaigns) {
        this.eventsService.emitExternal(ExternalEvents.CampaignsChangedNotification, campaigns);
      }
      try {
        if (!this.stateService.canView("tenant") && !this.stateService.canViewMine("tenant")) {
          this.logger.warn(
            "DataService - loadMandatoryData - User doesn't have permission to view tenant"
          );
        }
        await this.schemaTypeClient.retrieve("tenant", {
          id: this.stateService.getSession()?.tenantId ?? "-1"
        });
      } catch (error) {
        this.logger.error("DataService - loadMandatoryData - Unable to retrieve tenant", error);
      }
    }
  }
  async fetchCompanyDirectory() {
    const companyQueryData = await queryClient.ensureQueryData({
      ...getCompanyDirectoryQueryOptions(),
      revalidateIfStale: true
    });
    const data = {
      queues: companyQueryData.queues,
      topics: companyQueryData.topics,
      users: companyQueryData.users
    };
    this.eventsService.emitExternal(ExternalEvents.CompanyDirectoryNotification, data);
    return data;
  }
  /**
   * Fetches AI employees from the API and caches them.
   * AI employees are loaded in parallel with other mandatory data.
   * Errors are caught and logged but don't prevent SDK initialization.
   * @returns A promise that resolves when AI employees are loaded.
   */
  async fetchAIEmployees() {
    try {
      dependencyInjectionContainer.resolve("aiEmployeeService");
      await queryClient.ensureQueryData({
        ...getAIEmployeesQueryOptions(),
        revalidateIfStale: true
      });
      this.logger.info("DataService - fetchAIEmployees - AI employees loaded successfully");
    } catch (error) {
      this.logger.error("DataService - fetchAIEmployees - error", error);
    }
  }
  /**
   * Fetches the languages from the API.
   * @returns A promise that resolves to the fetched languages.
   */
  async fetchLanguages() {
    const response = await queryClient.ensureQueryData({
      ...getStaticDataQueryOptions("language"),
      revalidateIfStale: true
    });
    return response;
  }
  /**
   * Fetches the statuses from the API.
   *
   * @returns {Promise<any>} A promise that resolves with the fetched statuses.
   */
  async fetchStatuses() {
    const response = await queryClient.ensureQueryData({
      ...getStaticDataQueryOptions("status"),
      revalidateIfStale: true
    });
    return response;
  }
  /**
   * Fetches the schema types from the API.
   *
   * @returns A Promise that resolves to the fetched schema types.
   */
  async fetchSchemaTypes() {
    const queryOptions = getStaticDataQueryOptions("schematype");
    const response = await queryClient.ensureQueryData({
      ...queryOptions,
      revalidateIfStale: true
    });
    return response;
  }
  async fetchSchemaLayouts() {
    const response = await queryClient.ensureQueryData({
      ...getStaticDataQueryOptions("schemalayout"),
      revalidateIfStale: true
    });
    return response;
  }
  /**
   * Fetches the widgets for the user's home tabs.
   *
   * @returns An array of widgets.
   */
  async fetchWidgets() {
    try {
      this.eventsService.emitExternal(ExternalEvents.InitFetchWidgets);
      const userHomeTabs = this.stateService.getUser()?.hometabs;
      const userProfileHomeTabs = this.stateService.getUserProfile()?.hometabs;
      let homeTabs = [];
      if (userProfileHomeTabs && userProfileHomeTabs.count > 0) {
        homeTabs = userProfileHomeTabs.objects ?? [];
      }
      if (userHomeTabs && userHomeTabs.count > 0) {
        homeTabs = userHomeTabs.objects ?? [];
      }
      const requests = homeTabs.map(
        (homeTab) => this.schemaTypeClient.retrieve("hometab", {
          createdAt: -1,
          id: homeTab.hometabId
        })
      );
      const response = await Promise.all(requests);
      const widgets = response.flatMap((homeTab) => homeTab.widgets?.objects ?? []).map((homeTabWidget) => homeTabWidget.expansions?.widgetId).filter((widgetId) => widgetId !== void 0);
      this.eventsService.emitInternal(InternalEvents.WidgetsDataNotification, widgets);
      this.eventsService.emitExternal(ExternalEvents.InitFetchWidgetsSuccess);
      return widgets;
    } catch (error) {
      this.eventsService.emitExternal(ExternalEvents.InitFetchWidgetsError);
    }
    return void 0;
  }
  /**
   * For testing only
   */
  loadSystemData() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.LoadSystemData)).subscribe(() => {
      const loadSystemData = async () => {
        this.logger.trace("DataService - loadSystemData");
        this.getSchemaTypes();
        await this.getSchemaLayouts();
        await this.getDispositions();
        await this.getSurveys();
        await this.getCompliances();
        await this.getAgentScripts();
        await this.getTemplates();
        await this.getCampaigns();
        await this.getSkills();
        await this.getScoreCards();
        await this.getRegex();
        await this.getClassifications();
      };
      loadSystemData().catch((error) => {
        this.logger.error(error);
      });
    });
  }
  processArrayData(name, arr, afterRowProcessed) {
    const helper = this.getHelper(name);
    arr.forEach((data) => {
      helper.processData(data);
      if (afterRowProcessed) {
        afterRowProcessed(data);
      }
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  processData(name, data) {
    try {
      this.getHelper(name).processData(data);
      this.stateService.set(name, data);
    } catch (error) {
      this.logger.error(error);
    }
  }
  /**
   * Retrieves the appropriate helper instance based on the provided objectType.
   *
   * @param objectType - The type of object for which the helper instance is needed.
   * @returns The helper instance corresponding to the objectType.
   */
  getHelper(objectType) {
    const language = this.stateService.getLanguage();
    switch (objectType) {
      case "schemaType":
        return HelperType.getInstance(language, this);
      case "schemaLayout":
        return HelperLayout.getInstance(language, this);
      case "contact":
        return HelperContact.getInstance(language, this);
      case "campaigngoals":
        return HelperCampaignGoal.getInstance(language, this);
      case "user":
        return HelperUser.getInstance(language, this);
      case "home":
        return HelperHome.getInstance(language, this);
      case "userclientsetting":
        return HelperUserClientSetting.getInstance(language, this);
      case "userprofile":
        return HelperUserProfile.getInstance(language, this);
      case "tenant":
        return HelperTenant.getInstance(language, this);
      case "workitem":
        return HelperWorkitem.getInstance(language, this);
      default:
        return HelperDefault.getInstance(language, this);
    }
  }
  /**
   * Adjusts the name of the model based on the current language.
   * @param model - The model object to adjust the name for.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  adjustName(model) {
    if (model.localizations) {
      const language = this.stateService.getLanguage();
      Object.keys(model.localizations).forEach((field) => {
        const o = model.localizations[field];
        if (o[language]?.value) {
          model[field] = o[language].value;
        } else if (o.en?.value) {
          model[field] = o.en.value;
        } else {
          this.logger.trace(
            `DataService - handleDynamicChangeNotification, can't update field ${field} no language needed in the update`,
            o
          );
        }
      });
    }
  }
  /**
   * Prints all the layout values of the SchemaLayouts enum.
   */
  printLayouts() {
    SchemaLayouts.values().forEach((schemaLayout) => {
      this.logger.trace(schemaLayout.getName());
      schemaLayout.print();
    });
  }
  /**
   * Generates a signed URL for accessing a user's avatar image.
   *
   * @param {string} userId - The ID of the user whose avatar URL needs to be generated.
   * @returns {string} The signed URL for the user's avatar image.
   * @deprecated use sdk.getUserService().buildAvatarSignedURL()
   */
  buildAvatarSignedURL({ userId }) {
    const baseURL = this.stateService.getBaseURL();
    const token = this.stateService.getToken();
    return `${baseURL}/data/api/types/user/${userId}/avatar?token=${token}`;
  }
};

// src/services/disposition.ts
var DispositionService = class {
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
  }
  /**
   * This TypeScript function handles the disposition of a work item by sending
   * relevant data to an API endpoint using axios.
   * @param {Workitem} model - The `model` parameter in the `disposition` function
   * represents a Workitem object. It is used to pass information about the work
   * item for which the disposition is being set.
   * @param {string} dispositionId - The `dispositionId` parameter in the
   * `disposition` function represents the unique identifier associated with the
   * disposition of a work item. It is used to specify the particular disposition
   * action that needs to be taken for the work item.
   * @param {string} action - The `action` parameter in the `disposition` function
   * represents the action that will be taken for the work item. It could be a
   * string indicating the specific action to be performed on the work item, such
   * as "complete", "reassign", "escalate", etc.
   * @param {number} callbackDate - The `callbackDate` parameter in the
   * `disposition` function represents the date for a callback. It is of type
   * `number` and is used to specify the date on which a callback should be
   * scheduled.
   * @param {number} callbackTime - The `callbackTime` parameter in the
   * `disposition` function represents the time at which a callback is scheduled.
   * It is a number value that typically represents the time in milliseconds or
   * seconds when the callback is supposed to occur. This parameter is used to
   * specify the exact time for the callback to be initiated
   * @param {string} phone - The `phone` parameter in the `disposition` function
   * represents the phone number associated with the work item. It is a string type
   * parameter where you would provide the phone number to be used for the
   * disposition action.
   * @param {string} mediaType - The `mediaType` parameter in the `disposition`
   * function represents the type of media through which the interaction is taking
   * place. This could be a phone call, email, chat, or any other communication
   * channel used for the work item.
   * @param queues - The `queues` parameter in the `disposition` function is an
   * array of strings that represents the queues to which the work item will be
   * assigned. Each string in the array corresponds to a specific queue where the
   * work item will be processed or handled.
   * @param skills - The `skills` parameter in the `disposition` function
   * represents an array of strings that contain the skills associated with the
   * work item being processed. These skills typically refer to the abilities or
   * expertise required to handle the work item effectively. The `skills` array
   * allows you to specify multiple skills that may be
   * @param {boolean} useCallbackNumberOnly - The parameter useCallbackNumberOnly
   * is a boolean flag that indicates whether only the callback phone number should
   * be used during the disposition process. If useCallbackNumberOnly is set to
   * true, it means that only the phone number provided should be used for any
   * callback actions or follow-ups. If it is set to false,
   * @param {boolean} connectAgain - The `connectAgain` parameter in the
   * `disposition` function is a boolean flag that indicates whether the user wants
   * to connect again after the disposition action is completed. If `connectAgain`
   * is set to `true`, it means that the user wants to establish a connection
   * again, whereas if it is
   * @param {any} survey - The `survey` parameter in the `disposition` function is
   * of type `any`, which means it can accept any data type. This parameter is used
   * to pass survey-related information to the function. You can use it to provide
   * details about the survey associated with the work item being processed.
   * @param {any} summary - The `summary` parameter in the `disposition` function
   * is used to provide a summary or additional information related to the work
   * item disposition. It is of type `any`, which means it can hold any type of
   * data. This parameter allows you to include any relevant details or notes that
   * should be associated
   * @returns The `disposition` function is returning a Promise that resolves to
   * the result of a POST request made using axiosInstance to the endpoint
   * `/users/api/workitems/${model._id}/disposition` with the properties provided
   * as the request body.
   */
  async disposition({
    action,
    callbackDate,
    callbackTime,
    connectAgain,
    dispositionId,
    mediaType,
    phoneNumber,
    queues,
    skills,
    summary,
    survey,
    useCallbackNumberOnly,
    workitemId
  }) {
    this.logger.debug(
      `DispositionService - disposition - using disposition [${dispositionId}] on workitem [${workitemId}]`
    );
    const payload = {
      action,
      callbackDate,
      callbackTime,
      connectAgain,
      id: dispositionId,
      mediaType,
      phoneNumber,
      queues,
      skills,
      summary,
      survey,
      useCallbackNumberOnly
    };
    return await axiosInstance.post(`/users/api/workitems/${workitemId}/disposition`, payload);
  }
  fetchDispositions() {
    this.logger.trace(`DispositionService - fetchDispositions`);
    return axiosInstance.get("/users/api/types/disposition?q=*");
  }
};

// src/services/eventsservice.ts
import { Subject } from "rxjs";
var EventsService = class {
  externalSubject = new Subject();
  internalSubject = new Subject();
  statisticsWebSocketSubject = new Subject();
  externalEvents$ = this.externalSubject.asObservable();
  internalEvents$ = this.internalSubject.asObservable();
  statisticWebSocketEvents$ = this.statisticsWebSocketSubject.asObservable();
  /**
   * Emits an internal event with the specified name and optional data.
   *
   * @template T - The type of the data being emitted.
   * @param name - The name of the event.
   * @param data - The optional data to be associated with the event.
   */
  emitInternal(name, data) {
    this.internalSubject.next(new NotificationEvent(name, data));
  }
  /**
   * Emits a statistic event with the given name and optional data.
   *
   * @template T - The type of the optional data.
   * @param {string} name - The name of the statistic event.
   * @param {T} [data] - The optional data associated with the event.
   */
  emitStatistic(name, data) {
    this.statisticsWebSocketSubject.next(new NotificationEvent(name, data));
  }
  /**
   * Emits an external event with the given name and optional data.
   * @param name - The name of the event.
   * @param data - Optional data associated with the event.
   * @typeparam T - The type of the data.
   */
  emitExternal(name, data) {
    this.externalSubject.next(new NotificationEvent(name, data));
  }
};

// src/services/outboundMode.ts
var OutboundModeService = class {
  stateService;
  logger;
  eventsService;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.stateService = stateService;
    this.logger = loggerService;
    this.eventsService = eventsService;
  }
  async loginToProgressive(payload) {
    this.logger.trace("ProgressiveService - loginToProgressive");
    await axiosInstance.post("/progressive/api/progressive/login", payload);
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.Progressive);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async loginToProgressiveWithCampaigns(payload) {
    this.logger.trace("ProgressiveService - loginToProgressiveWithCampaigns");
    await axiosInstance.post("/progressive/api/progressive/login", payload);
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.Progressive);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async logoutFromProgressive() {
    this.logger.trace("ProgressiveService - logoutFromProgressive");
    await axiosInstance.post("/progressive/api/progressive/logout");
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.NotLoggedIn);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async loginToPredictive(payload) {
    this.logger.trace("ProgressiveService - loginToPredictive");
    await axiosInstance.post("/progressive/api/predictive/login", payload);
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.Predictive);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async loginToPredictiveWithCampaigns(payload) {
    this.logger.trace("ProgressiveService - loginToPredictiveWithCampaigns");
    await axiosInstance.post("/progressive/api/predictive/login", payload);
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.Predictive);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async logoutFromPredictive() {
    this.logger.trace("ProgressiveService - logoutFromPredictive");
    await axiosInstance.post("/progressive/api/predictive/logout");
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.NotLoggedIn);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async loginToQuarterback(payload) {
    this.logger.trace("ProgressiveService - loginToQuarterback");
    await axiosInstance.post("/progressive/api/predictive/quarterback/login", payload);
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.Quarterback);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async loginToQuarterbackWithCampaigns(payload) {
    this.logger.trace("ProgressiveService - loginToQuarterbackWithCampaigns");
    await axiosInstance.post("/progressive/api/predictive/quarterback/login", payload);
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.Quarterback);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
  async logoutFromQuarterback() {
    this.logger.trace("ProgressiveService - logoutFromQuarterback");
    await axiosInstance.post("/progressive/api/predictive/logout");
    const updatedSession = this.stateService.setOutboundMode(OutboundModes.NotLoggedIn);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
  }
};

// src/services/phone.ts
var PhoneStatesService = class {
  inMute = false;
  /* DeviceId of the notification */
  deviceId;
  phoneState = PhoneStates.OnHook;
  eventsService;
  logger;
  constructor({
    eventsService,
    loggerService
  }) {
    this.eventsService = eventsService;
    this.logger = loggerService;
    this.handleMuteStateNotification();
    this.handlePhoneStateNotification();
    this.handleSessionChangeNotification();
  }
  handlePhoneStateNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.PhoneStateNotification)).subscribe((event) => {
      const phoneStateNotification = event.getProperties();
      if (phoneStateNotification.deviceId !== dependencyInjectionContainer.resolve("stateService").getDevice()?._id) {
        return;
      }
      this.deviceId = phoneStateNotification.deviceId;
      this.logger.debug(
        `PhoneStatesService - handlePhoneStateNotification - deviceId [${phoneStateNotification.deviceId}]`,
        phoneStateNotification
      );
      if (this.isOffHook() && phoneStateNotification.state === PhoneStates.Ringing) {
        return;
      }
      this.setPhoneState(phoneStateNotification.state);
    });
  }
  handleMuteStateNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.MuteStateNotification)).subscribe((event) => {
      this.logger.debug(
        `PhoneStatesService - handleMuteStateNotification - Muted [${event.getProperties().mute}]`
      );
      const muteStateNotification = event.getProperties();
      if (typeof muteStateNotification.mute === "boolean") {
        this.setInMute(muteStateNotification.mute);
      } else {
        this.setInMute(muteStateNotification.mute === "true");
      }
    });
  }
  handleSessionChangeNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SessionChangeNotification)).subscribe((event) => {
      const sessionChangeNotification = event.getProperties();
      this.setPhoneState(sessionChangeNotification.voiceState);
    });
  }
  /**
   * When a phone is "off hook" or " on hoold" it means that the receiver (handset) is not resting in its
   * cradle or is lifted from its base. This function returns if the agent device is connected or not
   * to the server. It is possible for the agent to work "Off Hook", to always be connected to the server
   * so calls are connected faster. Possible states are onHook, offHook and ringing.
   * @returns The method `getPhoneState()` is returning the state if the phone, one of the following: onHook,
   * offHook or ringing.
   */
  getPhoneState() {
    return this.phoneState;
  }
  /**
   * The function `setPhoneState` updates the phone state and emits a notification using an events
   * service in TypeScript.
   * @param {string} phoneState - The `phoneState` parameter in the `setPhoneState` method is a
   * string that represents the state of the phone. This method sets the `phoneState` property of the
   * current object to the provided `phoneState` value and then emits an external notification using
   * the `eventsService` with the
   */
  setPhoneState(phoneState) {
    this.phoneState = phoneState;
    if (this.phoneState === PhoneStates.OnHook) {
      this.deviceId = void 0;
    }
    this.eventsService.emitExternal(ExternalEvents.PhoneStateNotification, {
      deviceId: this.deviceId,
      isMyDeviceActive: this.isMyDeviceActive(),
      mute: this.inMute,
      state: this.phoneState
    });
  }
  /**
   * When a phone is "off hook" or " on hoold" it means that the receiver (handset) is not resting in its
   * cradle or is lifted from its base. This function returns if the agent device is connected or not
   * to the server. It is possible for the agent to work "Off Hook", to always be connected to the server
   * so calls are connected faster. Possible states are onHook, offHook and ringing.
   * @returns The method `isOnHook()` is returning a boolean value based indicating if the user device
   * is connected (true) ot not (false) to the server.
   */
  isOnHook() {
    if (this.isMyDeviceActive()) {
      return this.phoneState === PhoneStates.OnHook;
    }
    return false;
  }
  /**
   * When a phone is "off hook" or " on hoold" it means that the receiver (handset) is not resting in its
   * cradle or is lifted from its base. This function returns if the agent device is connected or not
   * to the server. It is possible for the agent to work "Off Hook", to always be connected to the server
   * so calls are connected faster. Possible states are onHook, offHook and ringing.
   * @returns The method `isOnHook()` is returning a boolean value based indicating if the user device
   * is connected (true) ot not (false) to the server.
   */
  isOffHook() {
    if (this.isMyDeviceActive()) {
      return this.phoneState === PhoneStates.OffHook;
    }
    return false;
  }
  isMyDeviceActive() {
    return this.deviceId !== void 0 && dependencyInjectionContainer.resolve("stateService").getDevice()?._id === this.deviceId;
  }
  /**
   * The function `isRinging` returns a boolean indicating if the phone is ringing. Possible states are onHook,
   * offHook and ringing.
   * * @returns The method `isRinging()` returns a boolean value based on whether the device is ringing (true)
   * or not(false).
   */
  isRinging() {
    return this.phoneState === PhoneStates.Ringing;
  }
  /**
   *
   * @param inMute
   */
  setInMute(inMute) {
    this.inMute = inMute;
    this.eventsService.emitExternal(ExternalEvents.PhoneStateNotification, {
      deviceId: this.deviceId,
      isMyDeviceActive: this.isMyDeviceActive(),
      mute: this.inMute,
      state: this.phoneState
    });
  }
  getCurrentDeviceId() {
    return this.deviceId;
  }
  /**
   * This TypeScript function checks if an object is currently muted.
   * @returns The method `isMuted()` is returning the value of the property `inMute`, which is a
   * boolean value indicating whether the object is currently muted or not.
   */
  isMuted() {
    return this.inMute;
  }
};

// src/services/provisioning.ts
var ProvisioningService = class {
  schemaTypeClient;
  logger;
  constructor({
    loggerService,
    schemaTypeClient
  }) {
    this.schemaTypeClient = schemaTypeClient;
    this.logger = loggerService;
  }
  /**
   * @deprecated searchUnusedPSTNNumbers is deprecated
   */
  async searchUnusedPSTNNumbers({
    q = "*",
    queryParams,
    rows = 100,
    start = 0
  }) {
    this.logger.warn(
      "ProvisioningService - searchUnusedPSTNNumbers is deprecated and will be removed in a future version"
    );
    const uri = this.schemaTypeClient.getLinkURI("pstnnumber", "retrieveUnusedNumbers");
    const params = {
      ...queryParams,
      q: encodeURIComponent(q),
      rows,
      start
    };
    const response = await axiosInstance.get(uri, { params });
    return response.data;
  }
};

// src/services/relatedArticles.ts
var RelatedArticlesService = class {
  /**
   * Creates an article in the Related Articles service.
   *
   * @param article - The article to create.
   * @returns A Promise that resolves to the response from the server.
   */
  async createArticle(article) {
    const response = await s360AxiosClient.post(
      "/related-articles-service/private/v1/articles",
      article
    );
    return response.data;
  }
  async createPostProcessedArticle(article, version = "v1") {
    const response = await s360AxiosClient.post(
      `/related-articles-service/private/${version}/articles-post-processed`,
      article
    );
    return response.data;
  }
  /**
   * Fetches an article by its ID from the related articles service.
   *
   * @param {string} articleId - The unique identifier of the article to fetch.
   * @returns {Promise<string>} - A promise that resolves to the article content as a string.
   */
  async getArticle(articleId) {
    const response = await s360AxiosClient.get(
      `/related-articles-service/private/v1/articles/${articleId}`
    );
    return response.data;
  }
};

// src/services/search.ts
var isNCXObjectTypeContact = (value) => {
  const castedValue = value;
  return Boolean(castedValue["contactId"]) && castedValue["objectType"] === "contact";
};
var DEFAULT_API_LIMIT = 10;
var MAX_RESULTS = 10;
var SearchService = class _SearchService {
  stateService;
  logger;
  constructor({
    loggerService,
    stateService
  }) {
    this.stateService = stateService;
    this.logger = loggerService;
  }
  /**
   * Performs a search based on the provided search options.
   *
   * @param {SearchOptions} options - The search options.
   * @returns {Promise<SearchResponseBody>} - A promise that resolves to the search response body.
   */
  async search(options) {
    this.logger.debug("SearchService - search - invoked with payload:", options);
    const params = this.transformSearchParams(options);
    const response = await axiosInstance.get("data/api/search", {
      params,
      paramsSerializer: {
        indexes: null
      }
    });
    return response.data;
  }
  transformSearchParams(options) {
    const { orderBy, ...rest } = options;
    return {
      ...rest,
      orderBy: orderBy && `${orderBy.property} ${orderBy.order}`
    };
  }
  /**
   * Retrieves search suggestions.
   * @returns A promise that resolves to the search suggestions.
   */
  async suggestions() {
    this.logger.trace("SearchService - suggestions");
    const response = await axiosInstance.get("data/api/search/suggestions");
    return response.data;
  }
  async quickSearch(params) {
    this.logger.debug("SearchService - quickSearch - invoked with payload:", params);
    const response = await axiosInstance.get("data/api/quicksearch", {
      params,
      paramsSerializer: {
        indexes: null
      }
    });
    return response.data;
  }
  /**
   * Uses SearchService to search for contacts and filters users from local memory to
   * deliver a combined list of contacts and users matching the provided filter
   *
   * @param payload
   * @param payload.apiLimit - The maximum number of Contact rows to return from the Search API.
   * @param payload.maxSize - The maximum number of combined results to return. The result may have less rows than the max size, depending on the search criteria and API limit.
   * @param payload.q - Query string to search for contacts and filter users.
   * @returns A combined list of contacts and users matching the provided query.
   */
  async quickSearchUsersAndContacts(payload) {
    this.logger.debug(
      "SearchService - quickSearchUsersAndContacts - invoked with payload:",
      payload
    );
    const searchResponse = await this.search({
      pageSize: payload.apiLimit ?? DEFAULT_API_LIMIT,
      q: payload.q,
      start: 0,
      type: "contact"
    });
    const searchTerm = payload.q.toLowerCase();
    const contacts = searchResponse.objects?.filter(
      (item) => isNCXObjectTypeContact(item) && (Boolean(item.name) && item.name.toLowerCase().includes(searchTerm) || Boolean(item.firstName) && item.firstName.toLowerCase().includes(searchTerm) || Boolean(item.lastName) && item.lastName.toLowerCase().includes(searchTerm) || Boolean(
        item.connections?.some(
          (connection) => Boolean(connection.value) && connection.value.toLowerCase().includes(searchTerm)
        )
      ) || Boolean(item.phone?.includes(searchTerm)) || Boolean(item.mobile?.includes(searchTerm)) || Boolean(item.email?.toLowerCase().includes(searchTerm)))
    ) ?? [];
    let users;
    try {
      users = this.stateService.getUsers()?.filter((user) => {
        const validUser = !user.hideInCompanyDirectory && (user.dnis || user.extension || user.username);
        if (!validUser) {
          return false;
        }
        const containsSearchTerm = Boolean(user.name) && user.name.toLowerCase().includes(searchTerm) || Boolean(user.firstName) && user.firstName.toLowerCase().includes(searchTerm) || Boolean(user.lastName) && user.lastName.toLowerCase().includes(searchTerm) || Boolean(user.dnis) && user.dnis.toLowerCase().includes(searchTerm) || Boolean(user.extension) && user.extension.toLowerCase().includes(searchTerm) || Boolean(user.username) && user.username.toLowerCase().includes(searchTerm);
        return containsSearchTerm;
      }) ?? [];
    } catch (error) {
      users = [];
    }
    return [...contacts, ...users].sort((a, b) => {
      const aCompare = a.name?.length ? a.name : (a.firstName ?? "") + (a.lastName ?? "");
      const bCompare = b.name?.length ? b.name : (b.firstName ?? "") + (b.lastName ?? "");
      return aCompare.localeCompare(bCompare);
    }).slice(0, payload.maxSize ?? MAX_RESULTS);
  }
  /**
   * Executes agentic search constrained to a single collection.
   *
   * @param params - Request options
   * @param params.q - Query string for lexical/semantic search
   * @param params.alpha - Optional blend factor for semantic vs lexical scoring (inclusive 0-1)
   * @param params.pageSize - Number of results to return per page
   * @param params.start - Pagination offset
   * @param params.type - The collection to search within
   * @returns SearchResponseBody with results for the specified collection
   */
  async agenticSearch(params) {
    this.logger.debug("SearchService - agenticSearch - invoked with payload:", params);
    const response = await axiosInstance.get(
      "global-search-poc/api/v1/search",
      {
        params,
        paramsSerializer: {
          indexes: null
        }
      }
    );
    return response.data;
  }
  // ============================================
  // V2 Search (Nexar Global Search)
  // ============================================
  static V2_BASE = "cxfabric/api/v2/search";
  /**
   * Opens an SSE stream for typed-query search.
   * Returns an RxJS Observable that emits raw SSE events.
   * Consumer is responsible for parsing `event.data` as JSON.
   *
   * @param options - Search query and options
   * @param signal - Optional AbortSignal for cancellation
   * @returns Observable of SSE events (results, done, recent_searches, error)
   */
  searchStream(options, signal) {
    this.logger.info("SearchService - searchStream", options);
    const {
      alpha = 0.5,
      pageSize = 5,
      q,
      save = true,
      type: types
    } = options;
    const params = {
      alpha,
      pageSize,
      q,
      save
    };
    if (types && types.length > 0) {
      params["type[]"] = types;
    }
    return createSseStream(`${_SearchService.V2_BASE}/stream`, {
      params,
      signal
    });
  }
  /**
   * Fetches "Needs Attention" items for the default dropdown (empty query).
   */
  async fetchAttention() {
    this.logger.trace("SearchService - fetchAttention");
    const response = await axiosInstance.get(
      `${_SearchService.V2_BASE}/attention`
    );
    return response.data;
  }
  /**
   * Fetches recent searches for the current user.
   */
  async fetchRecentSearches() {
    this.logger.trace("SearchService - fetchRecentSearches");
    const response = await axiosInstance.get(
      `${_SearchService.V2_BASE}/recent`
    );
    return response.data;
  }
  /**
   * Clears all recent searches for the current user.
   */
  async clearRecentSearches() {
    this.logger.trace("SearchService - clearRecentSearches");
    await axiosInstance.delete(`${_SearchService.V2_BASE}/recent`);
  }
  /**
   * Submits thumbs up/down feedback for a search session.
   */
  async submitSearchFeedback(payload) {
    this.logger.debug("SearchService - submitSearchFeedback", payload);
    const response = await axiosInstance.post(
      `${_SearchService.V2_BASE}/feedback`,
      payload
    );
    return response.data;
  }
};

// src/utils/sysadminRoles.ts
var V2_SYSADMIN_ROLES = [
  "sysadmin",
  "service_delivery",
  "sro",
  "billing",
  "support",
  "support_management",
  "asr"
];
var v2SysadminRoleSet = new Set(V2_SYSADMIN_ROLES);
var isV2SysadminRole = (role) => typeof role === "string" && v2SysadminRoleSet.has(role);

// src/services/state.ts
var PERMISSIONS = {
  ALL: "*",
  CREATE: "create",
  DELETE: "delete",
  HIDDEN: "hidden",
  HIDE: "hide",
  IMPORT: "import",
  LISTEN: "listen",
  LISTEN_MINE: "listen-mine",
  SEARCH: "search",
  SHOW: "show",
  UPDATE: "update",
  UPDATE_MINE: "update-mine",
  VIEW: "view",
  VIEW_MINE: "view-mine"
};
var KEEP_FIELDS = ["platform", "language", "baseURL", "translationBundles"];
var StateService = class {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _state = /* @__PURE__ */ new Map();
  clear() {
    const keepEntries = KEEP_FIELDS.map((key) => {
      const value = this._state.get(key);
      if (value) {
        return [key, this._state.get(key)];
      }
      return void 0;
    }).filter((entry) => entry !== void 0);
    this._state.clear();
    this._state = new Map(keepEntries);
  }
  get(key) {
    return this._state.get(key);
  }
  delete(key) {
    this._state.delete(key);
  }
  set(key, value) {
    this._state.set(key, value);
  }
  getMap() {
    return this._state;
  }
  /**
   * The function `getTelephonyConfig` returns the telephony configuration from the current session.
   * @returns The `telephony` configuration from the current session is being returned.
   */
  getTelephonyConfig() {
    const multiloginDevice = this.getDevice();
    const session = this.getSession();
    const telephonyConfig = multiloginDevice?.telephony ?? session?.telephony;
    return telephonyConfig;
  }
  /**
   * The function `getLanguage` returns the language stored in the data object, defaulting to 'en' if not
   * found.
   * @returns The `getLanguage` method is returning the value of the 'language' key from the `data`
   * object, or 'en' if the 'language' key is not found in the `data` object.
   */
  getLanguage() {
    return this._state.get("language") || "en";
  }
  /**
   * Sets the language for the application.
   * @param language - The language to set.
   */
  setLanguage(language) {
    this._state.set("language", language);
  }
  getPlatform() {
    return this._state.get("platform");
  }
  setPlatform(platform) {
    this._state.set("platform", platform);
  }
  /**
   * Retrieves the token from the state.
   * @returns The token as a string.
   */
  getToken() {
    return this._state.get("token");
  }
  setToken(token) {
    this._state.set("token", token);
  }
  /**
   * Retrieves the User Socket State from the state.
   * @returns The socket state as enum or undefined.
   */
  getUserSocketState() {
    return this._state.get("UserSocketState");
  }
  setUserSocketState(socketState) {
    this._state.set("UserSocketState", socketState);
  }
  /**
   * This TypeScript function retrieves the user ID from a session object stored in the data property.
   * @returns The `getUserId` method is returning the `userId` property from the `session` object if it
   * exists, otherwise it returns `null`.
   */
  getUserId() {
    const session = this.getSession();
    return session?.userId;
  }
  /**
   * The function `getTenant` returns the value associated with the key 'tenant' from the data object.
   * @returns The `getTenant` method is returning the value of the 'tenant' key from the `data` object.
   */
  getTenant() {
    return queryClient.getQueryData(["static", "tenant"]);
  }
  /*
  setTenant(tenant: Tenant) {
    this._state.set('tenant', tenant);
  }
  */
  /**
   * The function `getTenantId` retrieves the tenant ID from a session object, returning null if the
   * tenant ID is not found.
   * @returns The `getTenantId` method is returning the `tenantId` property from the `session` object if
   * it exists, otherwise it will return `null`.
   */
  getTenantId() {
    const session = this.getSession();
    return session?.tenantId;
  }
  /**
   * The `getSession` function returns the UserSession stored in the data map.
   * @returns The `getSession()` method is returning the `UserSession` object stored in the data map with
   * the key 'session'.
   */
  getSession() {
    return this._state.get("session");
  }
  setSession(session) {
    this._state.set("session", session);
  }
  getUser(options) {
    if (options?.id) {
      return this.getUsers()?.find((user) => user.userId === options.id);
    }
    return queryClient.getQueryData(["static", "user"]);
  }
  getPersonalInboxId() {
    return this.getUser()?.personalInboxCampaignId;
  }
  getPersonalInboxNumber() {
    const session = this.getSession();
    if (session?.personalInboxNumber) {
      return session.personalInboxNumber;
    }
    const personalInboxCampaignId = this.getUser()?.personalInboxCampaignId;
    if (personalInboxCampaignId) {
      const addresses = this.getPersonalInbox()?.addresses;
      if (addresses && addresses.length > 0) {
        return addresses[0];
      }
    }
    return null;
  }
  /*
    setUser(user: UserDetails) {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- Apparently it can be undefined
      if (!user.settings) {
        user.settings = {};
      }
  
      this._state.set('user', { ...this.getUser(), ...user });
    }
    */
  /**
   * The function `getUserProfile` returns the user profile data stored in the `data` object.
   * @returns The `getUserProfile()` method is returning the `UserProfile` object stored in the data map
   * with the key 'userprofile'.
   */
  getUserProfile() {
    return queryClient.getQueryData(["static", "userprofile"]);
  }
  /*
  setUserProfile(userProfile: UserProfile) {
    this._state.set('userprofile', userProfile);
  }
  */
  /**
   * This function retrieves the user profile ID from the session data.
   * @returns The `userProfileId` from the `session` object is being returned.
   */
  getUserProfileId() {
    const session = this.getSession();
    return session?.userProfileId;
  }
  /**
   * The function `getUserSettings` returns the user client settings from the data or null if not found.
   * @returns The `getUserSettings` method is returning the `UserClientSettings` object stored in the
   * `data` map with the key 'userclientsettings'. If the object is not found, it will return `null`.
   */
  getUserSettings() {
    return this.getUser()?.settings;
  }
  /**
   * The function `hasClientTracing` returns a boolean value based on whether client tracing is allowed
   * for the user.
   * @returns A boolean value is being returned.
   */
  hasClientTracing() {
    return (this._state.get("allowClientTracing") || this.getUser()?.allowClientTracing) ?? false;
  }
  /**
   * Sets the value of allowClientTracing in the state.
   *
   * @param allowClientTracing - A boolean indicating whether client tracing is allowed.
   */
  setClientTracing(allowClientTracing) {
    this._state.set("allowClientTracing", allowClientTracing);
  }
  /**
   * Sets the offers in the state.
   * @param {Offer[]} offers - The offers to be set.
   */
  setOffers(offers) {
    this._state.set("offers", offers);
  }
  /**
   * Retrieves the offers from the state.
   * @returns An array of offers or undefined if not found.
   */
  getOffers() {
    return this._state.get("offers");
  }
  getTopics() {
    const queryData = queryClient.getQueryData(
      getCompanyDirectoryQueryOptions().queryKey
    );
    return queryData?.topics;
  }
  setTopics(topics) {
    this._state.set("topics", topics);
  }
  getInboxes() {
    const queryData = queryClient.getQueryData(
      getCompanyDirectoryQueryOptions().queryKey
    );
    return queryData?.queues;
  }
  getInbox({ id: id2 }) {
    return this.getInboxes()?.find((inbox) => inbox._id === id2);
  }
  /*
  setInboxes(inboxes: RealTimeInbox[]) {
    this._state.set('inboxes', inboxes);
  }
  */
  getUsers() {
    const queryData = queryClient.getQueryData(
      getCompanyDirectoryQueryOptions().queryKey
    );
    return queryData?.users;
  }
  /*
  setUsers(users: RealTimeUser[]) {
    this._state.set('users', users);
  }
  */
  /**
   * gets internal user messages
   * @returns
   */
  getUserMessages(options) {
    let messages = this._state.get("userMessages");
    if (options?.userId) {
      messages = messages?.filter((message) => {
        return message.toId === options.userId || message.fromId === options.userId;
      });
    }
    return messages;
  }
  /**
   * sets internal user messages
   * @param {Message[]} userMessages - the messages being set
   */
  setUserMessages(userMessages) {
    this._state.set("userMessages", userMessages);
  }
  /**
   * Retrieves the base URL from the state.
   *
   * @returns The base URL as a string.
   */
  getBaseURL() {
    return this._state.get("baseURL");
  }
  /**
   * Sets the base URL for the service.
   * @param baseURL - The base URL to set.
   */
  setBaseURL(baseURL) {
    this._state.set("baseURL", baseURL);
  }
  getDeviceToken() {
    return this._state.get("deviceToken");
  }
  setDeviceToken(token) {
    this._state.set("deviceToken", token);
  }
  /**
   * Retrieves the client location from the state.
   * @returns The client location as a string.
   */
  getClientLocation() {
    return this._state.get("clientLocation");
  }
  /**
   * Sets the client location.
   *
   * @param clientLocation - The client location to set.
   */
  setClientLocation(clientLocation) {
    this._state.set("clientLocation", clientLocation);
  }
  /**
   * Retrieves a user object from the company directory based on the provided user ID.
   * @param userId - The ID of the user to retrieve.
   * @returns The user object matching the provided user ID, or undefined if not found.
   */
  getUserFromId(userId) {
    return this.getUsers()?.find((user) => user.userId === userId);
  }
  /**
   * Retrieves all AI employees from the cache.
   * AI employees are cached and loaded during SDK initialization.
   * @returns An array of AI employees or undefined if not loaded.
   */
  getAIEmployees() {
    const queryData = queryClient.getQueryData(
      getAIEmployeesQueryOptions().queryKey
    );
    return queryData?.employees;
  }
  /**
   * Retrieves a specific AI employee by ID.
   * @param aiEmployeeId - The ID of the AI employee to retrieve.
   * @returns The AI employee object if found, otherwise undefined.
   */
  getAIEmployeeFromId(aiEmployeeId) {
    return this.getAIEmployees()?.find((employee) => employee.aiemployeeId === aiEmployeeId);
  }
  /**
   * Retrieves a queue from the company directory based on the provided queue ID.
   * @param {string} queueId - The ID of the queue to retrieve.
   * @returns {Queue | undefined} - The queue object if found, otherwise undefined.
   */
  getInboxFromId(inboxId) {
    return this.getInboxes()?.find((inbox) => inbox.queueId === inboxId);
  }
  /**
   * Retrieves a topic from the company directory based on its ID.
   * @param topicId - The ID of the topic to retrieve.
   * @returns The topic object if found, otherwise undefined.
   */
  getTopicFromId(topicId) {
    return this.getTopics()?.find((topic) => topic.topicId === topicId);
  }
  /**
   * Retrieves the user status record from the state.
   * @returns The user status record.
   */
  getUserStatusRecord() {
    return this._state.get("userStatusRecord");
  }
  /**
   * Sets the user status record.
   *
   * @param record - The user status record to set.
   */
  setUserStatusRecord(record) {
    this._state.set("userStatusRecord", record);
  }
  /**
   * Retrieves the authorities from the state.
   * @returns An array of authorities or undefined if not found.
   */
  getAuthorities() {
    return this._state.get("authorities");
  }
  /**
   * Sets the authorities in the state.
   * @param authorities - The array of authorities to set.
   */
  setAuthorities(authorities) {
    this._state.set("authorities", authorities);
  }
  /**
   * Checks if the user has the specified permission for the given domain and type.
   * @param domain - The domain to check permission for.
   * @param type - The type to check permission for.
   * @param permission - The permission to check.
   * @returns A boolean indicating whether the user has the specified permission.
   */
  hasPermission(domain, type, permission) {
    const authorities = this.getAuthorities();
    if (!authorities) {
      return false;
    }
    const subdomainFilter = domain === "type" ? `type.${type}` : null;
    const matchingAuthorities = authorities.filter(
      (authority) => authority.domain.includes(domain) && (authority.entity.includes(type) || authority.entity.includes("*")) || Boolean(subdomainFilter && authority.domain.includes(subdomainFilter)) || authority.domain.includes("*")
    );
    let hasPermission = false;
    if (matchingAuthorities.length > 0) {
      hasPermission = matchingAuthorities.some(
        (authority) => authority.values.includes("*") || authority.values.includes(permission)
      );
    }
    return hasPermission || domain === "ui" && permission === PERMISSIONS.SHOW;
  }
  /**
   * The function `canCreate` checks if a user has permission to create a specific type.
   * @param {string} type - The `type` parameter in the `canCreate` function represents the type of
   * entity or resource for which the permission check is being performed. It could be a string value
   * such as 'user', 'post', 'comment', etc.
   * @returns The function `canCreate` is returning a boolean value based on whether the current user
   * has permission to create an object of the specified type.
   */
  canCreate(type) {
    return this.hasPermission("type", type, PERMISSIONS.CREATE);
  }
  /**
   * The function `canDelete` checks if the user has permission to delete a specific type of item.
   * @param {string} type - The `type` parameter in the `canDelete` function represents the type of
   * entity or resource for which the delete permission is being checked. It is a string value that
   * specifies the type of the entity, such as "user", "post", "comment", etc.
   * @returns The `canDelete` function is returning the result of calling the `hasPermission`
   * function with the parameters `'type'`, `type`, and `PERMISSIONS.DELETE`. The return value of the
   * `hasPermission` function is a boolean, so the `canDelete` function will also return a boolean
   * value.
   */
  canDelete(type) {
    return this.hasPermission("type", type, PERMISSIONS.DELETE);
  }
  /**
   * The function `canImport` checks if the user has permission to import a specific type of item.
   * @param {string} type - The `type` parameter in the `canImport` function represents the type of
   * entity or resource for which the import permission is being checked. It is a string value that
   * specifies the type of the entity, such as "user", "contact" etc.
   * @returns The `canImport` function is returning the result of calling the `hasPermission`
   * function with the parameters `'type'`, `type`, and `PERMISSIONS.IMPORT`. The return value of the
   * `hasPermission` function is a boolean, so the `canImport` function will also return a boolean
   * value.
   */
  canImport(type) {
    return this.hasPermission("type", type, PERMISSIONS.IMPORT);
  }
  /**
   * The function `canListen` checks if a user has permission to listen based on the specified type.
   * @param {string} type - The `type` parameter in the `canListen` function represents the type of
   * action or resource for which the permission is being checked. It is used to determine if the
   * user has permission to listen to a specific type of action or resource.
   * @returns A boolean value is being returned.
   */
  canListen(type) {
    return this.hasPermission("type", type, PERMISSIONS.LISTEN);
  }
  /**
   * The function `canListenMine` checks if a user has permission to listen to a specific type.
   * @param {string} type - The `type` parameter in the `canListenMine` function is a string that
   * represents the type of permission being checked.
   * @returns The function `canListenMine` is returning a boolean value based on whether the current
   * user has permission to listen to a specific type. It checks if the user has the permission
   * `LISTEN_MINE` for the given type and returns true if the user has the permission, otherwise it
   * returns false.
   */
  canListenMine(type) {
    return this.hasPermission("type", type, PERMISSIONS.LISTEN_MINE);
  }
  /**
   * The function `canSearch` checks if a user has permission to search based on the specified type.
   * @param {string} type - The `type` parameter in the `canSearch` function represents the type of
   * search operation that the user is trying to perform. It is a string value that specifies the
   * type of search being requested, such as "user", "product", "document", etc.
   * @returns A boolean value is being returned from the `canSearch` function.
   */
  canSearch(type) {
    return this.hasPermission("type", type, PERMISSIONS.SEARCH);
  }
  /**
   * The `canShow` function checks if the user has permission to show a specific type of UI element.
   * @param {string} type - The `type` parameter in the `canShow` function is a string that
   * represents the type of UI element or resource for which the permission check is being performed.
   * @returns A boolean value is being returned from the `canShow` function.
   */
  canShow(type) {
    return this.hasPermission("ui", type, PERMISSIONS.SHOW);
  }
  /**
   * The function `canUpdate` checks if the user has permission to update a specific type.
   * @param {string} type - The `type` parameter in the `canUpdate` function represents the type of
   * resource or entity that the user is trying to update. This parameter is used to check if the
   * user has permission to update that specific type of resource.
   * @returns A boolean value is being returned from the `canUpdate` function.
   */
  canUpdate(type) {
    return this.hasPermission("type", type, PERMISSIONS.UPDATE);
  }
  /**
   * The function `canUpdateMine` checks if the user has permission to update a specific type.
   * @param {string} type - The `type` parameter in the `canUpdateMine` function is a string that
   * represents the type of permission being checked for.
   * @returns The `canUpdateMine` method is returning the result of calling the `hasPermission`
   * method with the parameters `'type'`, `type`, and `PERMISSIONS.UPDATE_MINE`. The return value of
   * the `hasPermission` method will determine the final boolean value returned by the
   * `canUpdateMine` method.
   */
  canUpdateMine(type) {
    return this.hasPermission("type", type, PERMISSIONS.UPDATE_MINE);
  }
  /**
   * The function `canView` checks if a user has permission to view a specific type.
   * @param {string} type - The `type` parameter in the `canView` function represents the type of
   * resource or entity that the user is trying to view. It is used to check if the user has permission
   * to view that particular type of resource.
   * @returns The `canView` function is returning a boolean value based on whether the current user has
   * permission to view the specified type. It calls the `hasPermission` function with the parameters
   * 'type', the specified type, and the permission level `PERMISSIONS.VIEW`. If the user has permission
   * to view the specified type, it will return `true`, otherwise it will return `false`.
   */
  canView(type) {
    return this.hasPermission("type", type, PERMISSIONS.VIEW);
  }
  /**
   * The function `canViewMine` checks if a user has permission to view their own data of a specific
   * type.
   * @param {string} type - The `type` parameter in the `canViewMine` function represents the type of
   * resource or entity that the user is trying to view. This parameter is used to check if the user
   * has permission to view resources of this specific type.
   * @returns The function `canViewMine` is returning the result of calling the `hasPermission`
   * function with the parameters `'type'`, `type`, and `PERMISSIONS.VIEW_MINE`.
   */
  canViewMine(type) {
    return this.hasPermission("type", type, PERMISSIONS.VIEW_MINE);
  }
  /**
   * This function returns an array of languages from the data.
   * @returns An array of Language objects is being returned.
   */
  getLanguages() {
    return queryClient.getQueryData(getStaticDataQueryOptions("language").queryKey);
  }
  /**
   * Sets the languages in the state.
   * @param languages - An array of Language objects representing the languages to be set.
   */
  /*
  setLanguages(languages: Language[]) {
    this._state.set('languages', languages);
  }
  */
  /**
   * The function `getName` retrieves the user's name from a session object, defaulting to 'System
   * Administrator' if the user is a system admin or 'N/A' if no name is found.
   * @returns The `getName` function is returning the name of the user. The name is constructed based on
   * the `session` data, where it first tries to concatenate the `firstName` twice, then falls back to
   * the `username`, and finally defaults to 'System Administrator' if the user is a system admin or
   * 'N/A' otherwise.
   */
  getName() {
    const session = this.getSession();
    const naName = "N/A";
    if (session) {
      const fullName = `${session.firstName ? session.firstName : ""}${session.firstName && session.lastName ? ` ${session.lastName}` : ""}`;
      const username = session.username || "";
      if (fullName.length) {
        return fullName;
      }
      if (username.length) {
        return username;
      }
      if (this.isSysAdmin()) {
        return "System Administrator";
      }
      return naName;
    } else {
      return naName;
    }
  }
  /**
   * This TypeScript function retrieves the username from a session object stored in the data property.
   * @returns The `getUsername` method is returning the `username` property from the `session` object
   * stored in the `data` map.
   */
  getUsername() {
    return this.getSession()?.username;
  }
  /**
   * Checks if the current user is a system administrator.
   * @returns {boolean} Returns true if the user is a system administrator, false otherwise.
   */
  isSysAdmin() {
    return isV2SysadminRole(this.getSession()?.role);
  }
  /**
   * Checks if the current session belongs to the system tenant.
   * @returns {boolean} Returns true if the current session belongs to the system tenant, otherwise returns false.
   */
  isSysTenant() {
    return this.getSession()?.tenantId === "provider";
  }
  /**
   * Checks if the user is an agent.
   * @returns {boolean} Returns true if the user is an agent, false otherwise.
   */
  isAgent() {
    return !this.isSysAdmin();
  }
  /**
   * The function `getEdgeId` returns the edgeId property from the user object or user profile object,
   * or null if not found.
   * @returns The `getEdgeId` method is returning the `edgeId` property from the `User` object if it
   * exists, otherwise it returns the `edgeId` property from the `UserProfile` object if it exists, or
   * `null` if neither `edgeId` property is found.
   */
  getEdgeId() {
    return this.getUser()?.edgeId ?? this.getUserProfile()?.edgeId ?? null;
  }
  /**
   * Checks if the user has auto login enabled for ACD (Automatic Call Distributor).
   * @returns {boolean} True if auto login to ACD is enabled, false otherwise.
   */
  hasAutoLoginToACD() {
    return this.getUser()?.acdAutoLogin ?? false;
  }
  /**
   * Retrieves the statuses from the state.
   *
   * @returns An array of `Status` objects or `undefined` if not found.
   */
  getStatuses() {
    return queryClient.getQueryData(getStaticDataQueryOptions("status").queryKey);
  }
  setStatuses(statuses) {
    return this._state.set("statuses", statuses);
  }
  /**
   * Retrieves the status with the specified statusId.
   * @param statusId - The ID of the status to retrieve.
   * @returns The status object with the specified statusId, or undefined if not found.
   */
  getStatus(statusId) {
    return this.getStatuses()?.find(
      (status) => status._id === statusId || status.statusId === statusId
    );
  }
  /**
   * Retrieves the name of a status based on its ID.
   * If the status is found, the name is returned.
   * If the status is not found, an "Unknown Status" message with the ID is returned.
   * If an error occurs during the retrieval, an "Unknown Status" message with the ID is returned.
   *
   * @param statusId - The ID of the status.
   * @returns The name of the status if found, otherwise an "Unknown Status" message with the ID.
   */
  getStatusName(statusId) {
    try {
      return this.getStatus(statusId)?.name ?? `Unknown Status ${statusId}`;
    } catch (error) {
      return `Unknown Status ${statusId}`;
    }
  }
  /*
  setSchemaTypeMap(map: Map<string, ISchemaType>) {
    this._state.set('schemaTypeMap', map);
  }
  */
  getSchemaTypeMap() {
    let map = /* @__PURE__ */ new Map();
    const schemaTypes2 = this.getSchemaTypes();
    if (schemaTypes2) {
      map = new Map(schemaTypes2.map((type) => [type.name, type]));
    }
    return map;
  }
  /*
  setSchemaLayoutMap(map: Map<string, SchemaLayout>) {
    this._state.set('schemaLayoutMap', map);
  }
  */
  getSchemaLayoutMap() {
    let map = /* @__PURE__ */ new Map();
    const schemaLayouts2 = this.getSchemaLayouts();
    if (schemaLayouts2) {
      map = new Map(schemaLayouts2.map((layout) => [layout.name, layout]));
    }
    return map;
  }
  /**
   * This function returns the schema types stored in the data object.
   * @returns The `getSchemaTypes` method is returning the value stored in the `schemaType` property of
   * the `data` object.
   */
  getSchemaTypes() {
    return queryClient.getQueryData(
      getStaticDataQueryOptions("schematype").queryKey
    );
  }
  /**
   * Retrieves the schema type with the specified name.
   * @param schemaTypeName - The name of the schema type to retrieve.
   * @returns The schema type object if found, or undefined if not found.
   */
  getSchemaType(schemaTypeName) {
    return this.getSchemaTypes()?.find((schemaType) => schemaType.name === schemaTypeName);
  }
  /**
   * Retrieves the links associated with a specific schema type.
   * @param schemaTypeName - The name of the schema type.
   * @returns The links associated with the specified schema type, or undefined if the schema type does not exist.
   */
  getSchemaTypeLinks(schemaTypeName) {
    return this.getSchemaType(schemaTypeName)?.links;
  }
  /**
   * Retrieves the URI of a specific link for a given schema type.
   * @param name - The name of the schema type.
   * @param linkName - The name of the link.
   * @returns The URI of the specified link.
   * @throws Error if the specified link is not found for the given schema type.
   * @deprecated getSchemaTypeLinkURI() is deprecated, use sdk.getSchemaTypeClient() instead
   */
  getSchemaTypeLinkURI({ link, name, replacements }) {
    const links = this.getSchemaTypeLinks(name);
    const uri = links?.[link]?.uri;
    if (!uri) {
      throw new Error(`Expected to find ${link} for the ${name} schema type`);
    }
    if (replacements) {
      let newURI = uri;
      Object.entries(replacements).forEach(([path, value]) => {
        newURI = newURI.replace(`{{${path}}}`, value);
      });
      return newURI;
    }
    return uri;
  }
  /**
   * Retrieves the schema type model with the specified schema type ID.
   * @param schemaTypeId - The ID of the schema type to retrieve.
   * @returns The schema type model matching the specified ID, or undefined if not found.
   */
  getSchemaTypeModel(schemaTypeId) {
    return this.getSchemaTypes()?.find((schemaType) => schemaType._id === schemaTypeId);
  }
  /**
   * Retrieves the schema type model by its name.
   * @param schemaTypeName - The name of the schema type.
   * @returns The schema type model matching the given name, or undefined if not found.
   */
  getSchemaTypeModelByName(schemaTypeName) {
    return this.getSchemaTypes()?.find((schemaType) => schemaType.name === schemaTypeName);
  }
  /**
   * Retrieves the campaigns from the state.
   * @returns An array of campaigns or undefined if not found.
   */
  getCampaigns() {
    return queryClient.getQueryData(getStaticDataQueryOptions("campaign").queryKey);
  }
  /*
  public setCampaigns(campaigns: Campaign[]) {
    return this._state.set('campaigns', campaigns);
  }
  */
  /**
   * Retrieves the share inboxes from the state.
   * @returns An array of campaigns or undefined if not found.
   */
  getSharedInboxes(types) {
    let campaigns = (this.getCampaigns() ?? []).filter(
      (campaign) => campaign.type !== "PERSONAL"
    );
    (types ?? []).forEach((type) => {
      switch (type) {
        case "Email":
          campaigns = campaigns.filter((campaign) => campaign.useForEmail);
          break;
        case "Extension":
          campaigns = campaigns.filter((campaign) => campaign.useForExtension);
          break;
        case "Fax":
          campaigns = campaigns.filter((campaign) => campaign.useForFax);
          break;
        case "Outbound":
          campaigns = campaigns.filter((campaign) => campaign.useForOutbound);
          break;
        case "Predictive":
          campaigns = campaigns.filter((campaign) => campaign.useForPredictive);
          break;
        case "Progressive":
          campaigns = campaigns.filter((campaign) => campaign.useForProgressive);
          break;
        case "SMS":
          campaigns = campaigns.filter((campaign) => campaign.useForSMS);
          break;
      }
    });
    return campaigns;
  }
  /**
   * Retrieves the personal inboxes from the state.
   * @returns An array of campaigns or undefined if not found.
   */
  getPersonalInboxes() {
    return (this.getCampaigns() ?? []).filter((campaign) => campaign.type === "PERSONAL");
  }
  getPersonalInbox() {
    return (this.getCampaigns() ?? []).find(
      (campaign) => campaign._id === this.getPersonalInboxId()
    );
  }
  /**
   * Retrieves a campaign by its ID.
   * @param id - The ID of the campaign to retrieve.
   * @returns The campaign object if found, or undefined if not found.
   */
  getCampaign(id2) {
    return this.getCampaigns()?.find((campaign) => campaign._id === id2);
  }
  /**
   * Retrieves the campaign scripts from the state.
   * @returns An array of `CampaignScript` objects or `undefined` if not found.
   */
  getCampaignScripts() {
    return this._state.get("agentScripts");
  }
  /**
   * Sets the campaign scripts in the state.
   * @param campaignScripts - An array of campaign scripts.
   */
  setCampaignScripts(campaignScripts) {
    this._state.set("agentScripts", campaignScripts);
  }
  /**
   * Retrieves the surveys from the state.
   * @returns An array of Survey objects or undefined if surveys are not found.
   */
  getSurveys() {
    return this._state.get("surveys");
  }
  /**
   * Sets the surveys in the state.
   * @param surveys - An array of Survey objects.
   */
  setSurveys(surveys) {
    this._state.set("surveys", surveys);
  }
  /**
   * Retrieves the dispositions from the state.
   *
   * @returns An array of dispositions or undefined if not found.
   */
  getDispositions() {
    return queryClient.getQueryData(
      getStaticDataQueryOptions("disposition").queryKey
    );
  }
  getDisposition({ id: id2 }) {
    return this.getDispositions()?.find((disposition) => disposition._id === id2);
  }
  /**
   * Sets the dispositions in the state.
   * @param dispositions - An array of dispositions to be set.
   */
  /*
  public setDispositions(dispositions: Disposition[]) {
    this._state.set('disposition', dispositions);
  }
  */
  /**
   * Retrieves the compliance dispositions from the state.
   *
   * @returns An array of compliance dispositions, or undefined if not found.
   */
  getComplianceDispositions() {
    return this._state.get("compliance");
  }
  /**
   * Sets the compliance dispositions.
   *
   * @param complianceDispositions - An array of compliance dispositions.
   */
  setComplianceDispositions(complianceDispositions) {
    this._state.set("compliance", complianceDispositions);
  }
  /**
   * Retrieves the speed dials from the state.
   * @returns An array of speed dials or undefined if not found.
   */
  getSpeedDials() {
    return this._state.get("speeddial");
  }
  /**
   * Sets the speed dials in the state.
   *
   * @param speedDials - An array of speed dials to set.
   */
  setSpeedDials(speedDials) {
    this._state.set("speeddial", speedDials);
  }
  /**
   * Retrieves the templates from the state.
   * @returns An array of templates or undefined if not found.
   */
  getTemplates() {
    return this._state.get("templates");
  }
  /**
   * Sets the templates in the state.
   * @param templates - An array of templates to set.
   */
  setTemplates(templates) {
    this._state.set("templates", templates);
  }
  /**
   * Retrieves the classifications from the state.
   * @returns An array of classifications or undefined if not found.
   */
  getClassifications() {
    return this._state.get("classifications");
  }
  /**
   * Sets the classifications in the state.
   *
   * @param classifications - An array of classifications.
   */
  setClassifications(classifications) {
    this._state.set("classifications", classifications);
  }
  /**
   * Retrieves the scorecards from the state.
   * @returns An array of scorecards or undefined if not found.
   */
  getScoreCards() {
    return this._state.get("scorecards");
  }
  /**
   * Sets the scorecards in the state.
   *
   * @param scoreCards - An array of scorecards.
   */
  setScoreCards(scoreCards) {
    this._state.set("scorecards", scoreCards);
  }
  /**
   * Retrieves the schema layouts from the state.
   * @returns An array of `SchemaLayout` objects or `undefined` if not found.
   */
  getSchemaLayouts() {
    return queryClient.getQueryData(
      getStaticDataQueryOptions("schemalayout").queryKey
    );
  }
  /**
   * Sets the schema layouts for the state.
   *
   * @param schemaLayouts - An array of schema layouts to set.
   */
  /*
  setSchemaLayouts(schemaLayouts: SchemaLayout[]) {
    this._state.set('schemaLayout', schemaLayouts);
  }
  */
  /**
   * Retrieves the schema layout with the specified ID.
   * @param id - The ID of the schema layout to retrieve.
   * @returns The schema layout object matching the specified ID, or undefined if not found.
   */
  getSchemaLayout(id2) {
    return this.getSchemaLayouts()?.find((schemaLayout) => schemaLayout._id === id2);
  }
  /**
   * Retrieves the skills from the state.
   * @returns An array of skills or undefined if not found.
   */
  getSkills() {
    return this._state.get("skills");
  }
  /**
   * Sets the skills in the state.
   * @param skills - An array of skills to set.
   */
  setSkills(skills) {
    this._state.set("skills", skills);
  }
  /**
   * Retrieves the regexes from the state.
   * @returns An array of regexes or undefined if not found.
   */
  getRegexes() {
    return this._state.get("regex");
  }
  /**
   * Sets the regular expressions for the state.
   * @param regexes - An array of regular expressions.
   */
  setRegexes(regexes) {
    this._state.set("regex", regexes);
  }
  /**
   * Sets the outbound mode for the session if the SDK is
   * initialized. Otherwise does nothing.
   * @param outboundMode outbound mode identifier
   */
  setOutboundMode(outboundMode) {
    const session = this.getSession();
    if (session) {
      const newSession = {
        ...session,
        outboundMode
      };
      this.setSession(newSession);
      return newSession;
    }
    return void 0;
  }
  /**
   * Sets the multilogin current session's device.
   * @param device - Multilogin device
   */
  setDevice(device) {
    this._state.set("device", device);
  }
  /**
   *
   * Gets the multilogin current session's device.
   * @returns The current session's device.
   */
  getDevice() {
    return this._state.get("device");
  }
  /**
   *
   * Gets all the devices from the session.
   * @returns The list of session's devices.
   */
  getDevices() {
    return this.getSession()?.devices;
  }
  isLoggedIntoProgressive() {
    return this.getSession()?.outboundMode === OutboundModes.Progressive;
  }
  isLoggedIntoPredictive() {
    return this.getSession()?.outboundMode === OutboundModes.Predictive;
  }
  isLoggedIntoQuarterback() {
    return this.getSession()?.outboundMode === OutboundModes.Quarterback;
  }
  isWebRTCAllowed() {
    const isWebRTCAllowed = this._state.get("isWebRTCAllowed");
    if (isWebRTCAllowed === void 0) {
      return true;
    }
    return isWebRTCAllowed;
  }
  setWebRTCAllowed(isWebRTCAllowed) {
    this._state.set("isWebRTCAllowed", isWebRTCAllowed);
  }
  isInConference() {
    return this._state.get("isInConference") ?? false;
  }
  setInConference(isInConference) {
    this._state.set("isInConference", isInConference);
  }
  getTranslations(language) {
    const map = this._state.get("translationBundles");
    if (map) {
      return map.get(language);
    }
    return void 0;
  }
  setTranslations(language, translations) {
    let map = this._state.get("translationBundles");
    if (!map) {
      map = /* @__PURE__ */ new Map();
    }
    map.set(language, translations);
    this._state.set("translationBundles", map);
  }
  /**
   * This TypeScript function returns the value of `acdLoginAt`.
   * @returns The `acdLoginAt` property is being returned from the `getACDLoginAt` method.
   */
  getACDLoginAt() {
    const session = this.getSession();
    if (session) {
      return session.acdLoginAt > 0 ? session.acdLoginAt : 0;
    }
    return 0;
  }
  /**
   * This will check if ACD Logged in is done or not.
   * @returns boolean based on acdLogin timestamp availiable or not.
   */
  isLoggedInToACD() {
    return this.getACDLoginAt() > 0;
  }
  /**
   * Sets the acdLoginAt for the session if the SDK is
   * initialized. Otherwise does nothing.
   * @param acdLoginAt acd login timestamp or 0 in case logged out
   */
  setACDLoggedInAt(acdLoginAt) {
    const session = this.getSession();
    if (session) {
      const newSession = {
        ...session,
        acdLoginAt
      };
      this.setSession(newSession);
      return newSession;
    }
    return void 0;
  }
  getDomainEnvironment() {
    const session = this.getSession();
    const device = this.getDevice();
    if (!session && !device) {
      return void 0;
    }
    return Boolean(session?.devices) || Boolean(device) ? "ncx" : "ncc";
  }
  /**
   * Stores the user entitlements set in state.
   *
   * @param entitlements - An array of entitlements to set.
   */
  setUserEntitlements(entitlements) {
    this._state.set("userEntitlements", entitlements);
  }
  /**
   * Retrieves the user entitlements set from state.
   *
   * @returns An array of entitlements or undefined if not found.
   */
  getUserEntitlements() {
    return this._state.get("userEntitlements");
  }
  /**
   * Stores the tenant entitlements set in state.
   */
  setTenantEntitlements(entitlements) {
    this._state.set("tenantEntitlements", entitlements);
  }
  /**
   * Retrieves the tenant entitlements set from state.
   */
  getTenantEntitlements() {
    return this._state.get("tenantEntitlements");
  }
  setConversationCacheLimit({
    conversations,
    workitems
  }) {
    this._state.set("conversationCacheLimit", { conversations, workitems });
  }
  getConversationsCacheLimit() {
    const limit = this._state.get("conversationCacheLimit");
    if (!limit) {
      const defaultLimit = { conversations: 20, workitems: 25 };
      this.setConversationCacheLimit({ conversations: 20, workitems: 25 });
      return defaultLimit;
    }
    return limit;
  }
  setIsTelephonyInitialized(initialized) {
    this._state.set("isTelephonyInitialized", initialized);
  }
  isTelephonyInitialized() {
    return this._state.get("isTelephonyInitialized") ?? false;
  }
};

// src/services/statistics.ts
var StatisticsService = class {
  eventsService;
  stateService;
  logger;
  isSocketStarted = false;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.eventsService = eventsService;
    this.stateService = stateService;
    this.logger = loggerService;
    this.handleSupervisorStatsNotification();
    this.handleSocketDisconnectedNotification();
    this.handleSocketConnectedNotification();
  }
  /**
   * Starts the statistics service.
   *
   * @param options - The options for starting the statistics service.
   * @returns A promise that resolves to the response from the server.
   */
  async start(options) {
    this.logger.debug("StatisticsService - start - invoked with payload:", options);
    const statisticsSocketClient = dependencyInjectionContainer.resolve("statisticsSocketClient");
    if (!statisticsSocketClient.isSocketInitiated()) {
      if (!this.stateService.canView("dashboard")) {
        throw new Error("User does not have permission to view dashboard statistics");
      }
      await statisticsSocketClient.connect();
    }
    const payload = {
      campaigns: options.campaigns ? 1 : void 0,
      outboundlists: options.outboundLists ? 1 : void 0,
      queues: options.queues ? 1 : void 0,
      users: options.users ? 1 : void 0,
      workitems: options.workItems ? 1 : void 0
    };
    return axiosInstance.post("/users/api/stats/filter", payload);
  }
  /**
   * Stops the statistics service.
   *
   * @returns {Promise<void>} A promise that resolves when the service is stopped.
   */
  stop() {
    this.logger.trace("StatisticsService - stop");
    return axiosInstance.delete("/users/api/stats/filter");
  }
  handleSocketDisconnectedNotification() {
    this.eventsService.statisticWebSocketEvents$.pipe(
      ofType([
        InternalEvents.SocketDisconnectedNotification,
        InternalEvents.SocketClosedNotification
      ])
    ).subscribe(() => {
      if (this.isSocketStarted) {
        this.isSocketStarted = false;
        this.stop().catch((error) => {
          this.logger.error(
            "StatisticsService - handleSocketDisconnectedNotification - error",
            error
          );
        });
      }
    });
  }
  handleSocketConnectedNotification() {
    this.eventsService.statisticWebSocketEvents$.pipe(ofType([InternalEvents.SocketConnectedNotification])).subscribe(() => {
      this.isSocketStarted = true;
    });
  }
  handleSupervisorStatsNotification() {
    this.eventsService.statisticWebSocketEvents$.pipe(ofType(InternalEvents.SupervisorStatsNotification)).subscribe((event) => {
      const campaigns = Object.values(event.data.stats.campaigns);
      const outboundlists = Object.values(event.data.stats.outboundlists);
      const queues = Object.values(event.data.stats.queues);
      const users = Object.values(event.data.stats.users).map(
        ({ statisticsByStatusId, ...stats }) => {
          const fixedStatisticsByStatusId = Object.entries(
            statisticsByStatusId
          ).reduce((previousValue, [id2, { duration, percentage }]) => {
            previousValue[id2] = {
              duration,
              percentage
            };
            return previousValue;
          }, {});
          return { ...stats, statisticsByStatusId: fixedStatisticsByStatusId };
        }
      );
      const workitems = Object.values(event.data.stats.workitems);
      const payload = {
        campaigns,
        outboundlists,
        queues,
        users,
        workitems
      };
      this.eventsService.emitExternal(ExternalEvents.SupervisorStatsNotification, payload);
    });
  }
};

// src/services/statuses.ts
var StatusService = class {
  eventsService;
  current = null;
  stateService;
  logger;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.logger = loggerService;
    this.eventsService = eventsService;
    this.stateService = stateService;
    this.handleChangeStatusNotification();
    this.handleDynamicChangeNotification();
  }
  /**
   * Handles the change status notification event.
   */
  handleChangeStatusNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ChangeStatusNotification)).subscribe((event) => {
      this.logger.info("StatusesService - handleChangeStatusNotification", event);
      const changeStatusNotification = event.getProperties();
      const status = this.stateService.getStatus(changeStatusNotification.statusId);
      if (status) {
        this.updateCurrent(status);
        status.duration = changeStatusNotification.duration;
        const session = this.stateService.getSession();
        if (session?.statusId && session.statusId !== status.statusId) {
          const updatedSession = {
            ...session,
            customStatusMessage: { emoji: "", message: "" },
            idleReason: changeStatusNotification.idleReason ?? "",
            idleStartedAt: changeStatusNotification.idleStartedAt ?? 0,
            status: changeStatusNotification.status,
            statusId: changeStatusNotification.statusId,
            statusStartedAt: changeStatusNotification.createdAt,
            userDuration: changeStatusNotification.userDuration ?? 0
          };
          this.stateService.setSession(updatedSession);
          this.eventsService.emitExternal(
            ExternalEvents.SessionStateUpdateNotification,
            updatedSession
          );
        }
      }
      this.eventsService.emitExternal(ExternalEvents.ChangeStatusNotification, status);
    });
  }
  handleDynamicChangeNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.DynamicChangeNotification)).subscribe((event) => {
      const dynamicChangeNotification = event.getProperties();
      const { action, objectType } = dynamicChangeNotification;
      const model = dynamicChangeNotification.object;
      if (objectType === "status" && action === "delete" && this.current) {
        this.logger.error("StatusService - handleDynamicChangeNotification - current status was deleted");
        const statusModel = model;
        const statusId = typeof statusModel["statusId"] === "string" ? statusModel["statusId"] : void 0;
        if (statusId === this.current.statusId) {
          const availableStatus = this.getStatusesToPresentToUser().find((status) => status.status === StatusTypes.Available && status.statusId !== statusId);
          if (availableStatus) {
            this.setStatus(availableStatus.statusId).catch((error) => {
              this.logger.error("StatusService - setStatus - error", error);
            });
          } else {
            this.logger.error(
              "StatusService - handleDynamicChangeNotification - no Available status found to fall back to"
            );
          }
        }
      }
    });
  }
  /**
   * Retrieves the current status.
   * If the current status is not set, it sets the status based on the session's status ID.
   * @returns The current status, or null if it is not set.
   */
  getCurrentStatus() {
    if (!this.current) {
      const statusId = this.stateService.getSession()?.statusId;
      if (statusId) {
        this.setStatus(statusId).catch((error) => {
          this.logger.error("StatusService - setStatus - error", error);
        });
      }
    }
    return this.current;
  }
  /**
   * Retrieves the name of the current status.
   * If the current status is not set, it sets the status based on the session's status ID.
   * @returns The name of the current status, or undefined if the current status is not set.
   */
  getCurrentStatusName() {
    if (!this.current) {
      const statusId = this.stateService.getSession()?.statusId;
      if (statusId) {
        this.setStatus(statusId).catch((error) => {
          this.logger.error("StatusService - setStatus - error", error);
        });
      }
    }
    return this.current?.name;
  }
  /**
   * Retrieves the name of a status based on its ID.
   * If the status is not found, returns 'Unknown'.
   *
   * @param statusId - The ID of the status.
   * @returns The name of the status, or 'Unknown' if not found.
   */
  getStatusName(statusId) {
    return this.stateService.getStatusName(statusId);
  }
  /**
   * Retrieves the statuses that should be presented to the user.
   * Only the statuses with the `presentToAgent` property set to true will be returned.
   *
   * @returns An array of `StatusState` objects representing the statuses to present to the user.
   */
  getStatusesToPresentToUser() {
    return this.stateService.getStatuses()?.filter((status) => status.presentToAgent) ?? [];
  }
  updateCurrent(status) {
    if (this.current) {
      this.current.duration = -1;
    }
    this.current = status;
    this.current.duration = 0;
    return this.current;
  }
  /**
   * Sets the status of the service.
   *
   * @param statusId - The ID of the status to set.
   */
  async setStatus(statusId, optionalFields) {
    this.logger.debug(`StatusesService - setStatus - status [${statusId}]`);
    const status = this.stateService.getStatus(statusId);
    if (!status) {
      return;
    }
    if (status.statusId === this.current?.statusId && !optionalFields) {
      return;
    }
    const current = this.updateCurrent(status);
    const payload = {
      ...optionalFields,
      status: current.status,
      statusId: current.statusId
    };
    const response = await axiosInstance.post("/users/api/status", payload);
    const session = this.stateService.getSession();
    if (session) {
      const updatedSession = {
        ...session,
        customStatusMessage: response.data.customStatusMessage,
        idleReason: response.data.idleReason ?? "",
        status: response.data.status,
        statusId: response.data.statusId,
        statusStartedAt: response.data.createdAt,
        userDuration: response.data.availableTimer ? response.data.availableTimer * 1e3 : 0,
        ...response.data.idleReason || response.data.status === StatusTypes.Busy ? { idleStartedAt: response.data.createdAt } : {}
      };
      this.stateService.setSession(updatedSession);
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
    return response.data;
  }
};

// src/services/translator.ts
var TranslatorService = class {
  translator;
  constructor({ translator }) {
    this.translator = translator;
  }
  /**
   * The function `load` takes a language and translations as input and returns the result of loading the
   * translations for that language using a translator.
   * @param {string} language - The `language` parameter in the `load` function represents the language
   * code or identifier for the translations that you want to load. It specifies the language for which
   * the translations should be loaded.
   * @param {Translations} translations - The `translations` parameter is an object that contains the
   * translations for a specific language. It likely includes key-value pairs where the keys represent
   * the original text in the source language and the values represent the translated text in the target
   * language.
   * @returns The `load` method is returning the result of calling the `load` method on the `translator`
   * object with the provided `language` and `translations` parameters. The return type is `unknown`.
   */
  load(language, translations) {
    return this.translator.load(language, translations);
  }
  /**
   * The function `translate` takes a key and parameters, then uses a translator to return the
   * translated string.
   * @param {string} key - The `key` parameter is a string that represents the unique identifier for
   * the translation that needs to be retrieved.
   * @param {unknown[]} params - The `params` parameter in the `translate` function is a rest parameter
   * that allows you to pass an arbitrary number of arguments to the function. In this case, it is used
   * to pass additional parameters that may be needed for the translation process.
   * @returns The `translate` function is returning the result of calling the `translate` method of the
   * `translator` object with the `key` and `params` as arguments.
   */
  translate(key, ...params) {
    return this.translator.translate(key, params);
  }
};

// src/services/widget.ts
var WidgetService = class {
  eventsService;
  logger;
  widgets = [];
  constructor({
    eventsService,
    loggerService
  }) {
    this.logger = loggerService;
    this.eventsService = eventsService;
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WidgetsDataNotification)).subscribe((event) => {
      this.handleWidgetsDataNotification(event);
    });
  }
  handleWidgetsDataNotification(event) {
    this.logger.debug("WidgetService - handleWidgetsDataNotification", event);
    this.widgets = event.getProperties();
  }
  async loadData(widgetId, parameters) {
    let url = `/analytics/api/types/widget/${widgetId}`;
    if (parameters) {
      url += `?${parameters}`;
    }
    const response = await axiosInstance.get(encodeURI(url));
    return response.data.workitems;
  }
  async loadByType(widgetType, parameters) {
    const widget = this.getType(widgetType);
    if (!widget) {
      return [];
    }
    return await this.loadData(widget.widgetId, parameters);
  }
  getType(widgetType) {
    return (this.widgets ?? []).find((widget) => widget.type === widgetType) ?? null;
  }
  /**
   * This TypeScript function retrieves voicemails based on a specified date range and new only flag.
   * @param {DateRange} dateRange - The `dateRange` parameter is used to specify a range of dates for
   * filtering voicemails. It likely includes a start date and an end date to retrieve voicemails within
   * that specific time frame. Possible values are
   * @param {boolean} newOnly - The `newOnly` parameter is a boolean flag that indicates whether to
   * retrieve only new voicemails or all voicemails within the specified date range. If `newOnly` is set
   * to `true`, the method will return only new voicemails; if set to `false`, it will
   * @returns An array of Workitem objects is being returned.
   */
  async getVoicemails(rangeType, newOnly) {
    this.logger.debug(
      `WidgetService - getVoicemails - rangeType [${rangeType}], newOnly [${newOnly}]`
    );
    if (!this.widgets) {
      return [];
    }
    return await this.loadByType(
      WidgetTypes.Voicemail,
      `rangeType=${rangeType}&newOnly=${newOnly}&voicemail=true`
    );
  }
  /**
   * The function `getMissedCalls` retrieves missed calls based on a specified date range and whether
   * they are new or not.
   * @param {DateRange} dateRange - The `dateRange` parameter in the `getMissedCalls` function is used to
   * specify a range of dates for which missed calls should be retrieved. It likely represents a period
   * of time, such as today, this week, this month, etc., within which the missed calls occurred.
   * @param {boolean} newOnly - The `newOnly` parameter is a boolean flag that indicates whether to
   * retrieve only new missed calls or all missed calls within the specified date range. If `newOnly` is
   * set to `true`, the function will return only new missed calls; if set to `false`, it will return all
   * missed
   * @returns An array of Workitem objects or Callback objects is being returned.
   */
  async getMissedCalls(rangeType, newOnly) {
    this.logger.debug(
      `WidgetService - getMissedCalls - rangeType [${rangeType}], newOnly [${newOnly}]`
    );
    if (!this.widgets) {
      return [];
    }
    return await this.loadByType(
      WidgetTypes.MissedCalls,
      `rangeType=${rangeType}&newOnly=${newOnly}&missedCalls=true`
    );
  }
  /**
   * Retrieves the history of workitems based on the specified range type.
   * @param rangeType The range type for filtering the workitem history.
   * @returns A promise that resolves to an array of Workitem objects representing the workitem history.
   */
  async getHistory(rangeType) {
    this.logger.debug(`WidgetService - getHistory - rangeType [${rangeType}]`);
    if (!this.widgets) {
      return [];
    }
    return await this.loadByType(WidgetTypes.MyHistory, `rangeType=${rangeType}`);
  }
  /**
   * Retrieves the callbacks for a given range type.
   * @param rangeType - The range type for which to retrieve the callbacks.
   * @returns A promise that resolves to an array of Callback objects.
   */
  async getCallbacks(rangeType) {
    this.logger.debug(`WidgetService - getCallbacks - rangeType [${rangeType}]`);
    if (!this.widgets) {
      return [];
    }
    return await this.loadByType(WidgetTypes.PersonalCallbacks);
  }
  async fetchWidgetData({
    id: id2,
    rangeFrom,
    rangeTo,
    rangeType,
    ...params
  }) {
    if (rangeType === RangeTypes.DateRange && (!rangeFrom || !rangeTo)) {
      throw new Error("DateRange requires rangeFrom and rangeTo to be defined");
    }
    const allParams = {
      ...params,
      rangeFrom,
      rangeTo,
      rangeType
    };
    const { data } = await axiosInstance.get(`/analytics/api/types/widget/${id2}`, {
      params: allParams,
      paramsSerializer: {
        indexes: null
      }
    });
    return data;
  }
};

// src/services/functions.ts
var FunctionsService = class {
  schemaTypeClient;
  logger;
  constructor({
    loggerService,
    schemaTypeClient
  }) {
    this.schemaTypeClient = schemaTypeClient;
    this.logger = loggerService;
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().search('function')
   */
  async fetchFunctions(payload) {
    this.logger.warn("FunctionsService - fetchFunctions is deprecated");
    return this.schemaTypeClient.search("function", payload);
  }
};

// src/utilities/queryClient.ts
import { QueryClient } from "@tanstack/query-core";
var defaultOptions = {
  queries: {
    enabled: false,
    gcTime: Infinity,
    throwOnError: true
  }
};
var queryClient = new QueryClient({
  defaultOptions
});

// src/services/resourceManager.ts
var ResourceManager = class {
  stateService;
  telephonyService;
  userSocketClient;
  workitemCache;
  persisterClient;
  conversationService;
  constructor({
    conversationService,
    persisterClient,
    stateService,
    telephonyService,
    userSocketClient,
    workitemCache
  }) {
    this.stateService = stateService;
    this.telephonyService = telephonyService;
    this.userSocketClient = userSocketClient;
    this.workitemCache = workitemCache;
    this.persisterClient = persisterClient;
    this.conversationService = conversationService;
  }
  async cleanup() {
    queryClient.setDefaultOptions(defaultOptions);
    queryClient.clear();
    this.persisterClient.dispose();
    this.stateService.clear();
    this.workitemCache.stop();
    this.conversationService.destroy();
    await this.userSocketClient.disconnect();
    await this.telephonyService.close();
  }
};

// src/services/recordings.ts
var RecordingsService = class {
  stateService;
  eventsService;
  logger;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.logger = loggerService;
    this.handleCallRecordingNotificationEvent();
  }
  handleCallRecordingNotificationEvent() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CallRecordingNotification)).subscribe((event) => {
      this.logger.debug("RecordingsService - handleCallRecordingNotificationEvent", event);
      this.eventsService.emitExternal(ExternalEvents.CallRecordingNotification, event.data);
    });
  }
  /**
   * This function fetches a recording for a specific recordingId.
   * @param {string} recordingId - The recordingId to fetch the transcript for
   * @returns {Promise<Recording>} - A Promise that resolves to the transcript for the recording
   */
  async fetchRecording(recordingId) {
    this.logger.debug(`RecordingsService - fetchRecording - recording [${recordingId}]`);
    const url = `/analytics/api/types/recording/${recordingId}`;
    const { data } = await axiosInstance.get(url);
    return data;
  }
  /**
   * This function fetches recordings foor the specific userId, if no userId is provided it will fetch all recordings.
   * @param {RecordingPayload = {}} - Payload including rangeType, rangeFrom, rangeTo, rows, start, q
   * @returns {Promise<RecordingResponse>} - A Promise that resolves to a list of recordings
   */
  async fetchMyRecordings({
    q,
    rangeFrom,
    rangeTo,
    rangeType = RangeTypes.Last7Days,
    rows,
    start
  } = {}) {
    this.logger.trace("RecordingsService - fetchMyRecordings");
    const userId = this.stateService.getSession()?.userId;
    return this.fetchRecordings({ q, rangeFrom, rangeTo, rangeType, rows, start, userId });
  }
  /**
   * This function fetches recordings foor the specific userId, if no userId is provided it will fetch all recordings.
   * @param {RecordingPayload = {}} - Payload including rangeType, rangeFrom, rangeTo, rows, start, q, userId
   * @returns {Promise<RecordingResponse>} - A Promise that resolves to a list of recordings
   */
  async fetchRecordings({
    q,
    rangeFrom,
    rangeTo,
    rangeType = RangeTypes.Last7Days,
    rows,
    start,
    userId
  } = {}) {
    this.logger.trace("RecordingsService - fetchRecordings");
    const url = `/analytics/api/v1/types/recording`;
    const { data } = await axiosInstance.get(url, {
      params: {
        q,
        rangeFrom,
        rangeTo,
        rangeType,
        rows,
        start,
        userId
      }
    });
    return { ...data, objects: data.objects ?? [] };
  }
};

// src/services/myUserSettings.ts
var resolveFlag = (value) => {
  switch (value) {
    case "on":
    case "true":
    case true:
      return true;
    case "off":
    case "false":
    case false:
      return false;
    default:
      return void 0;
  }
};
var MyUserSettingsService = class {
  stateService;
  schemaTypeClient;
  constructor({
    schemaTypeClient,
    stateService
  }) {
    this.stateService = stateService;
    this.schemaTypeClient = schemaTypeClient;
  }
  /**
   * The `isFlagEnabledInUserOrUserProfile` function resolves a flag-like setting to a strict boolean.
   * It first evaluates the value stored on the user and, when the user does not define the flag, falls
   * back to the user profile. Values such as `'on'`/`'off'`, `'true'`/`'false'` and real booleans are
   * normalized, defaulting to `false` when the flag is missing or unrecognized.
   * @param key The `key` parameter is the name of the flag to evaluate.
   * @returns The `isFlagEnabledInUserOrUserProfile()` method returns `true` when the flag is enabled, otherwise `false`.
   */
  isFlagEnabledInUserOrUserProfile(key) {
    const userFlag = resolveFlag(this.stateService.getUser()?.[key]);
    const userProfileFlag = resolveFlag(this.stateService.getUserProfile()?.[key]);
    return userFlag ?? userProfileFlag ?? false;
  }
  /**
   * The `saveUser` function saves the modified fields in the user settings.
   * @param fieldModifiers The `fieldModifiers` parameter is a record of field modifiers that are to be updated.
   * @param id The `id` parameter is the ID of the user whose settings are to be updated.
   * @returns The `saveUser()` method returns the updated user object.
   */
  async saveUser(fieldModifiers) {
    const id2 = this.stateService.getUserId();
    const user = this.stateService.getUser();
    if (id2 && user) {
      const response = await this.schemaTypeClient.update("user", { data: fieldModifiers, id: id2 });
      return response;
    }
    return {};
  }
  /**
   * The `getUser` function returns the user data stored in the `data` object.
   * @returns The `getUser()` method is returning the `User` object stored in the data map with the key
   * 'user'.
   */
  getUser() {
    return this.stateService.getUser();
  }
  /**
   * The `getProfileInfo` function returns the user profile information.
   * @returns The `getProfileInfo()` method is returning the user profile information stored in the `User` object.
   * The profile information includes the user's avatar, email, first name, language identifier, last name, and timezone.
   */
  getProfileInfo() {
    return {
      avatar: this.getFiles(),
      email: this.getEmail(),
      firstName: this.getFirstName(),
      languageIdentifier: this.getExpansions()?.languageId?.name,
      lastName: this.getLastName(),
      timezone: this.getTimezone()
    };
  }
  /**
   * The `getFirstName` function returns the user's first name.
   * @returns The `getFirstName()` method is returning the first name of the user.
   */
  getFirstName() {
    return this.stateService.getUser()?.firstName;
  }
  /**
   * The `getLastName` function returns the user's last name.
   * @returns The `getLastName()` method is returning the last name of the user.
   */
  getLastName() {
    return this.stateService.getUser()?.lastName;
  }
  /**
   * The `getEmail` function returns the user profile information.
   * @returns The `getEmail()` method is returning the email of the user.
   */
  getEmail() {
    return this.stateService.getUser()?.username;
  }
  /**
   * The `getFiles` function returns the user's stored files.
   * @returns The `getFiles()` method is returning the files of the user.
   */
  getFiles() {
    return this.stateService.getUser()?.files;
  }
  /**
   * The `getAvatar` function returns the user's avatar file name.
   * @returns The `getAvatar()` method is returning the avatar file name of the user.
   */
  getAvatar() {
    return this.stateService.getUser()?.avatar;
  }
  /**
   * The `getLanguageIdentifier` function returns the user's language identifier.
   * @returns The `getLanguageIdentifier()` method is returning the language identifier of the user.
   */
  getLanguageIdentifier() {
    return this.stateService.getUser()?.expansions?.languageId?.name;
  }
  /**
   * The 'getTimezone' function returns the user's timezone.
   * @returns The `getTimezone()` method is returning the timezone of the user.
   */
  getTimezone() {
    return this.stateService.getUser()?.timezone;
  }
  /**
   * The 'getacdAutoAccept' function returns the user's option  acdAutoAccept.
   * @returns The `getacdAutoAccept()` method is returning the option getacdAutoAccept of the user.
   */
  getacdAutoAccept() {
    return this.stateService.getUser()?.acdAutoAccept;
  }
  /**
   * The 'getacdAutoLogin' function returns the user's option acdAutoLogin.
   * @returns The `getacdAutoLogin()` method is returning the option getacdAutoLogin of the user. If true, the user is automatically logged in to the ACD.
   */
  getacdAutoLogin() {
    return this.stateService.getUser()?.acdAutoLogin;
  }
  /**
   * The 'getacdAutoLogout' function returns the user's option acdAutoLogout.
   * @returns The `getacdAutoLogout()` method is returning the option getacdAutoLogout of the user. If true, the user's ACD option can be modified.
   */
  getAllowAcdChanges() {
    return this.stateService.getUser()?.allowAcdChanges;
  }
  /**
   * The 'getAllowClientTracing' function returns the user's allowClientTracing field.
   * @returns The `getAllowClientTracing()` method is returning the allowClientTracing field of the user.
   * */
  getAllowClientTracing() {
    return this.stateService.getUser()?.allowClientTracing;
  }
  /**
   * The 'getAllowServerTracing' function returns the user's allowServerTracing field.
   * @returns The `getAllowServerTracing()` method is returning the allowServerTracing field of the user.
   * */
  getAllowServerTracing() {
    return this.stateService.getUser()?.allowServerTracing;
  }
  /**
   * The 'getAlwaysDurationWebNotification' function returns the user's alwaysDurationWebNotification field.
   * @returns The `getAlwaysDurationWebNotification()` method is returning the alwaysDurationWebNotification field of the user.
   * */
  getAlwaysDurationWebNotification() {
    return this.stateService.getUser()?.alwaysDurationWebNotification;
  }
  /**
   * The 'getAlwaysHoldWebNotification' function returns the user's alwaysHoldWebNotification field.
   * @returns The `getAlwaysHoldWebNotification()` method is returning the alwaysHoldWebNotification field of the user.
   * */
  getAlwaysHoldWebNotification() {
    return this.stateService.getUser()?.alwaysHoldWebNotification;
  }
  /**
   * The 'getCallDurationNotification' function returns the user's callDurationNotification field.
   * @returns The `getCallDurationNotification()` method is returning the callDurationNotification field of the user.
   * */
  getCallFailedNotification() {
    return this.stateService.getUser()?.callFailedNotification;
  }
  /**
   * The 'getChatDurationNotification' function returns the user's chatDurationNotification.
   * @returns The `getChatDurationNotification()` method is returning the chatDurationNotification field of the user.
   * */
  getChatDurationNotification() {
    return this.stateService.getUser()?.chatDurationNotification;
  }
  /**
   * The 'getConfirmDisposition' function returns whether the user's confirmDisposition flag is enabled.
   * @returns The `getConfirmDisposition()` method is returning a boolean indicating if the confirmDisposition flag is enabled for the user.
   * */
  getConfirmDisposition() {
    return this.isFlagEnabledInUserOrUserProfile("confirmDisposition");
  }
  /**
   * The 'getContentType' function returns the user's content type field.
   * @returns The `getContentType()` method is returning the content type field of the user.
   * */
  getContentType() {
    return this.stateService.getUser()?.["contentType"];
  }
  /**
   * The `getCreatedAt` function returns the date and time when the user settings were created.
   * @returns The `getCreatedAt()` method is returning the date and time when the user settings were created.
   * */
  getCreatedAt() {
    return this.stateService.getUser()?.createdAt;
  }
  /**
   * The `getCreatedBy` function returns the user who created the user settings.
   * @returns The `getCreatedBy()` method is returning the user who created the user settings.
   * */
  getCreatedBy() {
    return this.stateService.getUser()?.createdBy;
  }
  /**
   * The `getCredentialsExpired` function returns the credentialsExpired field.
   * @returns The `getCredentialsExpired()` method is returning the credentialsExpired field of the user.
   * */
  getcredentialsNonExpired() {
    return this.stateService.getUser()?.credentialsNonExpired;
  }
  /**
   * The `getDefaultAcdLoginStatus` function returns the defaultAcdLoginStatus field.
   * @returns The `getDefaultAcdLoginStatus()` method is returning the defaultAcdLoginStatus field of the user.
   * */
  getDefaultAcdLoginStatus() {
    return this.stateService.getUser()?.defaultAcdLoginStatus;
  }
  /**
   * The `getDeletedAt` function returns the date and time when the user settings were deleted.
   * @returns The `getDeletedAt()` method is returning the date and time when the user settings were deleted.
   * */
  getDeletedAt() {
    return this.stateService.getUser()?.deletedAt;
  }
  /**
   * The `getDeletedBy` function returns the user who deleted the user settings.
   * @returns The `getDeletedBy()` method is returning the user who deleted the user settings.
   * */
  getDialConfirmation() {
    return this.stateService.getUser()?.dialConfirmation;
  }
  /**
   * The `getDisableDisposition` function returns whether the disableDisposition flag is enabled.
   * @returns The `getDisableDisposition()` method is returning a boolean indicating if the disableDisposition flag is enabled for the user.
   * */
  getDisableDisposition() {
    return this.isFlagEnabledInUserOrUserProfile("disableDisposition");
  }
  /**
   * The `getDisableEmailNotification` function returns the disableEmailNotification field.
   * @returns The `getDisableEmailNotification()` method is returning the disableEmailNotification field of the user.
   * */
  getDisableEmailNotification() {
    return this.stateService.getUser()?.disableEmailNotification;
  }
  /**
   * The `getDisableStartRecording` function returns the disableStartRecording field.
   * @returns The `getDisableStartRecording()` method is returning the disableStartRecording field of the user.
   * */
  getDisableStartRecording() {
    return this.stateService.getUser()?.disableStartRecording;
  }
  /**
   * The `getDisableStopRecording` function returns the disableStopRecording field.
   * @returns The `getDisableStopRecording()` method is returning the disableStopRecording field of the user.
   * */
  getDisableStopRecording() {
    return this.stateService.getUser()?.disableStopRecording;
  }
  /**
   * The `getDispositionNotification` function returns the dispositionNotification field.
   * @returns The `getDispositionNotification()` method is returning the dispositionNotification field of the user.
   * */
  getDispositionNotification() {
    return this.stateService.getUser()?.dispositionNotification;
  }
  /**
   * The `getEnableDurationWebNotification` function returns the enableDurationWebNotification field.
   * @returns The `getEnableDurationWebNotification()` method is returning the enableDurationWebNotification field of the user.
   */
  getEnableDurationWebNotification() {
    return this.stateService.getUser()?.enableDurationWebNotification;
  }
  /**
   * The `getEnableHoldWebNotification` function returns the enableHoldWebNotification field.
   * @returns The `getEnableHoldWebNotification()` method is returning the enableHoldWebNotification field of the user.
   * */
  getEnableHoldWebNotification() {
    return this.stateService.getUser()?.enableHoldWebNotification;
  }
  /**
   * The `getEnableRealtimeTranscription` function returns whether the enableRealtimeTranscription flag is enabled.
   * @returns The `getEnableRealtimeTranscription()` method is returning a boolean indicating if the enableRealtimeTranscription flag is enabled for the user.
   * */
  getEnableRealtimeTranscription() {
    return this.isFlagEnabledInUserOrUserProfile("enableRealtimeTranscription");
  }
  /**
   * The `getEnabled` function returns the enabled field of the user.
   * @returns The `getEnabled()` method is returning the enabled field of the user.
   * */
  getEnabled() {
    return this.stateService.getUser()?.enabled;
  }
  /**
   * The `getExpansions` function returns the expansions field of the user.
   * @returns The `getExpansions()` method is returning the expansions field of the user.
   * */
  getExpansions() {
    return this.stateService.getUser()?.expansions;
  }
  /**
   * The `getGroups` function returns the groups field of the user.
   * @returns The `getGroups()` method is returning the groups field of the user.
   * */
  getGroups() {
    return this.stateService.getUser()?.["groups"];
  }
  /**
   * The `getHideInCompanyDirectory` function returns the hideInCompanyDirectory field.
   * @returns The `getHideInCompanyDirectory()` method is returning the hideInCompanyDirectory field of the user.
   * */
  getHideInCompanyDirectory() {
    return this.stateService.getUser()?.hideInCompanyDirectory;
  }
  /**
   * The `getHomeTabs` function returns the homeTabs field.
   * @returns The `getHomeTabs()` method is returning the homeTabs field of the user.
   * */
  getHomeTabs() {
    return this.stateService.getUser()?.["homeTabs"];
  }
  /**
   * The `getInboundCallDurationNotification` function returns the inboundCallDurationNotification field.
   * @returns The `getInboundCallDurationNotification()` method is returning the inboundCallDurationNotification field of the user.
   * */
  getInboundCallDurationNotification() {
    return this.stateService.getUser()?.inboundCallDurationNotification;
  }
  /**
   * The `getInboundCallHoldNotification` function returns the inboundCallHoldNotification field.
   * @returns The `getInboundCallHoldNotification()` method is returning the inboundCallHoldNotification field of the user.
   * */
  getInboundCallHoldNotification() {
    return this.stateService.getUser()?.inboundCallHoldNotification;
  }
  /**
   * The `getInboundEmailDurationNotification` function returns the inboundEmailDurationNotification field.
   * @returns The `getInboundEmailDurationNotification()` method is returning the inboundEmailDurationNotification field of the user.
   * */
  getInboundEmailDurationNotification() {
    return this.stateService.getUser()?.inboundEmailDurationNotification;
  }
  /**
   * The `getInboundExtensionCallDurationNotification` function returns the inboundExtensionCallDurationNotification field.
   * @returns The `getInboundExtensionCallDurationNotification()` method is returning the inboundExtensionCallDurationNotification field of the user.
   * */
  getInboundExtensionCallDurationNotification() {
    return this.stateService.getUser()?.inboundExtensionCallDurationNotification;
  }
  /**
   * The `getInboundSMSDurationNotification` function returns the inboundSMSDurationNotification field.
   * @returns The `getInboundSMSDurationNotification()` method is returning the inboundSMSDurationNotification field of the user.
   * */
  getInboundSMSDurationNotification() {
    return this.stateService.getUser()?.inboundSMSDurationNotification;
  }
  /**
   * The `getLanguageId` function returns the language ID of the user.
   * @returns The `getLanguageId()` method is returning the language ID of the user.
   * */
  getLanguageId() {
    return this.stateService.getUser()?.languageId;
  }
  /**
   * The `getMSTeamsEnabled` function returns the mSTeamsEnabled field.
   * @returns The `getMSTeamsEnabled()` method is returning the mSTeamsEnabled field of the user.
   * */
  getMSTeamsEnabled() {
    return this.stateService.getUser()?.mSTeamsEnabled;
  }
  /**
   * The `getModifiedAt` function returns the date and time when the user settings were last modified.
   * @returns The `getModifiedAt()` method is returning the date and time when the user settings were last modified.
   * */
  getModifiedAt() {
    return this.stateService.getUser()?.modifiedAt;
  }
  /**
   * The `getModifiedBy` function returns the user who last modified the user settings.
   * @returns The `getModifiedBy()` method is returning the user who last modified the user settings.
   * */
  getModifiedBy() {
    return this.stateService.getUser()?.modifiedBy;
  }
  /**
   * The `getName` function returns the user's name.
   * @returns The `getName()` method is returning the name of the user.
   * */
  getName() {
    return this.stateService.getUser()?.name;
  }
  /**
   * The `getNetworkRegionId` function returns the network region ID of the user.
   * @returns The `getNetworkRegionId()` method is returning the network region ID of the user.
   * */
  getNetworkRegionId() {
    return this.stateService.getUser()?.expansions?.networkregionId;
  }
  /**
   * The `getOAuthProfileAssignmentFromExternalRole` function returns the oAuthProfileAssignmentFromExternalRole field.
   * @returns The `getOAuthProfileAssignmentFromExternalRole()` method is returning the oAuthProfileAssignmentFromExternalRole field of the user.
   * */
  getOAuthProfileAssignmentFromExternalRole() {
    return this.stateService.getUser()?.oAuthProfileAssignmentFromExternalRole;
  }
  /**
   * The `getObjectId` function returns the object ID of the user.
   * @returns The `getObjectId()` method is returning the object ID of the user.
   * */
  getObjectType() {
    return this.stateService.getUser()?.objectType;
  }
  /**
   * The `getOutboundCallDurationNotification` function returns the outboundCallDurationNotification field.
   * @returns The `getOutboundCallDurationNotification()` method is returning the outboundCallDurationNotification field of the user.
   * */
  getOutboundCallDurationNotification() {
    return this.stateService.getUser()?.outboundCallDurationNotification;
  }
  /**
   * The `getOutboundCallHoldNotification` function returns the outboundCallHoldNotification field.
   * @returns The `getOutboundCallHoldNotification()` method is returning the outboundCallHoldNotification field of the user.
   * */
  getOutboundCallHoldNotification() {
    return this.stateService.getUser()?.outboundCallHoldNotification;
  }
  /**
   * The `getOutboundEmailDurationNotification` function returns the outboundEmailDurationNotification field.
   * @returns The `getOutboundEmailDurationNotification()` method is returning the outboundEmailDurationNotification field of the user.
   * */
  getOutboundEmailDurationNotification() {
    return this.stateService.getUser()?.outboundEmailDurationNotification;
  }
  /**
   * The `getOutboundExtensionCallDurationNotification` function returns the outboundExtensionCallDurationNotification field.
   * @returns The `getOutboundExtensionCallDurationNotification()` method is returning the outboundExtensionCallDurationNotification field of the user.
   * */
  getOutboundExtensionCallDurationNotification() {
    return this.stateService.getUser()?.outboundExtensionCallDurationNotification;
  }
  /**
   * The `getOutboundSMSDurationNotification` function returns the outboundSMSDurationNotification field.
   * @returns The `getOutboundSMSDurationNotification()` method is returning the outboundSMSDurationNotification field of the user.
   * */
  getOutboundSMSDurationNotification() {
    return this.stateService.getUser()?.outboundSMSDurationNotification;
  }
  /**
   * The `getPasswordModifiedAt` function returns the passwordModifiedAt field.
   * @returns The `getPasswordModifiedAt()` method is returning the passwordModifiedAt field of the user.
   *  */
  getPasswordModifiedAt() {
    return this.stateService.getUser()?.passwordModifiedAt;
  }
  /**
   * The `getPbxUser` function returns the pbxUser field.
   * @returns The `getPbxUser()` method is returning the pbxUser field of the user.
   * */
  getPbxUser() {
    return this.stateService.getUser()?.["pbxUser"];
  }
  /**
   * The `getPersonalInboxCampaignId` function returns the personalInboxCampaignId field.
   * @returns The `getPersonalInboxCampaignId()` method is returning the personalInboxCampaignId field of the user.
   * */
  getPersonalInboxCampaignId() {
    return this.stateService.getUser()?.personalInboxCampaignId;
  }
  /**
   * The `getPredictiveCallDurationNotification` function returns the predictiveCallDurationNotification field.
   * @returns The `getPredictiveCallDurationNotification()` method is returning the predictiveCallDurationNotification field of the user.
   * */
  getPredictiveCallDurationNotification() {
    return this.stateService.getUser()?.predictiveCallDurationNotification;
  }
  /**
   * The `getPredictiveSMSDurationNotification` function returns the predictiveSMSDurationNotification field.
   * @returns The `getPredictiveSMSDurationNotification()` method is returning the predictiveSMSDurationNotification field of the user.
   * */
  getPredictiveSMSDurationNotification() {
    return this.stateService.getUser()?.predictiveSMSDurationNotification;
  }
  /**
   * The `getProgressiveCallDurationNotification` function returns the progressiveCallDurationNotification field.
   * @returns The `getProgressiveCallDurationNotification()` method is returning the progressiveCallDurationNotification field of the user.
   * */
  getProgressiveCallDurationNotification() {
    return this.stateService.getUser()?.progressiveCallDurationNotification;
  }
  /**
   * The `getPseudonym` function returns the user's pseudonym.
   * @returns The `getPseudonym()` method is returning the pseudonym of the user.
   * */
  getPseudonym() {
    return this.stateService.getUser()?.pseudonym;
  }
  /**
   * The `getQueues` function returns the queues that the user is a member of.
   * @returns The `getQueues()` method is returning the queues of the user.
   * */
  getQueues() {
    return this.stateService.getUser()?.queues;
  }
  /**
   * The `getRecordingAnalysisPercentage` function returns the recordingAnalysisPercentage field.
   * @returns The `getRecordingAnalysisPercentage()` method is returning the recordingAnalysisPercentage field of the user.
   * */
  getRecordingAnalysisPercentage() {
    return this.stateService.getUser()?.recordingAnalysisPercentage;
  }
  /**
   * The `getRecordingAnalysisPercentage` function returns the recordingAnalysisPercentage field.
   * @returns The `getRecordingAnalysisPercentage()` method is returning the recordingAnalysisPercentage field of the user.
   * */
  getReminderTime() {
    return this.stateService.getUser()?.["reminderTime"];
  }
  /**
   * The `getRingOnLogout` function returns the ringOnLogout field.
   * @returns The `getRingOnLogout()` method is returning the ringOnLogout field of the user.
   * */
  getRingOnLogout() {
    return this.stateService.getUser()?.ringOnLogout;
  }
  /**
   * The `getRingPhoneOnOffer` function returns the ringPhoneOnOffer field.
   * @returns The `getRingPhoneOnOffer()` method is returning the ringPhoneOnOffer field of the user.
   * */
  getRingPhoneOnOffer() {
    return this.stateService.getUser()?.ringPhoneOnOffer;
  }
  /**
   * The `getSalesforceUserTokens` function returns the salesforceUserTokens field.
   * @returns The `getSalesforceUserTokens()` method is returning the salesforceUserTokens field of the user.
   * */
  getSalesforceUserTokens() {
    return this.stateService.getUser()?.["salesforceUserTokens"];
  }
  /**
   * The `getScrubOnDial` function returns the scrubOnDial field.
   * @returns The `getScrubOnDial()` method is returning the scrubOnDial field of the user.
   * */
  getScrubOnDial() {
    return this.stateService.getUser()?.scrubOnDial;
  }
  /**
   * The `getSettings` function returns the settings field.
   * @returns The `getSettings()` method is returning the settings field of the user.
   * */
  getSettings() {
    return this.stateService.getUser()?.settings;
  }
  /**
   * The `getShowWebrtcNotification` function returns the showWebrtcNotification field.
   *  @returns The `getShowWebrtcNotification()` method is returning the showWebrtcNotification field of the user.
   * */
  getShowWebrtcNotification() {
    return this.stateService.getUser()?.showWebrtcNotification;
  }
  /**
   * The `getSkills` function returns the skills field.
   * @returns The `getSkills()` method is returning the skills field of the user.
   * */
  getSkills() {
    return this.stateService.getUser()?.["skills"];
  }
  /**
   * The `getSocialDurationNotification` function returns the socialDurationNotification field.
   * @returns The `getSocialDurationNotification()` method is returning the socialDurationNotification field of the user.
   */
  getSocialDurationNotification() {
    return this.stateService.getUser()?.socialDurationNotification;
  }
  /**
   * The `getSupervisedCampaigns` function returns the campaigns that the user supervises.
   * @returns The `getSupervisedCampaigns()` method is returning the supervised campaigns of the user.
   */
  getSupervisedCampaigns() {
    return this.stateService.getUser()?.["supervisedcampaigns"];
  }
  /**
   * The `getSupervisedQueues` function returns the supervised queues field.
   * @returns The `getSupervisedQueues()` method is returning the supervised queues field of the user.
   * */
  getSupervisedQueues() {
    return this.stateService.getUser()?.["supervisedqueues"];
  }
  /**
   * The `getSupervisedUsers` function returns the supervised users field.
   * @returns The `getSupervisedUsers()` method is returning the supervised users field of the user.
   * */
  getSupervisedUsers() {
    return this.stateService.getUser()?.["supervisedusers"];
  }
  /**
   * The `getSupervisorQueueUsers` function returns the supervisor queue users field.
   * @returns The `getSupervisorQueueUsers()` method is returning the supervisor queue users field of the user.
   * */
  getSupervisorQueueUsers() {
    return this.stateService.getUser()?.["supervisorqueueusers"];
  }
  /**
   * The `getSupervisors` function returns the supervisors field.
   * @returns The `getSupervisors()` method is returning the supervisors field of the user.
   * */
  getSupervisors() {
    return this.stateService.getUser()?.["supervisors"];
  }
  /**
   * The `getTelephony` function returns the telephony field.
   * @returns The `getTelephony()` method is returning the telephony field of the user.
   * */
  getTelephony() {
    return this.stateService.getUser()?.telephony;
  }
  /**
   * The `getTenantId` function returns the tenant ID of the user.
   * @returns The `getTenantId()` method is returning the tenant ID of the user.
   */
  getTenantId() {
    return this.stateService.getUser()?.tenantId;
  }
  /**
   * The `getUseReactWorkitemLayout` function returns whether the useReactWorkitemLayout flag is enabled.
   * @returns The `getUseReactWorkitemLayout()` method is returning a boolean indicating if the useReactWorkitemLayout flag is enabled for the user.
   * */
  getUseReactWorkitemLayout() {
    return this.isFlagEnabledInUserOrUserProfile("useReactWorkitemLayout");
  }
  /**
   * The `getUseSideBarHeader` function returns whether the useSideBarHeader flag is enabled.
   * @returns The `getUseSideBarHeader()` method is returning a boolean indicating if the useSideBarHeader flag is enabled for the user.
   * */
  getUseSideBarHeader() {
    return this.isFlagEnabledInUserOrUserProfile("useSideBarHeader");
  }
  /**
   * The `getUserClientSettingsId` function returns the user's client settings ID.
   *  @returns The `getUserClientSettingsId()` method is returning the client settings ID of the user.
   * */
  getUserClientSettingsId() {
    return this.stateService.getUser()?.userClientSettingsId;
  }
  /**
   * The `getUserId` function returns the user's ID.
   * @returns The `getUserId()` method is returning the ID of the user.
   * */
  getUserId() {
    return this.stateService.getUser()?.userId;
  }
  /**
   * The `getUserProfileId` function returns the user's profile ID.
   * @returns The `getUserProfileId()` method is returning the profile ID of the user.
   * */
  getUserProfileId() {
    return this.stateService.getUser()?.userProfileId;
  }
  /**
   * The `getVerifyConsentOnDial` function returns the verifyConsentOnDial field.
   *  @returns The `getVerifyConsentOnDial()` method is returning the verifyConsentOnDial field of the user.
   * */
  getVerifyConsentOnDial() {
    return this.stateService.getUser()?.verifyConsentOnDial;
  }
  /**
   * The `getVerifyConsentOnSMS` function returns the verifyConsentOnSMS field.
   * @returns The `getVerifyConsentOnSMS()` method is returning the verifyConsentOnSMS field of the user.
   * */
  getVerifyConsentOnSMS() {
    return this.stateService.getUser()?.verifyConsentOnSMS;
  }
  /**
   * The `getVoiceSettingsId` function returns the user's voice settings ID.
   * @returns The `getVoiceSettingsId()` method is returning the voice settings ID of the user.
   * */
  getVoiceSettingsId() {
    return this.stateService.getUser()?.["voiceSettingsId"];
  }
  /**
   * The `getId` function returns the user's ID.
   * @returns The `getId()` method is returning the ID of the user.
   * */
  getId() {
    return this.stateService.getUser()?._id;
  }
  /**
   * The 'getSignature' function returns the user's email signature.
   * @returns The `getSignature()` method is returning the email signature of the user.
   */
  getEmailSignature() {
    return this.stateService.getUser()?.["emailSignature"];
  }
};

// src/services/internalStateManagement.ts
var InternalStateManagementService = class {
  stateService;
  constructor({ stateService }) {
    this.stateService = stateService;
  }
  async upsertValueFromAPI(name, url, fields) {
    if (fields !== null && fields !== void 0) {
      url += `&fields=[${fields.toString()}]`;
    }
    const response = await axiosInstance.get(encodeURI(url));
    this.stateService.set(name, response.data.objects || response.data || []);
    return response;
  }
};

// src/services/video.ts
var VideoService = class {
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
  }
  /**
   * The function createMeeting sends a POST request to create a video meeting using the provided
   * payload.
   * @param {CreateVideoMeetingPayload} payload - The `payload` parameter in the `createMeeting` function
   * is of type `CreateVideoMeetingPayload`. It is used to provide the necessary data and configuration
   * for creating a video meeting.
   * @returns The `createMeeting` function is returning a Promise that resolves to a `VideoMeeting`
   * object.
   */
  async createMeeting(payload) {
    this.logger.debug("VideoService - createMeeting - invoked with payload:", payload);
    const { data } = await axiosInstance.post(
      "/video-meetings/api/video/meeting",
      payload
    );
    return data;
  }
  /**
   * This TypeScript function reads a video meeting by its ID using an HTTP GET request.
   * @param {string} id - The `id` parameter in the `readMeeting` function is a string that represents
   * the unique identifier of the video meeting that you want to retrieve.
   * @returns The `readMeeting` function is returning a Promise that resolves to a `VideoMeeting` object
   * fetched from the specified endpoint `/video-meetings/api/video/meeting/` using an HTTP GET
   * request.
   */
  async readMeeting(id2) {
    this.logger.debug(`VideoService - readMeeting - meeting [${id2}]`);
    const { data } = await axiosInstance.get(
      `/video-meetings/api/video/meeting/${id2}`
    );
    return data;
  }
  /**
   * This TypeScript function updates a video meeting with the specified ID using the provided payload.
   * @param {string} id - The `id` parameter in the `updateMeeting` function is a string that represents
   * the unique identifier of the meeting that needs to be updated.
   * @param {CreateVideoMeetingPayload} payload - The `payload` parameter in the `updateMeeting` function
   * is of type `CreateVideoMeetingPayload`. It contains the data needed to update a video meeting, such
   * as the meeting title, participants, date, and any other relevant information for the meeting.
   * @returns The `updateMeeting` function returns a Promise that resolves to a `VideoMeeting` object.
   */
  async updateMeeting(id2, payload) {
    this.logger.debug(`VideoService - updateMeeting - meeting [${id2}] with payload:`, payload);
    const { data } = await axiosInstance.put(
      `/video-meetings/api/video/meeting/${id2}`,
      payload
    );
    return data;
  }
  /**
   * This TypeScript function deletes a meeting by its ID using an HTTP DELETE request.
   * @param {string} id - The `id` parameter in the `deleteMeeting` function is a string that represents
   * the unique identifier of the meeting that needs to be deleted.
   */
  async deleteMeeting(id2) {
    this.logger.debug(`VideoService - deleteMeeting - meeting [${id2}]`);
    await axiosInstance.delete(`/video-meetings/api/video/meeting/${id2}`);
  }
  /**
   * This function responds to a meeting invitation and returns a video meeting object.
   * @param {ParticipantResponsePayload}  - The `respondInvitation` method takes in a
   * `ParticipantResponsePayload` object as a parameter, which includes the following properties:
   * @returns The `respondInvitation` function returns a Promise that resolves to a `VideoMeeting`
   * object.
   */
  async respondInvitation({
    action,
    meetingId,
    timestamp
  }) {
    this.logger.debug(`VideoService - respondInvitation - meeting [${meetingId}]`);
    const { data } = await axiosInstance.post(
      `/video-meetings/api/video/meeting/${meetingId}/participant/invitation-response`,
      {
        action,
        timestamp
      }
    );
    return data;
  }
  /**
   * This TypeScript function fetches meetings data by sending a POST request to a specific endpoint and
   * returns the response data.
   * @param {QueryParameters} [payload] - The `fetchMeetings` function is an asynchronous function that
   * fetches meetings using a POST request to a specific endpoint. The function takes an optional
   * `payload` parameter of type `QueryParameters`. The `payload` parameter is used as the data sent in
   * the POST request body.
   * @returns The `fetchMeetings` function is returning the `data` received from the POST request to the
   * '/video-meetings/api/video/meeting/query' endpoint using axiosInstance. The `data` is of type
   * `FetchMeetingsResponse`.
   */
  async fetchMeetings(payload) {
    this.logger.debug(`VideoService - fetchMeetings - invoked with payload:`, payload);
    const { data } = await axiosInstance.post(
      "/video-meetings/api/video/meeting/query",
      payload
    );
    return data;
  }
  /**
   * The `refreshToken` function in TypeScript asynchronously retrieves a new video token for a user
   * session.
   * @param {refreshVideoQueryParameters} [payload] - The `payload` parameter in the `refreshToken`
   * function is an optional parameter of type `refreshVideoQueryParameters`. It is used to pass
   * additional data to the function if needed. In this case, it is being used to potentially update a
   * session when refreshing a video token.
   * @returns The `refreshToken` function is returning the `data` object received from the API call made
   * to `/video-meetings/api/identity/user/token`.
   */
  async refreshToken(payload) {
    this.logger.debug(`VideoService - refreshToken - invoked with payload:`, payload);
    const { data } = await axiosInstance.get(
      `/video-meetings/api/identity/user/token?updateSession=${payload?.updateSession ?? true}`
    );
    return data;
  }
};

// src/services/integrations.ts
var REQUEST_ACCESS_URL = "/data/api/msteams/request/access";
var IntegrationsService = class {
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
  }
  async createMSTeamsAccessRequest(payload) {
    this.logger.debug(
      "IntegrationsService - createMSTeamsAccessRequest - invoked with payload:",
      payload
    );
    return await axiosInstance.post(REQUEST_ACCESS_URL, payload);
  }
  async fetchMSTeamsAccessRequests(payload) {
    this.logger.debug(
      "IntegrationsService - fetchMSTeamsAccessRequests - invoked with payload:",
      payload
    );
    return await axiosInstance.get(
      `${REQUEST_ACCESS_URL}/${payload.tenantId}`
    );
  }
  async updateMSTeamsAccessRequest(payload) {
    this.logger.debug(
      "IntegrationsService - replyMSTeamsAccessRequest - invoked with payload:",
      payload
    );
    return await axiosInstance.patch(`${REQUEST_ACCESS_URL}/status`, payload);
  }
  async fetchIntegrations() {
    const { data } = await axiosInstance.get("/npaas/mdm/api/integrations");
    return data;
  }
  async fetchIntegrationAccounts() {
    const { data } = await axiosInstance.get(
      "/npaas/mdm/api/integrations/accounts"
    );
    return data;
  }
  async disconnectIntegrationAccount(id2, clearObjects) {
    await axiosInstance.delete(`/npaas/mdm/api/integrations/accounts/${id2}`, {
      params: { clearObjects: clearObjects ?? false }
    });
  }
};

// src/services/dataIngestion.ts
var DataIngestionService = class {
  /**
   * Fetch welcome questions from the Data Ingestion service.
   *
   * @param collectionName - The name of the collection.
   * @param tenantId - The ID of the tenant.
   * @returns A Promise that resolves to the response from the server.
   */
  async fetchWelcomeQuestions(params) {
    const response = await s360AxiosClient.get(
      `/data-ingestion-service/private/v1/welcome_questions`,
      {
        params
      }
    );
    return response.data;
  }
};

// src/services/workitemCache.ts
var CACHE_TIME = 12 * 60 * 60 * 1e3;
var INTERVAL_TIME = 24 * 60 * 60 * 1e3;
var TERMINATION_TIMEOUT = 5 * 60 * 1e3;
var WorkitemCache = class {
  workitemsCache;
  interval = null;
  terminationTimeouts;
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
    this.workitemsCache = /* @__PURE__ */ new Map();
    this.terminationTimeouts = /* @__PURE__ */ new Map();
  }
  start() {
    this.logger.trace("WorkitemCache - starting cache cleanup interval");
    this.stop();
    this.interval = setInterval(() => {
      this.cleanUpCache();
    }, INTERVAL_TIME);
  }
  stop() {
    this.logger.trace("WorkitemCache - clearing cache and stopping cache cleanup interval");
    this.workitemsCache.clear();
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
  /**
   * Adds or updates a workitem to the cache, updating its expiration time.
   * @param workitem - The workitem to add.
   */
  upsertWorkitem(workitem) {
    this.logger.debug(`WorkitemCache - adding workitem [${workitem.workitemId}] to cache`);
    const currentCache = this.workitemsCache.get(workitem.workitemId);
    let overwrite;
    if (currentCache?.overwrite) {
      overwrite = { ...currentCache.overwrite };
    }
    this.workitemsCache.set(workitem.workitemId, {
      expiresAt: Date.now() + CACHE_TIME,
      overwrite,
      workitem
    });
  }
  /**
   * Retrieves a workitem from the cache by ID.
   * @param workitemId - ID of the workitem to retrieve.
   * @returns A `Workitem` if it exists, otherwise `undefined`.
   */
  getWorkitem(workitemId) {
    this.logger.debug(`WorkitemCache - retrieving workitem [${workitemId}] from cache`);
    return this.workitemsCache.get(workitemId)?.workitem;
  }
  /**
   * Deletes a workitem from the cache by ID.
   * @param workitemId - ID of the workitem to delete.
   */
  deleteWorkitem(workitemId) {
    this.logger.debug(`WorkitemCache - deleting workitem [${workitemId}] from cache`);
    this.workitemsCache.delete(workitemId);
  }
  /**
   * Clears the termination timeout for a workitem, call when the actual
   * WorkitemTerminatedNotification is received.
   * @param workitemId - ID of the workitem to clear termination timeout for.
   */
  clearTerminationTimeout(workitemId) {
    this.logger.debug(`WorkitemCache - clearing workitem [${workitemId}] termination timeout`);
    const existingTimeout = this.terminationTimeouts.get(workitemId);
    if (existingTimeout) {
      clearTimeout(existingTimeout);
    }
    this.terminationTimeouts.delete(workitemId);
  }
  /**
   * Clears any local overwrite for a workitem in the cache.
   * @param workitemId - ID of the workitem to clear overwrite for.
   */
  clearWorkitemOverwrite(workitemId) {
    this.logger.debug(`WorkitemCache - clearing local overwrite workitem [${workitemId}]`);
    const cachedWorkitem = this.workitemsCache.get(workitemId);
    if (cachedWorkitem) {
      this.logger.debug(
        `WorkitemCache - found cached workitem, clearing overwrite workitem [${workitemId}]`
      );
      this.workitemsCache.set(workitemId, {
        ...cachedWorkitem,
        overwrite: void 0
      });
    }
  }
  /**
   *
   * Store a local overwrite for a workitem in the cache.
   * @param workitemId - ID of the workitem to set overwrite for.
   * @param overwrite - Partial workitem data to overwrite locally
   */
  setWorkitemLocalOverwrite(workitemId, overwrite) {
    this.logger.debug(`WorkitemCache - setting local overwrite workitem [${workitemId}]`);
    const cachedWorkitem = this.workitemsCache.get(workitemId);
    if (cachedWorkitem) {
      this.workitemsCache.set(workitemId, {
        ...cachedWorkitem,
        overwrite: { ...overwrite }
      });
    } else {
      this.workitemsCache.set(workitemId, {
        expiresAt: Date.now() + CACHE_TIME,
        overwrite: { ...overwrite }
      });
    }
  }
  /**
   * Applies any local overwrite to a workitem
   * @param workitem - The workitem to apply local overwrite.
   * @returns The updated workitem if data was found.
   */
  applyWorkitemLocalOverwrite(workitem) {
    const cachedWorkitem = this.workitemsCache.get(workitem.workitemId);
    if (cachedWorkitem?.overwrite) {
      this.logger.debug(
        "WorkitemCache - applying local overwrite",
        workitem.workitemId,
        cachedWorkitem.overwrite
      );
      return { ...workitem, ...cachedWorkitem.overwrite };
    }
    return workitem;
  }
  setLocalWorkitemAsTerminated(workitemId, onTimeout) {
    this.setWorkitemLocalOverwrite(workitemId, { actions: ["dispositioned"], state: "terminated" });
    if (onTimeout !== void 0) {
      this.logger.debug(
        "WorkitemCache - disposition is not enabled, setting termination timeout - ",
        workitemId
      );
      const existingTimeout = this.terminationTimeouts.get(workitemId);
      if (existingTimeout) {
        clearTimeout(existingTimeout);
      }
      const timeout = setTimeout(() => {
        this.workitemsCache.delete(workitemId);
        onTimeout();
        this.clearTerminationTimeout(workitemId);
      }, TERMINATION_TIMEOUT);
      this.terminationTimeouts.set(workitemId, timeout);
    } else {
      this.logger.debug("WorkitemCache - disposition is enabled, skipping termination timeout");
    }
  }
  /**
   * Cleans up expired workitems from the cache.
   */
  cleanUpCache() {
    this.logger.trace("WorkitemCache - clearing cache, current size:", this.workitemsCache.size);
    const now = Date.now();
    for (const [workitemId, cachedWorkitem] of this.workitemsCache.entries()) {
      if (cachedWorkitem.expiresAt <= now) {
        this.workitemsCache.delete(workitemId);
      }
    }
    this.logger.trace("WorkitemCache - cleared cache, new size:", this.workitemsCache.size);
  }
};

// src/services/entitlements.ts
var EntitlementsService = class {
  stateService;
  schemaTypeClient;
  logger;
  constructor({
    loggerService,
    schemaTypeClient,
    stateService
  }) {
    this.stateService = stateService;
    this.schemaTypeClient = schemaTypeClient;
    this.logger = loggerService;
  }
  async fetchUserEntitlements() {
    this.logger.trace("EntitlementsService - fetchUserEntitlements");
    const hasUserEntitlementSchemaType = this.schemaTypeClient.has("entitlementsuserentitlement");
    if (!hasUserEntitlementSchemaType) {
      return [];
    }
    const data = await this.schemaTypeClient.search(
      "entitlementsuserentitlement",
      { q: "*" }
    );
    this.stateService.setUserEntitlements(data.objects ?? []);
    return data.objects ?? [];
  }
  async fetchTenantEntitlements() {
    this.logger.trace("EntitlementsService - fetchTenantEntitlements");
    const hasTenantEntitlementSchemaType = this.schemaTypeClient.has(
      "entitlementstenantentitlement"
    );
    if (!hasTenantEntitlementSchemaType) {
      return [];
    }
    const data = await this.schemaTypeClient.search(
      "entitlementstenantentitlement",
      { q: "*" }
    );
    this.stateService.setTenantEntitlements(data.objects ?? []);
    return data.objects ?? [];
  }
  hasEveryEntitlement(expectedEntitlements, entitlements) {
    return expectedEntitlements.every((expected) => {
      return entitlements.some((entitlement) => {
        return entitlement.assignedFeatures.includes(expected);
      });
    });
  }
  userHasEntitlements(expectedEntitlements) {
    const entitlements = this.stateService.getUserEntitlements();
    const expected = expectedEntitlements instanceof Set ? expectedEntitlements : new Set(expectedEntitlements);
    return this.hasEveryEntitlement(Array.from(expected), entitlements ?? []);
  }
  tenantHasEntitlements(expectedEntitlements) {
    const entitlements = this.stateService.getTenantEntitlements();
    const expected = expectedEntitlements instanceof Set ? expectedEntitlements : new Set(expectedEntitlements);
    return this.hasEveryEntitlement(Array.from(expected), entitlements ?? []);
  }
  hasSomeEntitlements(expectedEntitlements, entitlements) {
    return expectedEntitlements.some((expected) => {
      return entitlements.some((entitlement) => {
        return entitlement.assignedFeatures.includes(expected);
      });
    });
  }
  hasSomeUserEntitlements(expectedEntitlements) {
    const entitlements = this.stateService.getUserEntitlements();
    const expected = expectedEntitlements instanceof Set ? expectedEntitlements : new Set(expectedEntitlements);
    return this.hasSomeEntitlements(Array.from(expected), entitlements ?? []);
  }
  hasSomeTenantEntitlements(expectedEntitlements) {
    const entitlements = this.stateService.getTenantEntitlements();
    const expected = expectedEntitlements instanceof Set ? expectedEntitlements : new Set(expectedEntitlements);
    return this.hasSomeEntitlements(Array.from(expected), entitlements ?? []);
  }
};

// src/services/persister.ts
import {
  experimental_createQueryPersister
} from "@tanstack/query-persist-client-core";
var PersisterClient = class {
  asyncStorageService;
  persister;
  constructor({ asyncStorageService }) {
    this.asyncStorageService = asyncStorageService;
  }
  createQueryPersister(userID, encrypted) {
    const asyncStorage = this.asyncStorageService.createAsyncStorage({
      encryptionKey: encrypted ? userID : void 0,
      name: `ncx-sdk-cache-${userID}`
    });
    const persister = experimental_createQueryPersister({
      buster: `version=${CACHE_BUSTER_VERSION}, encrypted=${encrypted}`,
      deserialize: (cached) => cached,
      // change buster version when there's a breaking change to a persisted data structure
      maxAge: Infinity,
      serialize: (persistedQuery) => persistedQuery,
      storage: asyncStorage
    });
    this.persister = persister;
    return this.persister;
  }
  getQueryPersister() {
    return this.persister;
  }
  dispose() {
    this.persister = void 0;
  }
};

// src/services/logger.ts
var logLevels = ["trace", "debug", "info", "warn", "error", "fatal"];
var formatSpecifiers = "%c%s%c%s";
var sdk = "[ncx-sdk]";
var sdkStyles = "";
var LoggerService = class {
  level;
  datadogService;
  stateService;
  constructor({
    datadogService,
    stateService
  }) {
    this.datadogService = datadogService;
    this.stateService = stateService;
  }
  trace(...args) {
    this.log("trace", ...args);
  }
  debug(...args) {
    this.log("debug", ...args);
  }
  info(...args) {
    this.log("info", ...args);
  }
  warn(...args) {
    this.log("warn", ...args);
  }
  error(...args) {
    this.log("error", ...args);
  }
  fatal(...args) {
    this.log("fatal", ...args);
  }
  setLevel(level) {
    this.level = level;
  }
  log(level, ...args) {
    if (!this.shouldLog(level)) {
      return;
    }
    const method = level === "fatal" ? "error" : level;
    const uppercaseLogLevel = level.toUpperCase();
    if (this.stateService.getPlatform() !== "web") {
      console.log(
        formatSpecifiers,
        sdkStyles,
        sdk,
        uppercaseLogLevel,
        ...args
      );
      return;
    } else {
      console[method](
        formatSpecifiers,
        sdkStyles,
        sdk,
        this.getLogLevelStyles(level),
        uppercaseLogLevel,
        ...args
      );
    }
    this.datadogService?.addLog(
      `${sdk} ${uppercaseLogLevel}`,
      {
        details: args.length > 1 ? args : void 0,
        message: args.length === 1 ? String(args[0]) : args.map(String).join(" ")
      },
      level
    );
  }
  shouldLog(level) {
    if (!this.level) {
      return false;
    }
    if (this.level === "trace" || level === this.level) {
      return true;
    }
    return logLevels.findIndex((item) => item === level) >= logLevels.findIndex((item) => item === this.level);
  }
  getLogLevelStyles(level) {
    let backgroundColor;
    switch (level) {
      case "trace":
        backgroundColor = "#424F81";
        break;
      case "debug":
        backgroundColor = "#008763";
        break;
      case "info":
        backgroundColor = "#0071FF";
        break;
      case "warn":
        backgroundColor = "#ED6A21";
        break;
      case "error":
        backgroundColor = "#D00041";
        break;
      case "fatal":
        backgroundColor = "#C30025";
        break;
    }
    return `background-color: ${backgroundColor}; color: white; letter-spacing: 0.3em; padding: 4px; border-radius: 5px; margin: 7px`;
  }
};

// src/utilities/socketClient.ts
var extractHostFromBaseUrl = (baseUrl) => {
  let host = baseUrl.slice(Math.max(0, baseUrl.indexOf("//") + 2));
  if (host.includes("/")) {
    host = host.slice(0, Math.max(0, host.indexOf("/")));
  }
  if (host.includes(":")) {
    host = host.slice(0, Math.max(0, host.indexOf(":")));
  }
  return host;
};
var buildSocketURL = (baseUrl) => {
  return `wss://ws-${extractHostFromBaseUrl(baseUrl)}/event-relay/websocket`;
};
var buildUserSubscriptionURL = (tenantId, userId) => {
  return `/topic/${tenantId}/user/${userId}`;
};
var buildStatsSubscriptionURL = (tenantId, userId) => {
  return `/topic/${tenantId}/stats/${userId}`;
};
var SocketClient = class {
  socket = null;
  eventsService = dependencyInjectionContainer.resolve("eventsService");
  stateService = dependencyInjectionContainer.resolve("stateService");
  async _connect({ callback, onSocketStatusChange, subscriptionURL }) {
    if (this.socket) {
      await this.disconnect();
    }
    const webSocketURL = buildSocketURL(axiosInstance.defaults.baseURL);
    this.socket = new Socket({
      callback,
      getToken: () => {
        return this.stateService.getToken() ?? "";
      },
      id: generateNewId(),
      onSocketStatusChange,
      subscriptionURL,
      webSocketURL
    });
    this.socket.connect();
  }
  async disconnect() {
    if (!this.socket) {
      return;
    }
    await this.socket.disconnect();
    this.socket = null;
  }
  isSocketInitiated() {
    return this.socket?.subscriptionURL ? true : false;
  }
};
var UserSocketClient = class extends SocketClient {
  /**
   * Connects to the socket server.
   *
   * @returns A promise that resolves when the connection is established.
   */
  async connect() {
    const logger = dependencyInjectionContainer.resolve("loggerService");
    logger.trace("UserSocketClient - connect");
    this.eventsService.emitExternal(ExternalEvents.InitConnectUserSocket);
    const tenantId = this.stateService.getTenantId();
    const userId = this.stateService.getUserId();
    if (!tenantId || !userId) {
      this.eventsService.emitExternal(ExternalEvents.InitConnectUserSocketError);
      throw new Error("SocketClient - tenantId and userId not set");
    }
    return this._connect({
      callback: (message) => {
        const { id: id2, name, offerId, workitemId } = message;
        logger.debug(`UserSocketClient - received message [${name}]`, message);
        if (id2 && SupportedFCMEvents.includes(name)) {
          this.stateService.set(id2, "added");
        } else if (workitemId) {
          this.stateService.set(`${workitemId}-${name}`, "added");
        } else if (offerId) {
          this.stateService.set(`${offerId}-${name}`, "added");
        }
        this.eventsService.emitExternal("Duplicate-SDKUserSocketEvent", message);
        this.eventsService.emitInternal(message.name, message);
      },
      onSocketStatusChange: (socketState) => {
        this.stateService.setUserSocketState(socketState);
        this.eventsService.emitExternal(ExternalEvents.UserSocketStateChangedNotification, socketState);
      },
      subscriptionURL: buildUserSubscriptionURL(tenantId, userId)
    });
  }
};
var StatisticsSocketClient = class extends SocketClient {
  /**
   * Connects to the server and establishes a WebSocket connection.
   *
   * @returns A Promise that resolves when the connection is established.
   */
  async connect() {
    this.eventsService.emitExternal(ExternalEvents.InitConnectStatisticsSocket);
    const tenantId = this.stateService.getTenantId();
    const userId = this.stateService.getUserId();
    if (!tenantId || !userId) {
      this.eventsService.emitExternal(ExternalEvents.InitConnectStatisticsSocketError);
      throw new Error("SocketClient - tenantId and userId not set");
    }
    return this._connect({
      callback: (message) => {
        this.eventsService.emitExternal("Duplicate-SDKStatisticsSocketEvent", message);
        this.eventsService.emitStatistic(message.name, message);
        this.eventsService.emitExternal(ExternalEvents.InitConnectStatisticsSocketSuccess);
      },
      subscriptionURL: buildStatsSubscriptionURL(tenantId, userId)
    });
  }
};

// node_modules/js-base64/base64.mjs
var _hasBuffer = typeof Buffer === "function";
var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var b64chs = Array.prototype.slice.call(b64ch);
var b64tab = ((a) => {
  let tab = {};
  a.forEach((c, i) => tab[c] = i);
  return tab;
})(b64chs);
var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
var _fromCC = String.fromCharCode.bind(String);
var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
var _tidyB64 = (s) => s.replace(/[^A-Za-z0-9\+\/]/g, "");
var btoaPolyfill = (bin) => {
  let u32, c0, c1, c2, asc = "";
  const pad = bin.length % 3;
  for (let i = 0; i < bin.length; ) {
    if ((c0 = bin.charCodeAt(i++)) > 255 || (c1 = bin.charCodeAt(i++)) > 255 || (c2 = bin.charCodeAt(i++)) > 255)
      throw new TypeError("invalid character found");
    u32 = c0 << 16 | c1 << 8 | c2;
    asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
  }
  return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
};
var _btoa = typeof btoa === "function" ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
  const maxargs = 4096;
  let strs = [];
  for (let i = 0, l = u8a.length; i < l; i += maxargs) {
    strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
  }
  return _btoa(strs.join(""));
};
var cb_utob = (c) => {
  if (c.length < 2) {
    var cc = c.charCodeAt(0);
    return cc < 128 ? c : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
  } else {
    var cc = 65536 + (c.charCodeAt(0) - 55296) * 1024 + (c.charCodeAt(1) - 56320);
    return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
  }
};
var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
var utob = (u) => u.replace(re_utob, cb_utob);
var _encode = _hasBuffer ? (s) => Buffer.from(s, "utf8").toString("base64") : _TE ? (s) => _fromUint8Array(_TE.encode(s)) : (s) => _btoa(utob(s));
var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
var cb_btou = (cccc) => {
  switch (cccc.length) {
    case 4:
      var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
      return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
    case 3:
      return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
    default:
      return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
  }
};
var btou = (b) => b.replace(re_btou, cb_btou);
var atobPolyfill = (asc) => {
  asc = asc.replace(/\s+/g, "");
  if (!b64re.test(asc))
    throw new TypeError("malformed base64.");
  asc += "==".slice(2 - (asc.length & 3));
  let u24, bin = "", r1, r2;
  for (let i = 0; i < asc.length; ) {
    u24 = b64tab[asc.charAt(i++)] << 18 | b64tab[asc.charAt(i++)] << 12 | (r1 = b64tab[asc.charAt(i++)]) << 6 | (r2 = b64tab[asc.charAt(i++)]);
    bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
  }
  return bin;
};
var _atob = typeof atob === "function" ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c) => c.charCodeAt(0)));
var _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
var decode = (src) => _decode(_unURI(src));

// src/internal/services/token.ts
var TokenService = class {
  refreshTimeout;
  stateService;
  eventsService;
  logger;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.logger = loggerService;
  }
  /**
   * The `startTokenRefreshCycle` function asynchronously initiates a token refresh cycle by calling the
   * `pollTokenRefresh` method.
   */
  async startTokenRefreshCycle() {
    this.logger.trace("TokenService - startTokenRefreshCycle");
    await this.pollTokenRefresh();
  }
  /**
   * The `stopTokenRefreshCycle` function stops the token refresh cycle by clearing the refresh timeout.
   */
  stopTokenRefreshCycle() {
    this.logger.trace("TokenService - stopTokenRefreshCycle");
    if (this.refreshTimeout) {
      clearTimeout(this.refreshTimeout);
    }
  }
  /**
   * The function `isTokenExpiringSoon` checks if a token's expiration time is less than 1 hour from the
   * current time.
   * @returns The function `isTokenExpiringSoon` returns a boolean value indicating whether the token
   * expiration is less than 1 hour away from the current time. If the token expiration is within the
   * next hour, it returns `true`, otherwise it returns `false`.
   */
  isTokenExpiringSoon() {
    this.logger.trace("TokenService - isTokenExpiringSoon");
    const expiration = this.getTokenExpiration();
    if (!expiration) {
      return false;
    }
    const now = Math.floor(Date.now() / 1e3);
    const diff = expiration - now;
    return diff < 60 * 60;
  }
  /**
   * Retrieves the expiration time of a token from its payload.
   * @returns The expiration time of the token in timestamp if it exists
   * and is valid. If the token is not present or the payload cannot be decoded, it returns
   * `undefined`.
   */
  getTokenExpiration() {
    this.logger.trace("TokenService - getTokenExpiration");
    const token = this.stateService.getToken();
    if (!token) {
      throw new Error("No token found");
    }
    const [, payload] = token.split(".");
    if (!payload) {
      throw new Error("Invalid token");
    }
    const decodedPayload = JSON.parse(decode(payload));
    const expiration = decodedPayload.exp;
    return expiration;
  }
  /**
   * The function refreshToken in TypeScript makes a request to refresh a token and updates various
   * data fields accordingly.
   * @returns {Promise<RefreshTokenResponse>} A Promise that resolves with an object containing the new token and location
   */
  async refreshToken() {
    this.logger.trace("TokenService - refreshToken");
    try {
      const response = await axiosInstance.get("/provider/api/token-refresh");
      this.logger.info(
        `TokenService - refreshToken resolved successfully, received location [${response.data.location}] and clientLocation [${response.data.clientLocation}]`
      );
      this.stateService.setToken(response.data.token);
      this.stateService.setBaseURL(response.data.location);
      this.stateService.setClientLocation(response.data.clientLocation);
      upsertDefaultRequestHeader("Authorization", response.data.token);
      this.eventsService.emitExternal(ExternalEvents.TokenRefreshNotification, response.data);
      return response.data;
    } catch (error) {
      this.logger.error("TokenService - refreshToken - error", error);
      throw error;
    }
  }
  async pollTokenRefresh() {
    try {
      this.logger.trace("TokenService - pollTokenRefresh");
      await this.refreshToken();
    } catch (error) {
      this.logger.error("TokenService - pollTokenRefresh - refreshToken failed", error);
    } finally {
      this.refreshTimeout = setTimeout(() => {
        void this.pollTokenRefresh();
      }, TOKEN_REFRESH_INTERVAL);
    }
  }
};

// src/telephony/telephony.ts
var AbstractTelephony = class {
  session;
  user;
  multiloginDevice;
  telephonyConfig;
  edgeId;
  debug = false;
  isConnected = true;
  logger;
  audioOutputDeviceId;
  audioInputDeviceId;
  constructor({ loggerService }) {
    this.logger = loggerService;
  }
  /**
   * Resolves if able to switch the audio input device to the one specified by `deviceId`.
   * Throws when unsupported or error opening the MediaStream for the device.
   *
   * `deviceId` can be obtained from the list of devices provided by `NcxSdk.getTelephonyService().events$`
   * observable, or through the `useAvailableAudioDevices()` React hook that consumes that observable.
   *
   * @param deviceId - identifies the device to be selected as audio input
   */
  updateAudioInputDevice(_deviceId) {
    return Promise.reject(new Error("Method not implemented."));
  }
  /**
   * Resolves if able to switch the audio output device to the one specified by `deviceId`.
   * Throws when unsupported or error opening the MediaStream for the device.
   *
   * `deviceId` can be obtained from the list of devices provided by `NcxSdk.getTelephonyService().events$`
   * observable, or through the `useAvailableAudioDevices()` React hook that consumes that observable.
   *
   * @param deviceId - identifies the device to be selected as audio output
   */
  updateAudioOutputDevice(_deviceId) {
    return Promise.reject(new Error("Method not implemented."));
  }
  async refreshTelephonyToken() {
    const telephony = this.telephonyConfig;
    if (!telephony) {
      throw new Error("Missing telephony config.");
    }
    if (telephony.type !== "WEBRTC") {
      throw new Error(`Cannot refresh token for type: ${telephony.type}.`);
    }
    if (!telephony.tokenRefreshUrl) {
      throw new Error(
        "Missing the token refresh URL in the telephony configuration of the session."
      );
    }
    this.logger.debug("AbstractTelephony - refreshTelephonyToken", this.telephonyConfig);
    try {
      const response = await axiosInstance.get(telephony.tokenRefreshUrl);
      return response.data;
    } catch (error) {
      this.logger.error(`AbstractTelephony - refreshTelephonyToken - error`, error);
      throw error;
    }
  }
  getSocketStatus() {
    return { isConnected: false, state: "unknown" };
  }
  reconnectSocket() {
    this.logger.warn("AbstractTelephony - reconnectSocket not implemented");
  }
  networkReconnection() {
    this.logger.warn("AbstractTelephony - networkReconnection not implemented");
  }
  set isOnline(value) {
    this.isConnected = value;
  }
  get isOnline() {
    return this.isConnected;
  }
  checkToken() {
    return Promise.resolve(true);
  }
};

// src/telephony/pstn.ts
var PSTN = class extends AbstractTelephony {
  init() {
    return Promise.resolve();
  }
  close() {
    return Promise.resolve();
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logout() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  activeConnection() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hangup() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnectAll() {
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-explicit-any
  status() {
  }
  dtmf(_digits) {
    return Promise.resolve();
  }
};

// src/services/language.ts
import { isAxiosError as isAxiosError3 } from "axios";
var LanguageService = class {
  stateService;
  eventsService;
  translatorService;
  internalStateManagementService;
  dataService;
  logger;
  constructor({
    dataService,
    eventsService,
    internalStateManagementService,
    loggerService,
    stateService,
    translatorService
  }) {
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.translatorService = translatorService;
    this.internalStateManagementService = internalStateManagementService;
    this.dataService = dataService;
    this.logger = loggerService;
  }
  async changeLanguage(language) {
    this.logger.debug(`LanguageService - changeLanguage - language [${language}]`);
    const languageTranslations = this.stateService.getTranslations(language);
    this.stateService.setLanguage(language);
    try {
      let response;
      if (!languageTranslations) {
        response = await this.internalStateManagementService.upsertValueFromAPI(
          "translations",
          `/provider/translation/translationkey/${this.stateService.getLanguage()}`
        );
      } else {
        response = {
          data: languageTranslations
        };
      }
      this.stateService.setTranslations(language, response.data);
      this.translatorService.load(this.stateService.getLanguage(), response.data);
      upsertDefaultRequestHeader("Accept-Language", language);
      if (this.stateService.getSession()) {
        await this.refreshData();
      }
      this.eventsService.emitExternal(ExternalEvents.LanguageLoaded);
      return response.data;
    } catch (error) {
      let message = "";
      if (isAxiosError3(error)) {
        message = JSON.stringify(error.toJSON());
      }
      this.logger.error("LanguageService - changeLanguage - error", message);
      throw error;
    }
  }
  async refreshData() {
    await this.internalStateManagementService.upsertValueFromAPI(
      "campaigns",
      "/users/api/types/campaign?rows=1000"
    );
    this.dataService.getHelper("campaigns").processData(this.stateService.get("campaigns"));
    await this.internalStateManagementService.upsertValueFromAPI(
      "disposition",
      "/users/api/types/disposition?q=*"
    );
    this.dataService.getHelper("disposition").processData(this.stateService.get("disposition"));
    await this.internalStateManagementService.upsertValueFromAPI(
      "statuses",
      "/users/api/types/status?q=*&rows=1000",
      ["_id", "name", "status", "presentToAgent"]
    );
    this.dataService.getHelper("statuses").processData(this.stateService.get("statuses"));
    SchemaTypes.set("statuses", new SchemaType("statuses", this.dataService));
  }
};

// src/internal/services/localStorage.ts
var BaseLocalStorageService = class {
  getValue(_key) {
    return Promise.resolve(null);
  }
  setValue(_key, _value) {
    return Promise.resolve();
  }
  async upsertObjectValue(key, value) {
    const currentValue = await this.getValue(key);
    if (!currentValue) {
      await this.setValue(key, JSON.stringify(value));
      return value;
    }
    if (currentValue.startsWith("{")) {
      try {
        const parsedCurrentValue = JSON.parse(currentValue);
        const updatedValue = { ...parsedCurrentValue, ...value };
        await this.setValue(key, JSON.stringify(updatedValue));
        return updatedValue;
      } catch (error) {
        return null;
      }
    }
    return null;
  }
  async getObjectValue(key) {
    const currentValue = await this.getValue(key);
    if (currentValue?.startsWith("{")) {
      try {
        const parsedCurrentValue = JSON.parse(currentValue);
        return parsedCurrentValue;
      } catch (error) {
        return null;
      }
    } else {
      return null;
    }
  }
  async setObjectValue(key, value) {
    await this.setValue(key, JSON.stringify(value));
  }
};

// src/services/deviceManagement.ts
var DeviceManagementService = class {
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
  }
  /**
   * Fetches the list of devices from the device management API.
   */
  async fetchDevices() {
    this.logger.trace("DeviceManagement - fetchDevices");
    const response = await axiosInstance.get(
      "/device-management/api/devices"
    );
    return response.data;
  }
  /**
   *
   * Unassigns a device from a user, this will remove `userId` from the device.
   *
   * @param payload The required attributes of a device to unassign or delete.
   * @returns The device that was unassigned
   */
  async unassignDevice(payload) {
    this.logger.debug("DeviceManagement - unassignDevice - invoked with payload:", payload);
    const response = await axiosInstance.delete(
      `/device-management/api/devices/${payload.providerId}/assignments`,
      {
        data: payload
      }
    );
    return response.data;
  }
  /**
   *
   * Completely deletes a device.
   *
   * @param payload The required attributes of a device to unassign or delete.
   * @returns The device that was deleted
   */
  async deleteDevice(payload) {
    this.logger.debug("DeviceManagement - deleteDevice - invoked with payload:", payload);
    const response = await axiosInstance.delete(
      `/device-management/api/devices/${payload.providerId}`,
      {
        data: payload
      }
    );
    return response.data;
  }
};

// src/internal/dependencyInjectionContainer/index.ts
var dependencyInjectionContainer = createContainer({
  strict: true
});
var registerDependencies = () => {
  dependencyInjectionContainer.register({
    acdService: asClass(ACDService).singleton(),
    agentAssistService: asClass(AgentAssistService).singleton(),
    aiEmployeeService: asClass(AIEmployeeService).singleton(),
    audioQualityService: asClass(AudioQualityService).singleton(),
    campaignService: asClass(CampaignService).singleton(),
    contactService: asClass(ContactService).singleton(),
    dataIngestionService: asClass(DataIngestionService).singleton(),
    dataService: asClass(DataService).singleton(),
    deviceManagement: asClass(DeviceManagementService).singleton(),
    dispositionService: asClass(DispositionService).singleton(),
    entitlementsService: asClass(EntitlementsService).singleton(),
    eventsService: asClass(EventsService).singleton(),
    functionsService: asClass(FunctionsService).singleton(),
    integrationsService: asClass(IntegrationsService).singleton(),
    internalStateManagementService: asClass(InternalStateManagementService).singleton(),
    languageService: asClass(LanguageService).singleton(),
    loggerService: asClass(LoggerService).singleton(),
    myUserSettingsService: asClass(MyUserSettingsService).singleton(),
    outboundModeService: asClass(OutboundModeService).singleton(),
    persisterClient: asClass(PersisterClient).singleton(),
    phoneStateService: asClass(PhoneStatesService).singleton(),
    proactiveAgentAssistService: asClass(ProactiveAgentAssistService).singleton(),
    provisioningService: asClass(ProvisioningService).singleton(),
    recordingsService: asClass(RecordingsService).singleton(),
    relatedArticlesService: asClass(RelatedArticlesService).singleton(),
    resourceManager: asClass(ResourceManager).singleton(),
    searchService: asClass(SearchService).singleton(),
    stateService: asClass(StateService).singleton(),
    statisticsService: asClass(StatisticsService).singleton(),
    statisticsSocketClient: asClass(StatisticsSocketClient).singleton(),
    statusService: asClass(StatusService).singleton(),
    tokenService: asClass(TokenService).singleton(),
    translatorService: asClass(TranslatorService).singleton(),
    userSocketClient: asClass(UserSocketClient).singleton(),
    videoService: asClass(VideoService).singleton(),
    widgetService: asClass(WidgetService).singleton(),
    workitemCache: asClass(WorkitemCache).singleton()
  });
};
var registerBaseDependencies = () => {
  if (!dependencyInjectionContainer.hasRegistration("freeswitch")) {
    dependencyInjectionContainer.register({
      // TODO: find a way to set a default value, since we won't create a Telephony implementation for the service worker environment
      freeswitch: asClass(PSTN).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("twilio")) {
    dependencyInjectionContainer.register({
      // TODO: find a way to set a default value, since we won't create a Telephony implementation for the service worker environment
      twilio: asClass(PSTN).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("pstn")) {
    dependencyInjectionContainer.register({
      // TODO: find a way to set a default value, since we won't create a Telephony implementation for the service worker environment
      pstn: asClass(PSTN).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("datadogService")) {
    dependencyInjectionContainer.register({
      datadogService: asValue(null)
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("localStorageService")) {
    dependencyInjectionContainer.register({
      localStorageService: asClass(BaseLocalStorageService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("schemaTypeClient")) {
    dependencyInjectionContainer.register({
      schemaTypeClient: asClass(BaseSchemaTypeClient).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("telephonyEventsService")) {
    dependencyInjectionContainer.register({
      telephonyEventsService: asClass(BaseTelephonyEventsService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("telephonyService")) {
    dependencyInjectionContainer.register({
      telephonyService: asClass(BaseTelephonyService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("userService")) {
    dependencyInjectionContainer.register({
      userService: asClass(BaseUserService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("chatService")) {
    dependencyInjectionContainer.register({
      chatService: asClass(BaseChatService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("workitemsService")) {
    dependencyInjectionContainer.register({
      workitemsService: asClass(BaseWorkitemsService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("socialService")) {
    dependencyInjectionContainer.register({
      socialService: asClass(BaseSocialService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("ticketService")) {
    dependencyInjectionContainer.register({
      ticketService: asClass(BaseTicketService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("conversationService")) {
    dependencyInjectionContainer.register({
      conversationService: asClass(BaseConversationService).singleton()
    });
  }
  if (!dependencyInjectionContainer.hasRegistration("copilotService")) {
    dependencyInjectionContainer.register({
      copilotService: asClass(BaseCopilotService).singleton()
    });
  }
};

// src/internal/services/aiEmployee.ts
var AIEmployeeService = class {
  eventsService;
  logger;
  constructor({
    eventsService,
    loggerService
  }) {
    loggerService.trace("AIEmployeeService - constructor");
    this.eventsService = eventsService;
    this.logger = loggerService;
    this.handleAiEmployeeUpdatedNotification();
  }
  handleAiEmployeeUpdatedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.AiEmployeeUpdatedNotification)).subscribe((event) => {
      const incoming = event.data?.aiemployee;
      if (!incoming?.aiemployeeId) {
        this.logger.warn(
          "AIEmployeeService - AiEmployeeUpdatedNotification - missing aiemployee payload",
          // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
          { hasAiemployee: !!event.data?.aiemployee, hasData: !!event.data }
        );
        return;
      }
      const queryKey = getAIEmployeesQueryOptions().queryKey;
      this.logger.debug("AIEmployeeService - AiEmployeeUpdatedNotification", {
        aiemployeeId: incoming.aiemployeeId
      });
      queryClient.setQueryData(queryKey, (current) => {
        const employees = current?.employees ?? [];
        const idx = employees.findIndex((e) => e.aiemployeeId === incoming.aiemployeeId);
        if (incoming.deletedAt) {
          return {
            cursor: current?.cursor,
            employees: idx >= 0 ? employees.filter((_, i) => i !== idx) : employees
          };
        }
        const next = [...employees];
        if (idx >= 0) {
          next[idx] = { ...next[idx], ...incoming };
        } else {
          next.push(incoming);
        }
        return { cursor: current?.cursor, employees: next };
      });
      const queryPersister = dependencyInjectionContainer.resolve("persisterClient").getQueryPersister();
      queryPersister?.persistQueryByKey(queryKey, queryClient).catch((error) => {
        this.logger.debug("AIEmployeeService - persist error", error);
      });
    });
  }
};

// src/internal/services/outboundList.ts
var BaseOutboundListService = class {
  stateService;
  eventsService;
  logger;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.logger = loggerService;
    this.handleCampaignTotalsNotification();
  }
  /**
   * Resets all callbacks from an outbound list.
   *
   * @param listId - The ID of the list.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while resetting all callbacks .
   */
  async resetAllCallbacks(listId) {
    this.logger.trace("BaseOutboundListService - resetAllCallbacks");
    return axiosInstance.get(`/data/api/types/outboundlist/${listId}/resetcallbacks`, {});
  }
  /**
   * Resets callbacks from selected types.
   *
   * @param attempts - The number of attempts
   * @param listId - The ID of the list.
   * @param typesSelected - An object than contains the types to be used on the API call.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while resetting the callbacks .
   */
  async resetCallbacksByType({
    abandoned,
    agentCallbacks,
    answeringMachine,
    attempts = 0,
    busy,
    errorDialing,
    listId,
    noAnswer
  }) {
    const payload = {
      actions: [],
      attempts: `thrioTotalAttempts < ${attempts}`
    };
    const { actions } = payload;
    if (abandoned) {
      actions.push(-16, -15);
    }
    if (agentCallbacks) {
      actions.push(-101);
    }
    if (answeringMachine) {
      actions.push(-107, -18, -19);
    }
    if (busy) {
      actions.push(-103);
    }
    if (errorDialing) {
      actions.push(-12, -14);
    }
    if (noAnswer) {
      actions.push(-106);
    }
    this.logger.debug(
      "BaseOutboundListService - resetCallbacksByType - invoked with payload:",
      payload
    );
    const response = await axiosInstance.post(
      `/data/api/types/outboundlist/${listId}/resetdispositions`,
      payload
    );
    return response;
  }
  /**
   * Resets callbacks from selected dispositions.
   *
   * @param listId - The ID of the list.
   * @param dispositionIds - An array than contains the ids of the dispositions to be used on the API call.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while resetting the callbacks .
   */
  async resetCallbacksByDisposition(listId, dispositionIds) {
    const payload = { dispositions: dispositionIds };
    this.logger.debug(
      "BaseOutboundListService - resetCallbacksByDisposition - invoked with payload:",
      payload
    );
    return axiosInstance.post(`/data/api/types/outboundlist/${listId}/resetdispositions`, payload);
  }
  /**
   * Starts or stops a list.
   *
   * @param listId - The ID of the list.
   * @param active - A boolean value to update the status of the list. True to start the list, false to stop it.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while resetting the callbacks .
   * @deprecated sdk.getSchemaTypeClient().update("outboundlist", { id: "...", data: {...} })
   */
  async updateOutboundListStatus(listId, active) {
    this.logger.warn(
      'BaseOutboundListService - updateOutboundListStatus is deprecated, use sdk.getSchemaTypeClient().update("outboundlist", { id: "...", data: {...} })'
    );
    const url = this.stateService.getSchemaTypeLinkURI({
      link: "update",
      name: "outboundlist",
      replacements: { id: listId }
    });
    const payload = { active };
    return axiosInstance.patch(url, payload);
  }
  async createOutboundList({
    file,
    ...rest
  }) {
    this.logger.warn(
      'BaseOutboundListService - createOutboundList is deprecated, use sdk.getSchemaTypeClient().create("outboundlist", { data: {...} })'
    );
    const language = this.stateService.getLanguage();
    const object = {
      ...rest,
      file: file.name,
      localizations: {
        name: {
          [language]: {
            language,
            value: rest.name
          }
        }
      },
      objectType: "outboundlist"
    };
    const formData = new FormData();
    formData.append("file_file", file);
    formData.append("object", JSON.stringify(object));
    const outboundList = this.stateService.getSchemaTypeLinkURI({
      link: "create",
      name: "outboundlist"
    });
    const { data } = await axiosInstance.post(outboundList, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    const campaignOutboundList = this.stateService.getSchemaTypeLinkURI({
      link: "create",
      name: "campaignoutboundlist"
    });
    await axiosInstance.post(campaignOutboundList, {
      campaignId: object.campaignId,
      outboundlistId: data.outboundlistId
    });
    return data;
  }
  handleCampaignTotalsNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CampaignTotalsNotification)).subscribe((data) => {
      this.logger.debug("BaseOutboundListService - handleCampaignTotalsNotification", data);
      const totalsNotification = data.getProperties();
      const outboundStatistics = {
        campaignId: totalsNotification.campaignId,
        totalCallbacks: totalsNotification.totalCallbacks,
        totalCompleted: totalsNotification.totalCompleted,
        totalInList: totalsNotification.totalInList,
        totalLeads: totalsNotification.totalLeads,
        totalNewLeads: totalsNotification.totalNewLeads
      };
      this.eventsService.emitExternal(
        ExternalEvents.CampaignTotalsNotification,
        outboundStatistics
      );
    });
  }
};

// src/internal/services/ticket.ts
var isFetchTicketByTicketIdPayload = (payload) => {
  if (Object.hasOwn(payload, "ticketId")) {
    return true;
  }
  return false;
};
var BaseTicketService = class _BaseTicketService {
  eventsService;
  stateService;
  schemaTypeClient;
  logger;
  ticketsLoading = false;
  ticketLinkedWorkitemsLoading = /* @__PURE__ */ new Map();
  queryCacheUnsubscribe;
  constructor({
    eventsService,
    loggerService,
    schemaTypeClient,
    stateService
  }) {
    this.eventsService = eventsService;
    this.stateService = stateService;
    this.schemaTypeClient = schemaTypeClient;
    this.logger = loggerService;
    this.handleSupervisorTicketUpdateNotification();
    this.handleNewTicketNotificationForCache();
    this.handleUpdateTicketNotificationForCache();
    this.subscribeToTicketQueryCacheChanges();
  }
  handleSupervisorTicketUpdateNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SupervisorTicketUpdateNotification)).subscribe((event) => {
      this.logger.debug("BaseTicketService - handleSupervisorTicketUpdateNotification", event);
      this.eventsService.emitExternal(
        ExternalEvents.SupervisorTicketUpdateNotification,
        event.data
      );
    });
  }
  /**
   * Fetches the ticket statuses from the server.
   * @returns A promise that resolves to a response of ticket statuses.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchStatuses() {
    this.logger.warn("BaseTicketService - fetchStatuses is deprecated");
    const url = this.schemaTypeClient.getLinkURI("ticket", "statuses");
    const response = await axiosInstance.get(url);
    return response.data;
  }
  /**
   * Fetches the ticket priorities from the server.
   * @returns A promise that resolves to a response of ticket priorities.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchPriorities() {
    this.logger.warn("BaseTicketService - fetchPriorities is deprecated");
    const url = this.schemaTypeClient.getLinkURI("ticket", "priorities");
    const response = await axiosInstance.get(url);
    return response.data;
  }
  /**
   * Fetches the ticket properties from the server.
   * @returns A promise that resolves to a response of ticket properties.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchProperties() {
    this.logger.warn(
      "BaseTicketService - fetchProperties is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "properties");
    const response = await axiosInstance.get(url);
    return response.data;
  }
  /**
   * Fetches workitems from the server.
   * @returns A promise that resolves to a response of workitems.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchWorkitems(payload) {
    this.logger.warn(
      "BaseTicketService - fetchWorkitems is deprecated and will be removed in a future version"
    );
    this.logger.debug("BaseTicketService - fetchWorkitems", payload);
    let apiParsedBody = {
      q: "*",
      rows: 10,
      start: 0
    };
    if (payload) {
      const { agentIds, currentSources, inboxIds, statuses, ...singleValueFilters } = payload;
      apiParsedBody = {
        ...apiParsedBody,
        ...singleValueFilters,
        agentId: agentIds?.join(",") ?? void 0,
        currentSource: currentSources?.join(",") ?? void 0,
        latestQueueId: inboxIds?.join(",") ?? void 0,
        status: statuses?.join(",") ?? void 0
      };
    }
    const url = this.schemaTypeClient.getLinkURI("ticket", "findandsearch");
    const response = await axiosInstance.post(url, apiParsedBody);
    return response.data;
  }
  /**
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchWorkitem(payload) {
    this.logger.warn(
      "BaseTicketService - fetchWorkitem is deprecated and will be removed in a future version"
    );
    if (typeof payload === "string" || isFetchTicketByTicketIdPayload(payload)) {
      const ticketId = typeof payload === "string" ? payload : payload.ticketId;
      const url = this.schemaTypeClient.getLinkURI("ticket", "workticketByTicket", {
        id: ticketId
      });
      const response = await axiosInstance.get(url);
      return response.data;
    } else {
      const workitemId = payload.workitemId;
      const url = this.schemaTypeClient.getLinkURI("ticket", "workticketByWorkitem", {
        id: workitemId
      });
      const response = await axiosInstance.get(url);
      return response.data;
    }
  }
  /**
   * Fetches a ticket by its ID.
   *
   * @param ticketId - The ID of the ticket to fetch.
   * @param options - Options for the fetch request.
   * @param options.behavior - Specific behavior of the fetch request.
   * * `''` or `undefined` - returns the ticket without any specific additional data.
   * * `'withSurvey'` - includes survey data for the ticket.
   * * defaults to empty string `''`.
   *
   * @returns A promise that resolves to the fetched ticket.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchTicket(ticketId, { behavior = "" } = { behavior: "" }) {
    this.logger.warn(
      "BaseTicketService - fetchTicket is deprecated and will be removed in a future version"
    );
    if (behavior === "withSurvey") {
      const url = this.schemaTypeClient.getLinkURI("ticket", "ticketWithSurvey", {
        ticketId
      });
      const response = await axiosInstance({
        // This request wrongly requires a Content-Type header set (for a GET request),
        // Axios ignores this header if data is undefined, so setting an empty data
        // gets around that.
        data: {},
        headers: {
          "Content-Type": "application/json"
        },
        method: "GET",
        url
      });
      return response.data;
    } else {
      return this.schemaTypeClient.retrieve("ticket", { id: ticketId });
    }
  }
  /**
   * Fetches the ticket history for a given ticket ID.
   * @param ticketId - The ID of the ticket.
   * @param page - The page number of the ticket history (default: 1).
   * @param options - Options for the history request
   * @param options.version - The version of the history endpoint to use (default: 1).
   * @returns A promise that resolves to the ticket history data.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchTicketHistory(ticketId, page = 1, { version = 1 } = { version: 1 }) {
    this.logger.warn(
      "BaseTicketService - fetchTicketHistory is deprecated and will be removed in a future version"
    );
    const url = version === 2 ? this.schemaTypeClient.getLinkURI("ticket", "historyV2", {
      pageNo: page,
      ticketId
    }) : this.schemaTypeClient.getLinkURI("ticket", "history", {
      pageNo: page,
      ticketId
    });
    const response = await axiosInstance({
      // This request wrongly requires a Content-Type header set (for a GET request),
      // Axios ignores this header if data is undefined, so setting an empty data
      // gets around that.
      data: {},
      headers: {
        "Content-Type": "application/json"
      },
      method: "GET",
      url
    });
    response.data.data = response.data.data.map((item) => {
      if (item.conversation) {
        item.conversation = fixEngagementDataItem(item.conversation, {
          baseURL: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          workitemId: item.workitemId
        });
      }
      return item;
    });
    if (response.data.workitems) {
      Object.entries(response.data.workitems).forEach(([id2, workitem]) => {
        if (response.data.workitems?.[id2]) {
          response.data.workitems[id2] = fixWorkitem(workitem, {
            baseUrl: axiosInstance.defaults.baseURL,
            token: this.stateService.getToken(),
            users: this.stateService.getUsers()
          });
        }
      });
    }
    if (version === 2) {
      return response.data;
    } else {
      return response.data;
    }
  }
  /**
   * Updates the status of a ticket.
   *
   * @param ticketId - The ID of the ticket to update.
   * @param body - The request body containing the updated ticket status.
   * @returns A promise that resolves to the updated ticket.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async updateTicketStatus(ticketId, body) {
    this.logger.warn(
      "BaseTicketService - updateTicketStatus is deprecated and will be removed in a future version"
    );
    const url = this.stateService.getSchemaTypeLinkURI({
      link: "status",
      name: "ticket",
      replacements: { id: ticketId }
    });
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
  /**
   * Updates the property field of a ticket.
   *
   * @param ticketId - The ID of the ticket to update.
   * @param body - The request body containing the updated ticket status.
   * @returns A promise that resolves to the updated ticket.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async updateTicketProperty(ticketId, body) {
    this.logger.warn(
      "BaseTicketService - updateTicketProperty is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "property", {
      id: ticketId
    });
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
  /**
   * Updates the priority of a ticket.
   *
   * @param ticketId - The ID of the ticket to update.
   * @param body - The request body containing the updated ticket priority id
   * @returns A promise that resolves to the updated ticket.
   * * @deprecated Use schemaTypeClient.request method instead.
   */
  async updateTicketPriority(ticketId, body) {
    this.logger.warn(
      "BaseTicketService - updateTicketPriority is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "priority", {
      id: ticketId
    });
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
  /**
   * Updates the assignee of a ticket.
   * @param ticketId - The ID of the ticket to update.
   * @param body - The request body containing the updated assignee information, `teamId` must be provided with the same ID as the current queue in the Workitem object.
   * @returns A Promise that resolves to the updated ticket.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async updateTicketAssignee(ticketId, body) {
    this.logger.warn(
      "BaseTicketService - updateTicketAssignee is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "assignee", {
      id: ticketId
    });
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
  /**
   * Updates the inbox of a ticket.
   * @param ticketId - The ID of the ticket to update.
   * @param body - The request body containing the updated team information.
   * @returns A Promise that resolves to the updated ticket.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async updateTicketInbox(ticketId, body) {
    this.logger.warn(
      "BaseTicketService - updateTicketInbox is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "team", {
      id: ticketId
    });
    const response = await axiosInstance.post(url, body);
    return response.data;
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().search('ticket')
   */
  fetchTickets(payload) {
    this.logger.warn(
      "BaseTicketService - fetchTickets is deprecated and will be removed in a future version"
    );
    return this.schemaTypeClient.search("ticket", payload);
  }
  /**
   * Fetches tickets by contact ID.
   * @param contactId - The ID of the contact.
   * @returns A promise that resolves to the fetched tickets.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchTicketsByContact(contactId) {
    this.logger.warn(
      "BaseTicketService - fetchTicketsByContact is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "ticketByContact", {
      contactId
    });
    const response = await axiosInstance({
      // This request wrongly requires a Content-Type header set (for a GET request),
      // Axios ignores this header if data is undefined, so setting an empty data
      // gets around that.
      data: {},
      headers: {
        "Content-Type": "application/json"
      },
      url
    });
    return response.data;
  }
  /**
   * Fetches all statuses tickets by contact ID.
   * @param contactId - The ID of the contact.
   * @returns A promise that resolves to the fetched tickets.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchAllTicketsByContact(contactId) {
    this.logger.warn(
      "BaseTicketService - fetchAllTicketsByContact is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "searchTickets");
    const response = await axiosInstance({
      // This request wrongly requires a Content-Type header set (for a GET request),
      // Axios ignores this header if data is undefined, so setting an empty data
      // gets around that.
      data: {},
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        contactId
      },
      url
    });
    return response.data;
  }
  /**
   * Fetches ticket notes by ticket ID.
   * @param ticketId - The ID of the ticket.
   * @returns A promise that resolves to the ticket notes.
   * @deprecated Use sdk.getSchemaTypeClient().search('ticketnote')
   */
  async fetchTicketNotesByTicketId(ticketId) {
    this.logger.warn(
      "BaseTicketService - fetchTicketNotesByTicketId is deprecated and will be removed in a future version"
    );
    return this.schemaTypeClient.search("ticketnote", {
      queryParams: {
        ticketId
      }
    });
  }
  /**
   * Creates a ticket note.
   *
   * @param requestBody - The request body for creating the ticket note.
   * @returns The created ticketnote and note objects.
   * @deprecated Use sdk.getSchemaTypeClient().create('note', { data: { ... } })
   */
  async createTicketNote(requestBody) {
    this.logger.warn(
      "BaseTicketService - createTicketNote is deprecated and will be removed in a future version"
    );
    const note = await this.schemaTypeClient.create("note", {
      data: {
        body: requestBody.body,
        objectType: "note",
        title: requestBody.title
      }
    });
    const ticketNote = await this.schemaTypeClient.create("ticketnote", {
      data: {
        noteId: note.noteId,
        ticketId: requestBody.ticketId
      }
    });
    return {
      note,
      ticketNote
    };
  }
  /**
   * Updates a ticket note with the specified ID.
   * @param ticketNoteId - The ID of the ticket note to update.
   * @param requestBody - The request body containing the updated ticket note data.
   * @returns A promise that resolves to the updated ticket note.
   * @deprecated Use sdk.getSchemaTypeClient().update('ticketnote', { id: "...", data: { ... } })
   */
  async updateTicketNote(ticketNoteId, requestBody) {
    this.logger.warn(
      "BaseTicketService - updateTicketNote is deprecated and will be removed in a future version"
    );
    const ticketNote = await this.schemaTypeClient.update("ticketnote", {
      data: { ...requestBody },
      id: ticketNoteId
    });
    return ticketNote;
  }
  /**
   * Deletes a ticket note.
   * @param ticketNoteId - The ID of the ticket note to delete.
   * @returns A Promise that resolves to the deleted ticket note.
   * @deprecated Use sdk.getSchemaTypeClient().delete('ticketnote', { id: "..." })
   */
  async deleteTicketNote(ticketNoteId) {
    this.logger.warn(
      "BaseTicketService - deleteTicketNote is deprecated and will be removed in a future version"
    );
    const ticketNote = await this.schemaTypeClient.delete("ticketnote", { id: ticketNoteId });
    return ticketNote;
  }
  async fetchAgentDashboard({ rangeFrom, rangeTo } = {}) {
    this.logger.trace("BaseTicketService - fetchAgentDashboard");
    const response = await axiosInstance.get(
      "/analytics/api/types/ticket/agentdashboard",
      {
        // This request wrongly requires a Content-Type header set (for a GET request),
        // Axios ignores this header if data is undefined, so setting an empty data
        // gets around that.
        data: {},
        headers: {
          "Content-Type": "application/json"
        },
        params: {
          rangeFrom: rangeFrom instanceof Date ? rangeFrom.getTime() : rangeFrom,
          rangeTo: rangeTo instanceof Date ? rangeTo.getTime() : rangeTo
        }
      }
    );
    return response.data.objects?.[0];
  }
  /**
   * Get all notes for a ticket
   * @param ticketId - The ticket ID
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchTicketNotes(ticketId) {
    this.logger.warn(
      "BaseTicketService - fetchTicketNotes is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("ticket", "noteticket", {
      id: ticketId
    });
    const response = await axiosInstance.get(url);
    return response.data;
  }
  /**
   * Get feedbacks of a ticket
   * @param ticketId - The ticket ID
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async fetchTicketFeedbacks(ticketId) {
    this.logger.warn(
      "BaseTicketService - fetchTicketFeedbacks is deprecated and will be removed in a future version"
    );
    const url = `/data/api/v1/orc/feedback/${ticketId}`;
    const { data } = await axiosInstance.get(url);
    return data;
  }
  /**
   * Create feedback for a ticket
   * @param createTicketFeedbackRequestBody - The createTicketFeedbackRequestBody to update ticket feedback
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async createTicketFeedback(createTicketFeedbackRequestBody) {
    this.logger.warn(
      "BaseTicketService - createTicketFeedback is deprecated and will be removed in a future version"
    );
    const url = `/data/api/v1/orc/feedback`;
    const { data } = await axiosInstance.post(url, createTicketFeedbackRequestBody);
    return data;
  }
  /**
   * Update feedback for a ticket by feedbackId
   * @param feedbackId - The feedbackId to update
   * @param updateTicketFeedbackRequestBody - The updateTicketFeedbackRequestBody to update ticket feedback
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async updateTicketFeedback(feedbackId, updateTicketFeedbackRequestBody) {
    this.logger.warn(
      "BaseTicketService - updateTicketFeedback is deprecated and will be removed in a future version"
    );
    const url = `/data/api/v1/orc/feedback/${feedbackId}`;
    const { data } = await axiosInstance.put(url, updateTicketFeedbackRequestBody);
    return data;
  }
  // ============================================
  // Ticket Search (Nexar API)
  // ============================================
  static TICKETS_SEARCH_PREFIX = ["tickets", "search"];
  static ticketsQueryKey(filters) {
    return ["tickets", "search", filters ?? {}];
  }
  async searchTickets(payload = {}) {
    const isInitialLoad = !payload.pagination?.cursor;
    this.logger.info("BaseTicketService - searchTickets", { isInitialLoad, payload });
    this.setTicketsLoading(true);
    try {
      const response = await this.schemaTypeClient.request(
        "ticket",
        "next2search",
        { data: payload }
      );
      const { pagination, results } = response;
      const hasMore = pagination.next !== "";
      const nextCursor = pagination.next || null;
      this.updateTicketsCache(
        payload.filters,
        results,
        isInitialLoad ? "replace" : "append",
        hasMore,
        nextCursor
      );
      for (const ticket of results) {
        this.updateTicketDetailCacheIfExists(ticket);
      }
      this.logger.info("BaseTicketService - searchTickets success", {
        hasMore,
        nextCursor,
        ticketCount: results.length
      });
      return response;
    } catch (error) {
      this.logger.error("BaseTicketService - searchTickets error", error);
      throw error;
    } finally {
      this.setTicketsLoading(false);
    }
  }
  // ============================================
  // Ticket Linked Workitems (Nexar API §8)
  // ============================================
  static ticketLinkedWorkitemsQueryKey(ticketId, filter3) {
    return ["tickets", "workitems", ticketId, filter3 ?? []];
  }
  static ticketLinkedWorkitemsPrefixByTicketId(ticketId) {
    return ["tickets", "workitems", ticketId];
  }
  async fetchTicketLinkedWorkitems(ticketId, options = {}) {
    const { cursor, filter: filter3, limit = 25 } = options;
    const isInitialLoad = !cursor;
    this.logger.info("BaseTicketService - fetchTicketLinkedWorkitems", { filter: filter3, isInitialLoad, ticketId });
    this.setTicketLinkedWorkitemsLoading(ticketId, true);
    try {
      const queryParams = {};
      if (limit) queryParams["limit"] = String(limit);
      if (cursor) queryParams["cursor"] = cursor;
      if (filter3 && filter3.length > 0) queryParams["filter"] = filter3;
      const response = await this.schemaTypeClient.request(
        "ticket",
        "workitems",
        { queryParams, replacements: { id: ticketId } }
      );
      const { next } = response;
      const objects = response.objects ?? [];
      const hasMore = next !== "";
      const nextCursor = next || null;
      this.updateTicketLinkedWorkitemsCache(
        ticketId,
        objects,
        isInitialLoad ? "replace" : "append",
        hasMore,
        nextCursor,
        filter3
      );
      this.logger.info("BaseTicketService - fetchTicketLinkedWorkitems success", {
        hasMore,
        nextCursor,
        ticketId,
        workitemCount: objects.length
      });
      return { ...response, objects };
    } catch (error) {
      this.logger.error("BaseTicketService - fetchTicketLinkedWorkitems error", error);
      throw error;
    } finally {
      this.setTicketLinkedWorkitemsLoading(ticketId, false);
    }
  }
  async fetchTicketLinkedWorkitemsByIds(ticketId, ids) {
    this.logger.info("BaseTicketService - fetchTicketLinkedWorkitemsByIds", { ids, ticketId });
    const response = await this.schemaTypeClient.request(
      "ticket",
      "workitems",
      { queryParams: { ids: ids.join(",") }, replacements: { id: ticketId } }
    );
    const objects = response.objects ?? [];
    this.logger.info("BaseTicketService - fetchTicketLinkedWorkitemsByIds success", {
      resultCount: objects.length,
      ticketId
    });
    return { ...response, objects };
  }
  // ============================================
  // Ticket Detail (Single Ticket)
  // ============================================
  static ticketDetailQueryKey(ticketId) {
    return ["tickets", "detail", ticketId];
  }
  /**
   * Fetches a single ticket by ID. First checks the search cache,
   * then falls back to a retrieve API call.
   */
  async fetchTicketDetail(ticketId) {
    this.logger.info("BaseTicketService - fetchTicketDetail", { ticketId });
    let cachedTicket;
    const allSearchCaches = queryClient.getQueriesData({
      queryKey: _BaseTicketService.TICKETS_SEARCH_PREFIX
    });
    for (const [, cacheData] of allSearchCaches) {
      cachedTicket = cacheData?.tickets.find((t) => t.ticketId === ticketId);
      if (cachedTicket) break;
    }
    if (cachedTicket) {
      this.logger.debug("BaseTicketService - fetchTicketDetail - found in search cache", { ticketId });
      this.setTicketDetailCache(ticketId, cachedTicket);
      return cachedTicket;
    }
    this.setTicketDetailLoading(ticketId, true);
    try {
      const ticket = await this.schemaTypeClient.retrieve("ticket", { id: ticketId });
      this.setTicketDetailCache(ticketId, ticket);
      this.logger.info("BaseTicketService - fetchTicketDetail success", { ticketId });
      return ticket;
    } catch (error) {
      this.logger.error("BaseTicketService - fetchTicketDetail error", error);
      throw error;
    } finally {
      this.setTicketDetailLoading(ticketId, false);
    }
  }
  // ============================================
  // Ticket Notes
  // ============================================
  static ticketNotesQueryKey(ticketId) {
    return ["tickets", "notes", ticketId];
  }
  async fetchTicketNotesList(ticketId, options = {}) {
    const { limit = 100, offset = 0 } = options;
    this.logger.info("BaseTicketService - fetchTicketNotesList", { ticketId });
    this.setTicketNotesLoading(ticketId, true);
    try {
      const queryParams = {};
      if (limit) queryParams["limit"] = String(limit);
      if (offset) queryParams["offset"] = String(offset);
      const response = await this.schemaTypeClient.request(
        "ticket",
        "ticketNote",
        { queryParams, replacements: { id: ticketId } }
      );
      const { pagination, results } = response;
      this.updateTicketNotesCache(ticketId, results, pagination.total);
      this.logger.info("BaseTicketService - fetchTicketNotesList success", {
        noteCount: results.length,
        ticketId,
        total: pagination.total
      });
      return response;
    } catch (error) {
      this.logger.error("BaseTicketService - fetchTicketNotesList error", error);
      throw error;
    } finally {
      this.setTicketNotesLoading(ticketId, false);
    }
  }
  async fetchTicketNoteById(ticketId, ticketNoteId) {
    this.logger.info("BaseTicketService - fetchTicketNoteById", { ticketId, ticketNoteId });
    const response = await this.schemaTypeClient.request(
      "ticket",
      "ticketNoteById",
      { replacements: { id: ticketId, ticketNoteId } }
    );
    this.logger.info("BaseTicketService - fetchTicketNoteById success", {
      ticketId,
      ticketNoteId: response.ticketnoteId
    });
    return response;
  }
  // ============================================
  // Loading State
  // ============================================
  isTicketsLoading() {
    return this.ticketsLoading;
  }
  setTicketsLoading(isLoading) {
    this.ticketsLoading = isLoading;
    this.eventsService.emitExternal(ExternalEvents.TicketsLoadingChanged, {
      isLoading
    });
  }
  isTicketLinkedWorkitemsLoading(ticketId) {
    return this.ticketLinkedWorkitemsLoading.get(ticketId) ?? false;
  }
  setTicketLinkedWorkitemsLoading(ticketId, isLoading) {
    this.ticketLinkedWorkitemsLoading.set(ticketId, isLoading);
    this.eventsService.emitExternal(ExternalEvents.TicketLinkedWorkitemsLoadingChanged, {
      isLoading,
      ticketId
    });
  }
  setTicketDetailLoading(ticketId, isLoading) {
    this.eventsService.emitExternal(ExternalEvents.TicketDetailLoadingChanged, {
      isLoading,
      ticketId
    });
  }
  setTicketNotesLoading(ticketId, isLoading) {
    this.eventsService.emitExternal(ExternalEvents.TicketNotesLoadingChanged, {
      isLoading,
      ticketId
    });
  }
  // ============================================
  // Cache Management - Tickets List
  // ============================================
  updateTicketsCache(filters, tickets, mode, hasMore, nextCursor) {
    const queryKey = _BaseTicketService.ticketsQueryKey(filters);
    queryClient.setQueryData(queryKey, (old) => {
      let mergedTickets;
      if (mode === "replace" || !old) {
        mergedTickets = tickets;
      } else {
        const existingIds = new Set(old.tickets.map((t) => t.ticketId));
        const newTickets = tickets.filter((t) => !existingIds.has(t.ticketId));
        mergedTickets = [...old.tickets, ...newTickets];
      }
      return {
        hasMore,
        nextCursor,
        tickets: mergedTickets
      };
    });
  }
  addOrUpdateTicketInQueryCache(queryKey, ticket) {
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      const existingIndex = old.tickets.findIndex((t) => t.ticketId === ticket.ticketId);
      if (existingIndex === -1) {
        return {
          ...old,
          tickets: [ticket, ...old.tickets]
        };
      }
      const updatedTickets = [...old.tickets];
      updatedTickets[existingIndex] = { ...updatedTickets[existingIndex], ...ticket };
      return {
        ...old,
        tickets: updatedTickets
      };
    });
  }
  removeTicketFromQueryCache(queryKey, ticketId) {
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      const filtered = old.tickets.filter((t) => t.ticketId !== ticketId);
      if (filtered.length === old.tickets.length) return old;
      return {
        ...old,
        tickets: filtered
      };
    });
  }
  /**
   * Iterates ALL cached filter variations and applies the notification gate
   * against each cache's specific filters. Adds/updates or removes the ticket accordingly.
   */
  applyTicketToAllSearchCaches(ticket) {
    const allQueries = queryClient.getQueriesData({
      queryKey: _BaseTicketService.TICKETS_SEARCH_PREFIX
    });
    for (const [queryKey] of allQueries) {
      const cacheFilters = Array.isArray(queryKey) && queryKey.length > 2 ? queryKey[2] : void 0;
      if (this.doesTicketPassGate(ticket, cacheFilters)) {
        this.addOrUpdateTicketInQueryCache(queryKey, ticket);
      } else {
        this.removeTicketFromQueryCache(queryKey, ticket.ticketId);
      }
    }
  }
  // ============================================
  // Cache Management - Ticket Linked Workitems
  // ============================================
  updateTicketLinkedWorkitemsCache(ticketId, workitems, mode, hasMore, nextCursor, filter3) {
    const queryKey = _BaseTicketService.ticketLinkedWorkitemsQueryKey(ticketId, filter3);
    queryClient.setQueryData(queryKey, (old) => {
      let mergedWorkitems;
      if (mode === "replace" || !old) {
        mergedWorkitems = workitems;
      } else {
        const existingIds = new Set(old.workitems.map((w) => w.workitemId));
        const newWorkitems = workitems.filter((w) => !existingIds.has(w.workitemId));
        mergedWorkitems = [...old.workitems, ...newWorkitems];
      }
      return {
        filter: filter3 ?? old?.filter,
        hasMore,
        nextCursor,
        workitems: mergedWorkitems
      };
    });
  }
  addWorkitemsToTicketLinkedCache(ticketId, workitems) {
    const allCaches = queryClient.getQueriesData({
      queryKey: _BaseTicketService.ticketLinkedWorkitemsPrefixByTicketId(ticketId)
    });
    for (const [queryKey] of allCaches) {
      queryClient.setQueryData(queryKey, (old) => {
        if (!old) return old;
        const existingIds = new Set(old.workitems.map((w) => w.workitemId));
        const newWorkitems = workitems.filter((w) => !existingIds.has(w.workitemId));
        if (newWorkitems.length === 0) return old;
        return {
          ...old,
          workitems: [...newWorkitems, ...old.workitems]
        };
      });
    }
  }
  removeWorkitemsFromTicketLinkedCache(ticketId, workitemIds) {
    const allCaches = queryClient.getQueriesData({
      queryKey: _BaseTicketService.ticketLinkedWorkitemsPrefixByTicketId(ticketId)
    });
    for (const [queryKey] of allCaches) {
      queryClient.setQueryData(queryKey, (old) => {
        if (!old) return old;
        const removeSet = new Set(workitemIds);
        const filtered = old.workitems.filter((w) => !removeSet.has(w.workitemId));
        if (filtered.length === old.workitems.length) return old;
        return {
          ...old,
          workitems: filtered
        };
      });
    }
  }
  // ============================================
  // Cache Management - Ticket Detail
  // ============================================
  setTicketDetailCache(ticketId, ticket) {
    const queryKey = _BaseTicketService.ticketDetailQueryKey(ticketId);
    queryClient.setQueryData(queryKey, { ticket });
  }
  updateTicketDetailCacheIfExists(ticket) {
    const ticketId = ticket.ticketId;
    if (!ticketId) return;
    const queryKey = _BaseTicketService.ticketDetailQueryKey(ticketId);
    const existingCache = queryClient.getQueryData(queryKey);
    if (existingCache) {
      queryClient.setQueryData(queryKey, {
        ticket: existingCache.ticket ? { ...existingCache.ticket, ...ticket } : ticket
      });
    }
  }
  // ============================================
  // Cache Management - Ticket Notes
  // ============================================
  updateTicketNotesCache(ticketId, notes, total) {
    const queryKey = _BaseTicketService.ticketNotesQueryKey(ticketId);
    queryClient.setQueryData(queryKey, { notes, total });
  }
  addOrUpdateNoteInCache(ticketId, note) {
    const queryKey = _BaseTicketService.ticketNotesQueryKey(ticketId);
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      const existingIndex = old.notes.findIndex((n) => n.ticketnoteId === note.ticketnoteId);
      if (existingIndex === -1) {
        return {
          notes: [note, ...old.notes],
          total: old.total + 1
        };
      }
      const updatedNotes = [...old.notes];
      updatedNotes[existingIndex] = { ...updatedNotes[existingIndex], ...note };
      return { ...old, notes: updatedNotes };
    });
  }
  removeNoteFromCache(ticketId, ticketnoteId) {
    const queryKey = _BaseTicketService.ticketNotesQueryKey(ticketId);
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      const filtered = old.notes.filter((n) => n.ticketnoteId !== ticketnoteId);
      if (filtered.length === old.notes.length) return old;
      return { notes: filtered, total: old.total - 1 };
    });
  }
  // ============================================
  // Notification Gate — Client-side Filter Check
  // ============================================
  /**
   * Returns the set of queue IDs the current agent belongs to.
   * Uses the company directory cache from state service.
   */
  getAgentQueueIds() {
    const userId = this.stateService.getUser()?.userId;
    if (!userId) return /* @__PURE__ */ new Set();
    const inboxes = this.stateService.getInboxes();
    if (!inboxes) return /* @__PURE__ */ new Set();
    const queueIds = /* @__PURE__ */ new Set();
    for (const inbox of inboxes) {
      if (inbox.users?.includes(userId)) {
        queueIds.add(inbox.queueId);
      }
    }
    return queueIds;
  }
  /**
   * Checks whether a ticket from a notification should be in a specific filter cache.
   *
   * Rules:
   * 1. Queue membership (always): ticket.latestQueueId must be in agent's queues
   * 2. Filter fields (only specified keys): ticket must match all provided filters
   *    - Unspecified filter keys are skipped (no constraint)
   */
  doesTicketPassGate(ticket, filters) {
    const agentQueueIds = this.getAgentQueueIds();
    if (agentQueueIds.size > 0 && ticket.latestQueueId && !agentQueueIds.has(ticket.latestQueueId)) {
      this.logger.debug("BaseTicketService - doesTicketPassGate - queue membership failed", {
        agentQueueIds: [...agentQueueIds],
        ticketId: ticket.ticketId,
        ticketQueueId: ticket.latestQueueId
      });
      return false;
    }
    if (!filters) return true;
    if (filters.agentId && ticket.agentId !== filters.agentId) {
      return false;
    }
    if (filters.contactId && ticket.contactId !== filters.contactId) {
      return false;
    }
    if (filters.status && filters.status.length > 0 && !filters.status.includes(ticket.status)) {
      return false;
    }
    if (filters.priority && filters.priority.length > 0 && !filters.priority.includes(ticket.priority)) {
      return false;
    }
    if (filters.queueIds && filters.queueIds.length > 0 && ticket.latestQueueId && !filters.queueIds.includes(ticket.latestQueueId)) {
      return false;
    }
    return true;
  }
  // ============================================
  // Query Cache Subscription
  // ============================================
  subscribeToTicketQueryCacheChanges() {
    const queryCache = queryClient.getQueryCache();
    this.queryCacheUnsubscribe = queryCache.subscribe((event) => {
      if (event.type !== "updated") return;
      const query = event.query;
      const queryKey = query.queryKey;
      if (Array.isArray(queryKey) && queryKey[0] === "tickets") {
        if (queryKey[1] === "search") {
          this.eventsService.emitExternal(ExternalEvents.TicketsQueryUpdated, {
            queryKey
          });
        } else if (queryKey[1] === "workitems") {
          this.eventsService.emitExternal(ExternalEvents.TicketLinkedWorkitemsQueryUpdated, {
            queryKey
          });
        }
      }
    });
  }
  // ============================================
  // Notification Handlers for Cache
  // ============================================
  handleNewTicketNotificationForCache() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.NewTicketNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseTicketService - handleNewTicketNotificationForCache", data);
      if (data.ticket) {
        this.applyTicketToAllSearchCaches(data.ticket);
        this.updateTicketDetailCacheIfExists(data.ticket);
      }
      this.eventsService.emitExternal(ExternalEvents.NewTicketNotification, data);
    });
  }
  handleUpdateTicketNotificationForCache() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.UpdateTicketNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseTicketService - handleUpdateTicketNotificationForCache", data);
      if (data.changeType === "TICKET_DELETED") {
        this.handleTicketDeleted(data);
        return;
      }
      if (data.ticket) {
        this.applyTicketToAllSearchCaches(data.ticket);
        this.updateTicketDetailCacheIfExists(data.ticket);
      }
      if (data.changeType === "TICKETWORKITEM_CHANGED") {
        this.handleTicketWorkitemChanged(data);
      }
      if (data.changeType === "TICKETNOTE_CHANGED") {
        this.handleTicketNoteChanged(data);
      }
    });
  }
  handleTicketDeleted(data) {
    const ticketId = data.ticket?.ticketId;
    if (!ticketId) return;
    this.logger.info("BaseTicketService - handleTicketDeleted", { ticketId });
    const allQueries = queryClient.getQueriesData({
      queryKey: _BaseTicketService.TICKETS_SEARCH_PREFIX
    });
    for (const [queryKey] of allQueries) {
      this.removeTicketFromQueryCache(queryKey, ticketId);
    }
    queryClient.removeQueries({
      queryKey: _BaseTicketService.ticketDetailQueryKey(ticketId)
    });
    queryClient.removeQueries({
      queryKey: _BaseTicketService.ticketLinkedWorkitemsPrefixByTicketId(ticketId)
    });
    queryClient.removeQueries({
      queryKey: _BaseTicketService.ticketNotesQueryKey(ticketId)
    });
    this.eventsService.emitExternal(ExternalEvents.UpdateTicketNotification, data);
  }
  handleTicketWorkitemChanged(data) {
    const ticketId = data.ticket?.ticketId;
    if (!ticketId) return;
    this.logger.info("BaseTicketService - handleTicketWorkitemChanged", {
      added: data.added,
      removed: data.removed,
      ticketId
    });
    const allCaches = queryClient.getQueriesData({
      queryKey: _BaseTicketService.ticketLinkedWorkitemsPrefixByTicketId(ticketId)
    });
    if (allCaches.length === 0) {
      this.logger.debug("BaseTicketService - handleTicketWorkitemChanged - no cache for ticket, skipping", { ticketId });
      return;
    }
    if (data.removed && data.removed.length > 0) {
      this.removeWorkitemsFromTicketLinkedCache(ticketId, data.removed);
    }
    if (data.added && data.added.length > 0) {
      let hasFilteredCache = false;
      for (const [, cacheData] of allCaches) {
        if (cacheData?.filter && cacheData.filter.length > 0) {
          hasFilteredCache = true;
          this.fetchTicketLinkedWorkitems(ticketId, { filter: cacheData.filter }).catch((error) => {
            this.logger.error("BaseTicketService - handleTicketWorkitemChanged - failed to re-fetch with filter", error);
          });
        }
      }
      if (!hasFilteredCache) {
        this.fetchTicketLinkedWorkitemsByIds(ticketId, data.added).then((response) => {
          if (response.objects.length === 0) return;
          const unfilteredKey = _BaseTicketService.ticketLinkedWorkitemsQueryKey(ticketId);
          const currentCache = queryClient.getQueryData(unfilteredKey);
          if (!currentCache) return;
          let workitemsToAdd;
          if (!currentCache.hasMore) {
            workitemsToAdd = response.objects;
          } else {
            const cursorTimestamp = currentCache.nextCursor ? Number(currentCache.nextCursor) : 0;
            workitemsToAdd = response.objects.filter((w) => w.createdAt >= cursorTimestamp);
            const skipped = response.objects.length - workitemsToAdd.length;
            if (skipped > 0) {
              this.logger.debug("BaseTicketService - handleTicketWorkitemChanged - skipped workitems outside cursor range", {
                cursorTimestamp,
                skipped,
                ticketId
              });
            }
          }
          if (workitemsToAdd.length > 0) {
            this.addWorkitemsToTicketLinkedCache(ticketId, workitemsToAdd);
          }
        }).catch((error) => {
          this.logger.error("BaseTicketService - handleTicketWorkitemChanged - failed to fetch added workitems", error);
        });
      }
    }
  }
  handleTicketNoteChanged(data) {
    const ticketId = data.ticket?.ticketId;
    if (!ticketId) return;
    const { added, removed, subType } = data;
    this.logger.info("BaseTicketService - handleTicketNoteChanged", {
      added,
      removed,
      subType,
      ticketId
    });
    const queryKey = _BaseTicketService.ticketNotesQueryKey(ticketId);
    const existingCache = queryClient.getQueryData(queryKey);
    if (subType === "ADDED" && added && added.length > 0) {
      for (const ticketnoteId of added) {
        this.fetchTicketNoteById(ticketId, ticketnoteId).then((note) => {
          const currentCache = queryClient.getQueryData(queryKey);
          if (currentCache) {
            this.addOrUpdateNoteInCache(ticketId, note);
          } else {
            this.updateTicketNotesCache(ticketId, [note], 1);
          }
        }).catch((error) => {
          this.logger.error("BaseTicketService - handleTicketNoteChanged - failed to fetch note", error);
        });
      }
      return;
    }
    if (!existingCache) {
      this.logger.debug("BaseTicketService - handleTicketNoteChanged - no cache, skipping", { ticketId });
      return;
    }
    if (subType === "DELETED" && removed && removed.length > 0) {
      for (const ticketnoteId of removed) {
        this.removeNoteFromCache(ticketId, ticketnoteId);
      }
      return;
    }
    if (subType === "EDITED" && added && added.length > 0) {
      for (const ticketnoteId of added) {
        this.fetchTicketNoteById(ticketId, ticketnoteId).then((note) => {
          this.addOrUpdateNoteInCache(ticketId, note);
        }).catch((error) => {
          this.logger.error("BaseTicketService - handleTicketNoteChanged - failed to fetch note", error);
        });
      }
    }
  }
  // ============================================
  // Cleanup
  // ============================================
  destroy() {
    if (this.queryCacheUnsubscribe) {
      this.queryCacheUnsubscribe();
      this.queryCacheUnsubscribe = void 0;
    }
    this.logger.trace("BaseTicketService - destroyed");
  }
};

// src/internal/services/user.ts
import { HttpStatusCode, isAxiosError as isAxiosError4 } from "axios";
var KEEP_ALIVE_INTERVAL_MS = 3e4;
var BaseUserService = class {
  widget;
  acdLoginAt = -1;
  inConference = false;
  // private inMute: boolean = false;
  inRecording = false;
  users = [];
  topics = [];
  queues = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  speedDials = [];
  eventsService;
  telephonyService;
  stateService;
  tokenService;
  schemaTypeClient;
  resourceManager;
  datadogService;
  logger;
  keepAliveTimer;
  /**
   * Constructs a new instance of the BaseUserService class.
   * @param data - The initial data for the BaseUserService.
   */
  constructor({
    datadogService,
    eventsService,
    loggerService,
    resourceManager,
    schemaTypeClient,
    stateService,
    telephonyService,
    tokenService,
    widgetService
  }) {
    this.datadogService = datadogService;
    this.telephonyService = telephonyService;
    this.stateService = stateService;
    this.tokenService = tokenService;
    this.eventsService = eventsService;
    this.resourceManager = resourceManager;
    this.schemaTypeClient = schemaTypeClient;
    this.widget = widgetService;
    this.logger = loggerService;
    this.logger.trace("UserService - constructor");
    this.handleSocketConnectedNotification();
    this.handleSessionChangeNotification();
    this.handleSocketNotification();
    this.handleACDLoginNotifications();
    this.handleTypingStatusNotification();
    this.handleUserAutoReplyConfigNotification();
    this.handleCannedMessageEvents();
  }
  /**
   * Logs in a user with the provided username and password.
   * @param {string} username The username of the user.
   * @param {string} password The password of the user.
   * @returns {Promise<object>} A Promise that resolves with an object representing the result of the login attempt.
   * The resolved object will pass the object LoginSuccessful (TODO not sure we should pass the location and / or token).
   *
   * Succcess
   * - Info.LoginSuccessful
   *
   * If login fails, the Promise is rejected with an error object indicating InvalidUsernamePassword.
   *
   * Failure
   * - Errors.InvalidUsernamePassword
   *
   */
  async login(username, password) {
    this.logger.debug(`UserService - login with username [${username}]`);
    const response = await axiosInstance.get("/provider/token-with-authorities", {
      headers: {
        Authorization: "Basic " + encode(`${username}:${password}`)
      }
    });
    this.logger.info(
      `UserService - login resolved successfully, received location [${response.data.location}] and clientLocation [${response.data.clientLocation}]`
    );
    this.stateService.setToken(response.data.token);
    this.stateService.setBaseURL(response.data.location);
    this.stateService.setClientLocation(response.data.clientLocation);
    upsertDefaultRequestHeader("Authorization", response.data.token);
    if (response.data.location) {
      axiosInstance.defaults.baseURL = response.data.location;
    }
    const result = Object.assign(Info.LoginSuccessful, {
      location: response.data.location,
      token: response.data.token
    });
    return result;
  }
  /**
   * The `logout` function logs out the user, optionally notifying the server, and removes the
   * Authorization header.
   * @param {boolean} notifyServer - The `notifyServer` parameter in the `logout` function is a boolean
   * value that determines whether the server should be notified when the user logs out. If
   * `notifyServer` is `true`, a POST request is sent to the server's `/users/api/logout` endpoint
   * using axiosInstance.
   */
  async logout(payload) {
    const isBooleanPayload = typeof payload === "boolean";
    this.stopKeepAlive();
    if (!isBooleanPayload && payload.sendNotification === void 0) {
      payload.sendNotification = true;
    }
    if (isBooleanPayload || payload.sendNotification) {
      this.eventsService.emitExternal(ExternalEvents.LogoutNotification);
    }
    if (isBooleanPayload ? payload : payload.notifyServer) {
      try {
        await axiosInstance.post(`/users/api/logout`);
        deleteDefaultRequestHeader("Authorization");
        deleteDefaultRequestHeader("Deviceid");
        this.logger.info("BaseUserService - logout - resolved successfully");
      } catch (error) {
        this.logger.error("BaseUserService - logout - error", error);
      }
    }
    this.tokenService.stopTokenRefreshCycle();
    await this.resourceManager.cleanup();
  }
  /**
   * The function refreshToken in TypeScript makes a request to refresh a token and updates various
   * data fields accordingly.
   * @returns {Promise<RefreshTokenResponse>} A Promise that resolves with an object containing the new token and location
   */
  async refreshToken() {
    this.logger.trace("BaseUserService - refreshToken");
    return this.tokenService.refreshToken();
  }
  /**
   * Retrieves the expiration time of a token from its payload.
   * @returns The expiration time of the token in timestamp if it exists
   * and is valid. If the token is not present or the payload cannot be decoded, it returns
   * `undefined`.
   */
  getTokenExpiration() {
    this.logger.trace("BaseUserService - getTokenExpiration");
    return this.tokenService.getTokenExpiration();
  }
  async initSession({
    appVersionCode,
    appleServicesEnvironment = "production",
    deviceToken,
    platform,
    pushKitToken
  }) {
    this.logger.trace(`UserService - initSession`);
    const payload = {
      appVariant: appleServicesEnvironment,
      appVersionCode,
      deviceInfo: platform,
      notificationToken: deviceToken,
      pushKitToken
    };
    this.logger.debug(`UserService - initSession - invoked with payload:`, payload);
    try {
      let multiloginResponse;
      let loginResponse;
      try {
        multiloginResponse = await axiosInstance.post(
          "/users/api/multilogin",
          payload
        );
      } catch (error) {
        if (isAxiosError4(error) && (error.status === HttpStatusCode.NotFound || error.response?.status === HttpStatusCode.NotFound)) {
          this.logger.warn(
            "UserService - initSession - multilogin not found, fallback to login",
            error
          );
          loginResponse = await axiosInstance.post("/users/api/login", payload);
        } else {
          throw error;
        }
      }
      const session = multiloginResponse?.data.session ?? loginResponse?.data;
      const device = multiloginResponse?.data.device;
      this.stateService.setSession(session);
      this.eventsService.emitExternal(ExternalEvents.SessionStateUpdateNotification, session);
      if (device) {
        this.stateService.setDevice(device);
        upsertDefaultRequestHeader("Deviceid", device._id);
      }
      this.eventsService.emitInternal(InternalEvents.SessionChangeNotification, session);
      this.stateService.setAuthorities(session.authorities);
      this.eventsService.emitExternal(ExternalEvents.ConferenceStateNotification, {
        inconference: session.inConference
      });
      const response = { device, session };
      this.logger.debug(`UserService - initSession - resolved successfully:`, response);
      return response;
    } catch (error) {
      this.logger.error("UserService - initSession - error", error);
      throw error;
    }
  }
  async fetchSession(deviceId, {
    appVersionCode,
    appleServicesEnvironment = "production",
    deviceToken,
    platform,
    pushKitToken
  }) {
    this.logger.trace("UserService - fetchSession");
    const response = await axiosInstance.get("/users/api/session");
    if (response.data.devices) {
      if (deviceId?.length) {
        if (response.data.devices[deviceId]) {
          this.stateService.setDevice(response.data.devices[deviceId]);
          upsertDefaultRequestHeader("Deviceid", deviceId);
        } else {
          this.logger.error(
            `UserService - fetchSession - could not find deviceId [${deviceId}] in session.devices`,
            { devices: response.data.devices }
          );
          this.logger.debug(
            "UserService - No device found for the provided deviceId. Re-login the user to create a new session with the correct deviceId in the payload."
          );
          await this.initSession({
            appVersionCode,
            appleServicesEnvironment,
            deviceToken,
            platform,
            pushKitToken
          });
        }
      } else {
        this.logger.debug(
          "UserService - fetchSession - deviceId is not set, falling back to initSession"
        );
        await this.initSession({
          appVersionCode,
          appleServicesEnvironment,
          deviceToken,
          platform,
          pushKitToken
        });
      }
    }
    this.stateService.setSession(response.data);
    this.eventsService.emitExternal(ExternalEvents.SessionStateUpdateNotification, response.data);
    this.stateService.setAuthorities(response.data.authorities);
    this.eventsService.emitInternal(InternalEvents.SessionChangeNotification, response.data);
    this.eventsService.emitExternal(ExternalEvents.ConferenceStateNotification, {
      inconference: response.data.inConference
    });
    return { device: response.data.devices?.[deviceId ?? ""], session: response.data };
  }
  /**
   * Checks if a user is logged in.
   * @returns {boolean} True if the user is logged in, otherwise false.
   */
  isloggedIn() {
    return Boolean(this.stateService.getSession());
  }
  /**
   * TODO
   * Allow the use to login to the ACD and start receiving ACD interactions. The ACD Status of the user will be
   * received in the form of an event
   * @param _properties
   *
   * TODO Define properties, it's a complexe object that need to be simplify
   */
  async loginToAcd(payload) {
    this.logger.debug(`BaseUserService - loginToAcd - invoked with payload`, payload);
    try {
      const response = await axiosInstance.post(
        "/users/api/acd/login",
        payload
      );
      this.setLoggedInToACD(response.data.loginAt);
      const updatedSession = this.stateService.setACDLoggedInAt(response.data.loginAt);
      if (updatedSession) {
        this.eventsService.emitExternal(
          ExternalEvents.SessionStateUpdateNotification,
          updatedSession
        );
      }
      this.logger.info("BaseUserService - loginToAcd - resolved successfully");
      return response.data;
    } catch (error) {
      this.logger.error(`BaseUserService - loginToAcd - error`, error);
      throw error;
    }
  }
  /**
   * This TypeScript function logs out a user from an ACD system using an axios
   * delete request.
   * @returns The `logoutFromAcd` function is returning a promise that resolves to
   * the result of the `axiosInstance.delete` call, which is a request to delete
   * the user's session from the ACD (Automatic Call Distributor) system.
   */
  async logoutFromAcd() {
    this.logger.trace("BaseUserService - logoutFromAcd");
    const response = await axiosInstance.delete("/users/api/acd/logout");
    this.logger.info("BaseUserService - logoutFromAcd - resolved successfully");
    const updatedSession = this.stateService.setACDLoggedInAt(0);
    if (updatedSession) {
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        updatedSession
      );
    }
    return response.data;
  }
  /**
   * Check if the user has the ability to disposition a workitem or not. Will verify first in the user profile since the user setting takes precedence.
   *
   * @returns a boolean value (true or false) if the user can disposition or not a workitem.
   */
  hasDispositionEnabled() {
    const user = this.stateService.getUser();
    const userProfile = this.stateService.getUserProfile();
    if (user?.disableDisposition === "userProfile") {
      if (
        // eslint-disable-next-line no-prototype-builtins
        !userProfile?.hasOwnProperty("disableDisposition") || // eslint-disable-next-line no-prototype-builtins
        userProfile.hasOwnProperty("disableDisposition") && (userProfile.disableDisposition === null || userProfile.disableDisposition === void 0)
      ) {
        return true;
      } else {
        return userProfile.disableDisposition === false;
      }
    }
    if (
      // eslint-disable-next-line no-prototype-builtins
      !user?.hasOwnProperty("disableDisposition") || // eslint-disable-next-line no-prototype-builtins
      user.hasOwnProperty("disableDisposition") && (user.disableDisposition === null || user.disableDisposition === void 0)
    ) {
      return true;
    }
    return user.disableDisposition === "off" || user.disableDisposition === false;
  }
  sendLoadDirectoryDataRequest() {
    this.logger.trace("BaseUserService - sendLoadDirectoryDataRequest");
    return axiosInstance.get("/users/api/directory");
  }
  handleSocketConnectedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SocketConnectedNotification)).subscribe(() => {
      this.logger.trace("BaseUserService - handleSocketConnectedNotification");
      this.eventsService.emitExternal(ExternalEvents.Ready);
      if (this.stateService.getDomainEnvironment() === "ncc") {
        this.sendLoadDirectoryDataRequest().catch((error) => {
          this.logger.error(error);
        });
      }
    });
  }
  /**
   * Handles the logout event by updating the logged-in status, disconnecting the socket,
   * emitting a logout notification event, and throwing a LogoutNotification error.
   */
  handleSocketNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.LogoutNotification)).subscribe((event) => {
      const logoutNotification = event.getProperties();
      this.logger.debug("BaseUserService - handleSocketNotification", logoutNotification);
      this.datadogService?.addAction(event.name, event.data);
      if (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        logoutNotification.deviceId === void 0 || // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        logoutNotification.deviceId === null || // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        logoutNotification.deviceId === dependencyInjectionContainer.resolve("stateService").getDevice()?._id
      ) {
        this.logout(false).catch((error) => {
          this.logger.error("BaseUserService - logout - error", error);
        });
      }
    });
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WallboardNotification)).subscribe((event) => {
      this.eventsService.emitExternal(event.name, event.data);
    });
  }
  /**
   * Automatically logs in to the ACD (Automatic Call Distributor) system.
   * If auto login to ACD is not enabled, it returns undefined.
   *
   * @returns A promise that resolves to the result of the login operation.
   */
  async autoLoginToAcd() {
    this.logger.trace("BaseUserService - autoLoginToAcd");
    try {
      this.eventsService.emitExternal(ExternalEvents.InitAutoLoginToAcd);
      if (!this.hasAutoLoginToACD()) {
        this.eventsService.emitExternal(
          ExternalEvents.InitAutoLoginToAcdError,
          "Auto login to ACD not enabled"
        );
        return void 0;
      }
      const userId = this.stateService.getUserId();
      this.logger.info(
        `BaseUserService - autoLoginToAcd - user [${userId}] has acdAutoLogin enabled`
      );
      const { settings } = await Promise.resolve(
        this.schemaTypeClient.retrieve("user", { id: userId })
      );
      const acdChannelsToFilter = settings.acd?.channels;
      const allAcdChannels = this.getUserProfileChannelsForACD();
      const filteredChannels = Object.fromEntries(
        Object.entries(allAcdChannels).filter(
          ([, value]) => acdChannelsToFilter?.includes(value.channelId)
        )
      );
      const payload = {
        channels: filteredChannels,
        queues: this.getUserQueueIdsForACD(),
        status: this.getStatusForAcdLogin()
      };
      this.eventsService.emitExternal(ExternalEvents.InitAutoLoginToAcdEnabled);
      return await this.loginToAcd(payload);
    } catch (error) {
      this.eventsService.emitExternal(ExternalEvents.InitAutoLoginToAcdError);
      throw error;
    }
  }
  /**
   * Handles the session change notification event.
   */
  handleSessionChangeNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SessionChangeNotification)).subscribe((event) => {
      this.logger.trace(`UserService - handleSessionChangeNotification`, event.getProperties());
      const sessionChangeNotification = event.getProperties();
      this.setInConference(sessionChangeNotification.inConference);
      this.setIsRecording(sessionChangeNotification.inRecording);
      this.setLoggedInToACD(sessionChangeNotification.acdLoginAt);
      const updatedSession = this.stateService.setACDLoggedInAt(
        sessionChangeNotification.acdLoginAt
      );
      if (updatedSession) {
        this.eventsService.emitExternal(
          ExternalEvents.SessionStateUpdateNotification,
          updatedSession
        );
      }
    });
  }
  /**
   * The function `addDirectoryItem` adds an item to an array based on the type and ID provided.
   * @param {string} type - The `type` parameter in the `addDirectoryItem` function represents the type
   * of directory item being added. It could be a category, folder, or any other classification for the
   * item.
   * @param {string} id - The `id` parameter in the `addDirectoryItem` function represents the unique
   * identifier of the directory item that you want to add to the directory.
   */
  addDirectoryItem(type, id2) {
    const tmp = this.getArray(type, null);
    if (tmp !== null && !tmp.includes(id2)) {
      tmp.push(id2);
      this.saveDirectoryData();
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getArray(type, _returnValue) {
    const tmp = this[type];
    return tmp;
  }
  /**
   * The function `saveDirectoryData` saves directory data including queues, topics, and users.
   */
  saveDirectoryData() {
    const fieldname = "directory";
    const value = {
      queues: this.queues,
      topics: this.topics,
      users: this.users
    };
    this.saveUserInformation(fieldname, value);
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  saveUserInformation(_fieldname, _value, _callback) {
  }
  /**
   * Adds a speed dial entry for a user.
   * @param to - The phone number to add as a speed dial.
   * @param name - The name associated with the speed dial entry.
   */
  addSpeedDial(to, name) {
    let found = false;
    const time = (/* @__PURE__ */ new Date()).getTime();
    this.speedDials.filter((speedDial) => speedDial.phone === to).forEach((speedDial) => {
      speedDial.time = time;
      found = true;
    });
    if (!found) {
      this.speedDials.push({
        name: name === "Unknown" ? to : name,
        phone: to,
        time
      });
    }
  }
  /**
   * This function will
   *
   * @Param None
   *
   * @returns None
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getSpeedDials() {
    return this.speedDials;
  }
  /**
   *
   * @param acdLoginAt
   * @deprecated Use sdk.getStateService().setACDLoggedInAt(acdLoginAt: number)
   */
  setLoggedInToACD(acdLoginAt) {
    this.acdLoginAt = acdLoginAt;
  }
  /**
   * This TypeScript function logs the value of `acdLoginAt` and returns it.
   * @returns The `acdLoginAt` property is being returned from the `isLoggedInToACD` method.
   * @deprecated Use sdk.getStateService().isLoggedInToACD()
   */
  isLoggedInToACD() {
    return this.acdLoginAt;
  }
  /**
   * The function `setInConference` logs a message, updates the `inConference` property, and
   * potentially emits an external notification event.
   * @param {boolean} inConference - The `inConference` parameter is a boolean value that indicates
   * whether a user is currently in a conference or not.
   */
  setInConference(inConference) {
    this.inConference = inConference;
  }
  /**
   * This TypeScript function returns a boolean value indicating whether the object is in a conference.
   * @returns The method `isInConference` returns the value of the `inConference` property, which is a
   * boolean value indicating whether the object is currently in a conference.
   */
  isInConference() {
    return this.inConference;
  }
  /**
   *
   * @param isRecording
   */
  setIsRecording(isRecording) {
    this.inRecording = isRecording;
  }
  /**
   *
   * @returns
   */
  isRecording() {
    return this.inRecording;
  }
  /**
   * Initiates a call to a user's extension. The method supports two types of payloads:
   * a string representing the user ID or an object containing additional details.
   *
   * @param payload - The payload for dialing the extension. It can either be:
   *   - A string representing the user ID.
   *   - An object containing the following properties:
   *     - `campaignId` (optional): The ID of the campaign associated with the call.
   *     - `userId` (required): The ID of the user to be called.
   * @returns A promise that resolves to a `DialResponse` object containing the result of the call.
   */
  async dialExtension(payload) {
    await this.telephonyService.getSelectedImplementation()?.checkToken();
    const isPayloadAString = typeof payload === "string";
    const userId = isPayloadAString ? payload : payload.userId;
    this.logger.debug(`BaseUserService - dialExtension - dialing user [${userId}]`);
    const { data } = await axiosInstance.post(
      `/users/api/users/${userId}/calls`,
      !isPayloadAString && payload.campaignId ? { campaignId: payload.campaignId, clientContext: payload.clientContext } : {}
    );
    return data;
  }
  getProperties(properties, files) {
    if (!files?.length) {
      return properties;
    }
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });
    formData.append("object", JSON.stringify(properties));
    return formData;
  }
  async sendAction({
    actionName,
    campaignId,
    contactId,
    contactIds,
    context,
    conversationId,
    file,
    files,
    force,
    from,
    fromNumber,
    groupSMSParentTicketId,
    name,
    nonAssignedAgentReply,
    option,
    properties,
    queueId,
    ticketId,
    to,
    toAddresses,
    toNumbers,
    url,
    workitemId
  }) {
    this.logger.debug(
      `BaseUserService - sendAction - action [${actionName}] campaignId [${campaignId} ] to [${to}] name [${name}] option [${option}] contactId [${contactId}]`,
      properties
    );
    if (name === null) {
      name = to;
    }
    if (!contactId) {
      contactId = null;
    }
    const content = {
      campaignId,
      clientContext: null,
      contactId,
      contactIds,
      contactName: name,
      conversationId,
      from,
      fromAddressOption: option,
      fromNumber,
      groupSMSParentTicketId,
      nonAssignedAgentReply,
      overwrite: force,
      queueId,
      ticketId,
      to,
      toAddresses,
      toNumbers,
      workitemId
    };
    const keys = Object.keys(properties || {});
    for (const key of keys) {
      content[key] = properties[key];
    }
    if (context) {
      content.clientContext = context;
    }
    try {
      let config;
      let requestFiles = null;
      if (file || files?.length) {
        config = { headers: { "Content-Type": "multipart/form-data" } };
        if (files?.length) {
          requestFiles = files;
        } else if (file) {
          requestFiles = [file];
        }
      }
      const response = await axiosInstance.post(
        url,
        this.getProperties(content, requestFiles),
        config
      );
      if (actionName === "dial") {
        this.addSpeedDial(to, name);
      }
      return response;
    } catch (error) {
      this.logger.error(`BaseUserService - sendAction - action [${actionName}] failed`, error);
      throw error;
    }
  }
  async dial(payload) {
    let { campaignId } = payload;
    const {
      conferenceWorkitemId,
      contactId,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      context,
      conversationId,
      force,
      from,
      name,
      option,
      queueId,
      spoofWorkitemId,
      ticketId,
      to,
      workitemId
    } = payload;
    this.logger.debug("BaseUserService - dial - invoked with payload", payload);
    await this.telephonyService.getSelectedImplementation()?.checkToken();
    const isNext2 = getDefaultRequestHeader("Nextiva-Platform") === "next2";
    if (!campaignId && !isNext2) {
      campaignId = this.stateService.getUser()?.settings.general?.defaultCampaignId;
      if (campaignId) {
        const campaign = this.stateService.getCampaign(campaignId);
        if (!campaign?.useForOutbound) {
          campaignId = null;
        }
      }
    }
    if (!campaignId && !isNext2) {
      throw new Error("Campaign Id is required");
    } else if (!campaignId && !conversationId && !queueId && isNext2) {
      throw new Error("Campaign Id or Conversation Id or Queue Id is required");
    }
    const { data } = await this.sendAction({
      actionName: "dial",
      campaignId: campaignId ?? void 0,
      contactId,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      context,
      conversationId,
      force,
      from,
      name,
      option,
      properties: { conferenceWorkitemId, spoofANI: spoofWorkitemId },
      queueId,
      ticketId,
      to,
      url: "/users/api/calls",
      workitemId
    });
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async email(payload) {
    this.logger.debug("BaseUserService - email - invoked with payload", payload);
    let { campaignId } = payload;
    const {
      contactId,
      email,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file,
      force,
      from,
      name,
      nonAssignedAgentReply,
      option,
      ticketId,
      to,
      toAddresses,
      workitemId
    } = payload;
    if (!campaignId) {
      campaignId = this.stateService.getUser()?.settings.general?.defaultEmailCampaignId;
      let campaign;
      if (campaignId) {
        campaign = this.stateService.getCampaign(campaignId);
      }
      if (!campaign?.useForEmail) {
        campaignId = null;
      }
    }
    if (!campaignId) {
      throw new Error("Campaign Id is required");
    }
    const { data } = await this.sendAction({
      actionName: "email",
      campaignId,
      contactId,
      context: null,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file,
      force,
      from,
      name,
      nonAssignedAgentReply,
      option,
      properties: email,
      ticketId,
      to,
      toAddresses,
      url: "/users/api/emails",
      workitemId
    });
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async sms(payload) {
    this.logger.debug("BaseUserService - sms - invoked with payload", payload);
    let { campaignId } = payload;
    const {
      contactId,
      contactIds,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file,
      files,
      force,
      from,
      fromNumber,
      groupSMSParentTicketId,
      message,
      name,
      nonAssignedAgentReply,
      option,
      ticketId,
      to,
      toNumbers,
      workitemId
    } = payload;
    if (!campaignId) {
      campaignId = this.stateService.getUser()?.settings.general?.defaultSMSCampaignId;
      let campaign;
      if (campaignId) {
        campaign = this.stateService.getCampaign(campaignId);
      }
      if (!campaign?.useForSMS) {
        campaignId = void 0;
      }
    }
    if (!campaignId) {
      throw new Error("Campaign Id is required");
    }
    const { data } = await this.sendAction({
      actionName: "sms",
      campaignId,
      contactId,
      contactIds,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file,
      files,
      force,
      from,
      fromNumber,
      groupSMSParentTicketId,
      name,
      nonAssignedAgentReply,
      option,
      properties: { message },
      ticketId,
      to,
      toNumbers,
      url: "/users/api/sms",
      workitemId
    });
    return data;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async fax(payload) {
    this.logger.debug("BaseUserService - fax - invoked with payload", payload);
    let { campaignId } = payload;
    const {
      contactId,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file,
      force,
      from,
      message,
      name,
      nonAssignedAgentReply,
      option,
      ticketId,
      to,
      workitemId
    } = payload;
    if (!campaignId) {
      campaignId = this.stateService.getUser()?.settings.general?.defaultFaxCampaignId;
      let campaign;
      if (campaignId) {
        campaign = this.stateService.getCampaign(campaignId);
      }
      if (!campaign?.useForFax) {
        campaignId = void 0;
      }
    }
    if (!campaignId) {
      throw new Error("Campaign Id is required");
    }
    const { data } = await this.sendAction({
      actionName: "fax",
      campaignId,
      contactId,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      file,
      force,
      from,
      name,
      nonAssignedAgentReply,
      option,
      properties: { message },
      ticketId,
      to,
      url: "/users/api/fax",
      workitemId
    });
    return data;
  }
  /**
   * This function will connect the caller to the server by having the server call his phone configured in his settings
   *
   * @Param None
   *
   * @returns None
   */
  async connectToServer() {
    this.logger.trace("BaseUserService - connectToServer");
    const response = await axiosInstance.post("/users/api/calls/connectme", {});
    this.logger.info("BaseUserService - connectToServer - resolved successfully");
    return response;
  }
  /**
   * This function will disconnect the caller from the server. Any calls in process will be disconnected.
   *
   * @Param None
   *
   * @returns None
   */
  async disconnectFromServer() {
    this.logger.trace("BaseUserService - disconnectFromServer");
    const response = await axiosInstance.post("/users/api/calls/disconnectme", {});
    this.telephonyService.getSelectedImplementation()?.disconnectAll();
    this.logger.info("BaseUserService - disconnectFromServer - resolved successfully");
    return response;
  }
  /**
   * This function will reset the agent line. Any calls in process will be disconnected.
   *
   * @Param None
   *
   * @returns None
   */
  async reset() {
    const response = await axiosInstance.post("/users/api/calls/reset", {});
    this.telephonyService.getSelectedImplementation()?.disconnectAll();
    this.logger.info("BaseUserService - reset - resolved successfully");
    return response;
  }
  /**
   * This function will mute the agent's phone, confirmation will be sent on the socket in PhoneStateNotification event
   *
   * @returns 200 OK if successfull
   */
  async mute() {
    const response = await axiosInstance.get("/users/api/calls/muteme");
    this.logger.info("BaseUserService - mute - resolved successfully");
    return response;
  }
  /**
   * This function will unmute the agent's phone, confirmation will be sent on the socket in PhoneStateNotification event
   *
   * @returns 200 OK if successfull
   */
  async unMute() {
    const response = await axiosInstance.delete("/users/api/calls/muteme");
    this.logger.info("BaseUserService - unMute - resolved successfully");
    return response;
  }
  /**
   * This function sends a POST request to enter a conference and logs the success or error response.
   * @returns The `enterConference` function is returning the response from the POST request made to
   * the '/users/api/calls/conference' endpoint using axiosInstance.
   */
  async enterConference() {
    const response = await axiosInstance.post("/users/api/calls/conference", {});
    this.logger.info("BaseUserService - enterConference - resolved successfully");
    return response.data;
  }
  /**
   * Exits the conference.
   *
   * @returns A promise that resolves to the response from the server.
   * @throws If an error occurs during the API call.
   */
  async exitConference() {
    const response = await axiosInstance.delete("/users/api/calls/conference");
    this.logger.info("BaseUserService - exitConference - resolved successfully");
    return response.data;
  }
  /**
   * Sends a keep-alive signal to the server.
   *
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while making the request.
   */
  async keepAlive() {
    this.logger.debug("BaseUserService - keepAlive - attempting to send keep-alive");
    const response = await axiosInstance.post("/users/api/keepalive", {});
    return response;
  }
  startKeepAlive() {
    if (this.keepAliveTimer) {
      return;
    }
    this.keepAliveTimer = setInterval(() => {
      void this.keepAlive();
    }, KEEP_ALIVE_INTERVAL_MS);
  }
  stopKeepAlive() {
    if (!this.keepAliveTimer) {
      return;
    }
    clearInterval(this.keepAliveTimer);
    this.keepAliveTimer = void 0;
  }
  /**
   * Listens for updates related to a specific user.
   *
   * @param userId - The ID of the user to listen for updates.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while making the request.
   */
  async listen(userId) {
    this.logger.debug(`BaseUserService - listen - attempting to listen in on user [${userId}]`);
    const response = await axiosInstance.post(`/users/api/supervisor/users/${userId}/listen`, {});
    this.logger.info("BaseUserService - listen - resolved successfully");
    return response;
  }
  /**
   * Joins a user with the specified userId.
   *
   * @param userId - The ID of the user to join.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while joining the user.
   */
  async join(userId) {
    this.logger.debug(`BaseUserService - join - attempting to join user [${userId}]`);
    const response = await axiosInstance.post(`/users/api/supervisor/users/${userId}/join`, {});
    this.logger.info("BaseUserService - join - resolved successfully");
    return response;
  }
  /**
   * Assigns a coach to a user.
   *
   * @param userId - The ID of the user to assign a coach to.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while assigning the coach.
   */
  async coach(userId) {
    this.logger.debug(`BaseUserService - coach - attempting to coach user [${userId}]`);
    const response = await axiosInstance.post(`/users/api/supervisor/users/${userId}/coach`, {});
    this.logger.info("BaseUserService - coach - resolved successfully");
    return response;
  }
  /**
   * Records the user with the specified userId.
   * @param userId - The ID of the user to be recorded.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while recording the user.
   */
  async record(userId) {
    this.logger.debug(`BaseUserService - record - attempting to record user [${userId}]`);
    const response = await axiosInstance.post(`/users/api/supervisor/users/${userId}/record`, {});
    this.logger.info("BaseUserService - record - resolved successfully");
    return response;
  }
  /**
   * Retrieves the work items on a specific user.
   *
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while retrieveing the work items.
   */
  //still in progress
  async workitems(userId) {
    this.logger.debug(
      `BaseUserService - workitems - attempting to fetch user [${userId}] workitems`
    );
    const response = await axiosInstance.get(
      `/users/api/supervisor/users/${userId}/workitems`,
      {}
    );
    return response;
  }
  /**
   * Changes the status of an user logged to ACD.
   *
   * @param userId - The ID of the user.
   * @param statusId - The ID of the new status.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs when changing the status.
   */
  async changeStatus(userId, statusId) {
    this.logger.debug(
      `BaseUserService - changeStatus - changing user [${userId}] status [${statusId}]`
    );
    const response = await axiosInstance.post(
      `/users/api/supervisor/users/${userId}/status/${statusId}`,
      {}
    );
    this.logger.info("BaseUserService - changeStatus - resolved successfully");
    return response;
  }
  /**
   * Resets the compliance value of an user.
   *
   * @param userId - The ID of the user.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs when reseting the compliance of an user..
   */
  async resetCompliance(userId) {
    this.logger.debug(
      `BaseUserService - resetCompliance - resetting compliance for user [${userId}]`
    );
    const response = await axiosInstance.delete(
      `/users/api/supervisor/users/${userId}/compliance`,
      {}
    );
    return response;
  }
  /**
   * Terminates a user.
   * @param userId - The ID of the user to terminate.
   * @returns A Promise that resolves to the response from the termination API.
   * @throws If an error occurs during the termination process.
   */
  async terminate(userId) {
    this.logger.debug(`BaseUserService - terminate - user [${userId}]`);
    const response = await axiosInstance.post(
      `/users/api/supervisor/users/${userId}/terminate`,
      {}
    );
    return response;
  }
  /**
   * Forces a user logout by sending a POST request to the server.
   *
   * @param userId - The ID of the user to force logout.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the logout process.
   */
  async forceLogout(userId) {
    this.logger.debug(`BaseUserService - forceLogout - forcing user [${userId}] to logout`);
    const response = await axiosInstance.post(`/users/api/supervisor/users/${userId}/logout`, {});
    this.logger.info("BaseUserService - forceLogout - resolved successfully");
    return response;
  }
  /**
   * Forces logout and disables a user.
   * @param userId - The ID of the user to force logout and disable.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the request.
   */
  async forceLogoutAndDisable(userId) {
    this.logger.debug(`BaseUserService - forceLogoutAndDisable - disabling user [${userId}]`);
    const response = await axiosInstance.post(`/users/api/supervisor/users/${userId}/disable`, {});
    this.logger.info("BaseUserService - forceLogoutAndDisable - resolved successfully");
    return response;
  }
  /**
   * Terminates a workitem.
   * @param workitemId - The ID of the workitem to terminate.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the termination process.
   */
  async terminateWorkitem(workitemId) {
    this.logger.debug(`BaseUserService - terminateWorkitem - terminating workitem [${workitemId}]`);
    const response = await axiosInstance.delete(`/users/api/supervisor/workitems/${workitemId}`);
    this.logger.info("BaseUserService - terminateWorkitem - resolved successfully");
    return response;
  }
  /**
   * Transfers a workitem to the queue.
   * @param workitemId - The ID of the workitem to be transferred.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the transfer process.
   */
  async transferWorkitem(workitemId) {
    this.logger.debug(
      `BaseUserService - transferWorkitem - transferring workitem [${workitemId}] back to queue`
    );
    const response = await axiosInstance.post(
      `/users/api/supervisor/workitems/${workitemId}/backtoqueue`,
      {}
    );
    this.logger.info("BaseUserService - transferWorkitem - resolved successfully");
    return response;
  }
  /**
   * Transfers a workitem to a function.
   * @param workitemId - The ID of the workitem to transfer.
   * @param functionId - The ID of the function to transfer the workitem to.
   * @param properties - Additional properties to include in the transfer request.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the transfer process.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async transferToFunction(workitemId, functionId, properties) {
    this.logger.debug(
      `BaseUserService - transferToFunction - transferring workitem [${workitemId}] to function [${functionId}]`
    );
    const response = await axiosInstance.post(
      `/users/api/supervisor/workitems/${workitemId}/function`,
      {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        data: properties,
        functionId
      }
    );
    this.logger.info("BaseUserService - transferToFunction - resolved successfully");
    return response;
  }
  /**
   * Terminates a workitem with the specified disposition.
   * @param {string} workitemId - The ID of the workitem to terminate.
   * @param {string} dispositionId - The ID of the disposition to assign to the terminated workitem.
   * @returns {Promise<any>} - A promise that resolves to the response from the server.
   * @throws {Error} - If an error occurs while terminating the workitem.
   */
  async terminateWorkitemWithDisposition(workitemId, dispositionId) {
    this.logger.debug(
      `BaseUserService - terminateWorkitemWithDisposition - terminating workitem [${workitemId}] with disposition [${dispositionId}]`
    );
    const response = await axiosInstance.post(
      `users/api/supervisor/workitems/${workitemId}/terminate`,
      {
        dispositionId
      }
    );
    this.logger.info("BaseUserService - terminateWorkitemWithDisposition - resolved successfully");
    return response;
  }
  /**
   * Stops supervising the user.
   *
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the request.
   */
  async stopSupervising() {
    const response = await axiosInstance.delete("/users/api/supervisor/");
    this.logger.info("BaseUserService - stopSupervising - resolved successfully");
    return response;
  }
  /**
   * Subscribes for Microsoft Teams presence.
   *
   * @returns {Promise<any>} A promise that resolves with the response from the server.
   * @throws {Error} If an error occurs during the subscription process.
   */
  async subscribeForMSTeamsPresence() {
    this.logger.trace("BaseUserService - subscribeForMSTeamsPresence");
    const response = await axiosInstance.post("/users/api/teams/subscribe", {});
    return response;
  }
  /**
   * Starts supervision for a user with the specified ID and workitem ID.
   * @param userId - The ID of the user to start supervision for.
   * @param workitemId - The ID of the workitem to monitor.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while sending the request.
   */
  async supervisionStarted(userId, workitemId) {
    this.logger.debug(
      `BaseUserService - supervisionStarted - starting supervision of user [${userId}] and workitem [${workitemId}]`
    );
    const response = await axiosInstance.post(
      `/users/api/supervisor/users/${userId}/${workitemId}/monitor`,
      {}
    );
    this.logger.info("BaseUserService - supervisionStarted - resolved successfully");
    return response;
  }
  /**
   * Starts monitoring for a workItem with the specified ID.
   * @param workitemId - The ID of the workitem to monitor.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while sending the request.
   */
  async monitorWorkitem(workitemId) {
    this.logger.debug(`BaseUserService - monitorWorkitem - monitoring workitem [${workitemId}]`);
    const response = await axiosInstance.post(
      `/users/api/supervisor/workitems/${workitemId}/monitor`,
      {}
    );
    this.logger.info("BaseUserService - monitorWorkitem - resolved successfully");
    return response;
  }
  /**
   * Stops monitoring for a workitem with the specified workitemId.
   * @param workitemId - The ID of the workitem to stop monitoring.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while sending the request.
   */
  async stopMonitorWorkitem(workitemId) {
    this.logger.debug(
      `BaseUserService - stopMonitorWorkitem - stop monitoring workitem [${workitemId}]`
    );
    const response = await axiosInstance.delete(
      `/users/api/supervisor/workitems/${workitemId}/monitor`
    );
    this.logger.info("BaseUserService - stopMonitorWorkitem - resolved successfully");
    return response;
  }
  /**
   * Starts monitoring a user's ticket with the specified user ID and ticket ID.
   * @param userId - The ID of the user to monitor.
   * @param ticketId - The ID of the ticket to monitor.
   * @returns A Promise that resolves to the empty response.
   * @throws If an error occurs while sending the request.
   */
  async monitorUserTicket({
    ticketId,
    userId
  }) {
    this.logger.debug(
      `BaseUserService - monitorUserTicket - monitoring user [${userId}] ticket [${ticketId}]`
    );
    await axiosInstance.post(
      `/users/api/supervisor/users/${userId}/ticket/${ticketId}/monitor`,
      {}
    );
    this.logger.info("BaseUserService - monitorUserTicket - resolved successfully");
  }
  /**
   * Sends a notification to a user.
   *
   * @param userId - The ID of the user to send the notification to.
   * @param type - The type of the notification.
   * @param message - The message content of the notification.
   * @param duration - The duration of the notification in milliseconds.
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs while sending the notification.
   */
  async sendNotification(userId, type, message, duration) {
    const notification = {
      duration,
      message,
      type
    };
    this.logger.debug(
      `BaseUserService - sendNotification - sending notification to user [${userId}]`,
      notification
    );
    const response = await axiosInstance.post(
      `/users/api/supervisor/users/${userId}/notify`,
      notification
    );
    return response;
  }
  /**
   * This function retrieves voicemails based on the specified range type and whether to include only new
   * voicemails.
   * @param {RangeType} rangeType - The `rangeType` parameter is used to specify the type of range for
   * which voicemails should be retrieved. It could be a specific time range, such as "today", "this
   * week", "this month", etc.
   * @param {boolean} newOnly - The `newOnly` parameter is a boolean flag that indicates whether only new
   * voicemails should be retrieved. If `newOnly` is set to `true`, only new voicemails will be returned.
   * If `newOnly` is set to `false`, all voicemails within the specified
   * @returns The `getVoicemails` method is being returned, which is a promise that resolves to the
   * result of calling the `getVoicemails` method on the `widget` object with the specified `rangeType`
   * and `newOnly` parameters.
   */
  async getVoicemails(rangeType, newOnly) {
    return await this.widget.getVoicemails(rangeType, newOnly);
  }
  /**
   * This TypeScript function retrieves missed calls based on the specified range type and whether to
   * include only new missed calls.
   * @param {RangeType} rangeType - The `rangeType` parameter in the `getMissedCalls` method likely
   * specifies the type of range for which missed calls should be retrieved. This could be a specific
   * time range, such as "today", "yesterday", "last 7 days", or a custom date range. The actual
   * @param {boolean} newOnly - The `newOnly` parameter is a boolean value that indicates whether you
   * want to retrieve only new missed calls or all missed calls. If `newOnly` is set to `true`, the
   * method will return only new missed calls. If `newOnly` is set to `false`, the method will
   * @returns The `getMissedCalls` method is being returned, which is a promise that resolves to the
   * result of calling the `getMissedCalls` method on the `widget` object with the provided `rangeType`
   * and `newOnly` parameters.
   */
  async getMissedCalls(rangeType, newOnly) {
    return await this.widget.getMissedCalls(rangeType, newOnly);
  }
  /**
   * This function asynchronously retrieves historical data based on the specified range type.
   * @param {RangeType} rangeType - The `rangeType` parameter in the `getHistory` method is of type
   * `RangeType`. It is used to specify the type of range for which you want to retrieve history data.
   * @returns The `getHistory` method is being returned, which is a promise that resolves to the result
   * of calling `this.widget.getHistory(rangeType)`.
   */
  async getHistory(rangeType) {
    return await this.widget.getHistory(rangeType);
  }
  /**
   * This TypeScript function retrieves contact history data based on specified parameters and returns a
   * promise with processed work items or SMS messages.
   * @param {string} contactId - The `contactId` parameter is a string that represents the unique
   * identifier of a contact for which you want to retrieve the contact history. This function fetches
   * the contact history data based on the provided `contactId`, `rangeType`, `q`, `rows`, and `start`
   * parameters.
   * @param {RangeType} rangeType - The `rangeType` parameter in the `getContactHistory` function is used
   * to specify the type of range for filtering the contact history data. It is of type `RangeType`,
   * which likely indicates that it can have specific values such as 'daily', 'weekly', 'monthly', etc.
   * The
   * @param {HistoryTypeProperties} mergeProperties - The `mergeProperties` parameter in the
   * `getContactHistory` function is an object that specifies the properties to merge for different
   * history types. It is used to determine which properties to include when merging the history data
   * for different types of work items or SMS messages. The `mergeProperties` object
   * @param {object} [dateRange] - The `dateRange` parameter in the `getContactHistory` function is an
   * optional object that specifies the date range for filtering the contact history data. It contains
   * the `from` and `to` properties, which represent the start and end dates for the date range. If
   * provided, the function will retrieve the contact history data within the specified date range.
   * @param [q=*] - The `q` parameter in the `getContactHistory` method is a search query parameter. It
   * is used to specify a search query to filter the results based on a specific criteria. In this case,
   * the default value for `q` is set to `'*'`, which means that if no
   * @param [rows=1000] - The `rows` parameter in the `getContactHistory` function specifies the maximum
   * number of items to retrieve in a single request. In this case, it is set to a default value of 1000,
   * meaning that the function will retrieve up to 1000 items unless specified otherwise.
   * @param [start=0] - The `start` parameter in the `getContactHistory` function is used to specify the
   * starting index from which to retrieve the contact history data. It determines the offset for the
   * query results, allowing you to paginate through the data by fetching a subset of records starting
   * from the specified index.
   * @returns The `getContactHistory` method is returning a Promise that resolves to an array of either
   * `ProcessedWorkitem` or `ProcessedSMSMessage` objects.
   */
  async getHistoryByContactId({
    contactId,
    dateRange,
    mergeProperties = DefaultMergeProperties,
    q = "*",
    rangeType,
    rows = 1e3,
    start = 0
  }) {
    const params = {
      contactId,
      q,
      rangeType,
      rows,
      start
    };
    if (dateRange) {
      params.rangeFrom = new Date(dateRange.from).getTime();
      params.rangeTo = new Date(dateRange.to).getTime();
    }
    this.logger.debug(
      `BaseUserService - getHistoryByContactId - fetching history for contact [${contactId}]`,
      params
    );
    const response = await axiosInstance.get(`/analytics/api/types/workitems`, {
      params
    });
    const objects = this.mergeHistory(response.data.objects ?? [], mergeProperties);
    const result = {
      count: objects.length,
      objects
    };
    return result;
  }
  /**
   * The function `mergeHistory` takes an array of workitems and returns an array of processed
   * workitems or SMS messages based on the type of each workitem.
   * @param {Workitem[]} workitems - The `mergeHistory` function takes an array of `Workitem` objects
   * as input. The function processes each `Workitem` based on its type and returns an array of either
   * `ProcessedWorkitem` or `ProcessedSMSMessage` objects.
   * @returns An array of either ProcessedWorkitem objects or ProcessedSMSMessage objects, depending on
   * the type of workitem passed into the function.
   */
  mergeHistory(workitems, mergeHistory) {
    return workitems.flatMap((workitem) => {
      switch (workitem.type) {
        case WorkitemTypes.OutboundCall:
          return {
            ...pick(workitem, mergeHistory?.["OutboundCall"] ?? DefaultMergeProperties.Default)
          };
        case WorkitemTypes.InboundCall:
          return {
            ...pick(workitem, mergeHistory?.["InboundCall"] ?? DefaultMergeProperties.Default)
          };
        case WorkitemTypes.OutboundSMS:
          return (workitem.smsMessages ?? []).map((message) => ({
            ...pick(workitem, mergeHistory?.["OutboundSMS"] ?? DefaultMergeProperties.Default),
            message
          }));
        case WorkitemTypes.Chat:
          return (workitem.chatMessages ?? []).map((message) => ({
            ...pick(workitem, mergeHistory?.["Chat"] ?? DefaultMergeProperties.Default),
            message
          }));
        default:
          return {
            ...pick(workitem, DefaultMergeProperties.Default)
          };
      }
    });
  }
  /**
   * This function asynchronously retrieves callbacks based on a specified range type.
   * @param {RangeType} rangeType - The `rangeType` parameter is a variable that specifies the type of
   * range for which callbacks are being retrieved. It is used to determine the specific callbacks
   * associated with that range type.
   * @returns The `getCallbacks` method is being returned, which is a promise that resolves to the
   * callbacks for the specified `rangeType`.
   */
  async getCallbacks(rangeType) {
    return await this.widget.getCallbacks(rangeType);
  }
  hasAutoLoginToACD() {
    return this.stateService.hasAutoLoginToACD();
  }
  /**
   * This TypeScript function retrieves an array of queue IDs associated with a user.
   * @returns An array of queue IDs is being returned.
   */
  getUserQueues() {
    return this.stateService.getUser()?.queues?.objects ?? [];
  }
  getUserQueueIdsForACD() {
    let queueIds = [];
    const user = this.stateService.getUser();
    const queues = this.getUserQueues();
    if (user?.allowAcdChanges && user.settings.acd?.queues) {
      queueIds = user.settings.acd.queues.filter(
        (queueId) => queues.some((queue) => queue.queueId === queueId)
      );
    }
    if (queueIds.length === 0) {
      queueIds = queues.map((queue) => queue.queueId);
    }
    return queueIds;
  }
  /**
   * Retrieves the user profile channels.
   * @returns An array of Channel objects representing the user profile channels.
   */
  getUserProfileChannels() {
    return this.stateService.getUserProfile()?.channels.objects;
  }
  getUserProfileChannelsForACD() {
    const channels = {};
    this.getUserProfileChannels()?.forEach(
      ({ enabled, expansions, limit, multitasking, priority }) => {
        channels[expansions.channelId.type] = {
          channelId: expansions.channelId.channelId,
          enabled,
          limit,
          multitasking,
          priority
        };
      }
    );
    return channels;
  }
  getStatusForAcdLogin() {
    const defaultAcdLoginStatus = this.stateService.getUser()?.defaultAcdLoginStatus;
    const status = defaultAcdLoginStatus === void 0 ? void 0 : this.stateService.getStatuses()?.find((status2) => defaultAcdLoginStatus === status2.statusId);
    return {
      status: status ? status.status : -1,
      statusId: status ? status._id : "-1"
    };
  }
  async fetchSurveys(params) {
    const response = await axiosInstance.get("users/api/types/survey", {
      params
    });
    return response.data;
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().search('user')
   */
  async fetchUsers(payload) {
    this.logger.warn(
      "BaseUserService - fetchUsers is deprecated and will be removed in a future version"
    );
    return this.schemaTypeClient.search("user", payload);
  }
  /**
   * @deprecated Use sdk.getSchemaTypeClient().retrieve('user', { id: "..." })
   */
  async fetchUser(id2) {
    this.logger.warn(
      "BaseUserService - fetchUser is deprecated and will be removed in a future version"
    );
    let data = await this.schemaTypeClient.retrieve("user", { id: id2 });
    if (!data.expansions?.voiceSettingsId) {
      try {
        await this.createDefaultUserVoiceSettings(id2);
        data = await this.schemaTypeClient.retrieve("user", { id: id2 });
      } catch (error) {
        this.logger.error("BaseUserService - fetchUser - createDefaultUserVoiceSettings", error);
      }
    }
    return data;
  }
  /**
   * Create default settings for a user ID. Passing an empty object will create default settings.
   *
   * @param userId - The ID of the user to fetch.
   * @returns A promise that resolves to the fetched settings.
   */
  async createDefaultUserVoiceSettings(userId) {
    this.logger.warn(
      "BaseUserService - createDefaultUserVoiceSettings is deprecated and will be removed in a future version"
    );
    const url = this.stateService.getSchemaTypeLinkURI({
      link: "createForUser",
      name: "voicesettings",
      replacements: { userId }
    });
    await axiosInstance.post(url, {});
  }
  /**
   * Updates Call Forwarding setting for a user ID.
   *
   * @param userId - The ID of the user to update.
   * @returns A promise that resolves to the updated settings.
   * @deprecated Will be removed in a future version. Use updateUserVoiceSettings instead.
   */
  async updateUserCallForwardingVoiceSetting(userId, setting) {
    this.logger.warn(
      "BaseUserService - updateUserCallForwardingVoiceSetting is deprecated and will be removed in a future version"
    );
    return this.updateUserVoiceSettings(userId, {
      callForwardingSettings: setting
    });
  }
  /**
   * Updates Call waiting setting for a user ID.
   *
   * @param userId - The ID of the user to update.
   * @returns A promise that resolves to the updated settings.
   * @deprecated Will be removed in a future version. Use updateUserVoiceSettings instead.
   */
  async updateUserCallWaitingVoiceSetting(userId, setting) {
    this.logger.warn(
      "BaseUserService - updateUserCallForwardingVoiceSetting is deprecated and will be removed in a future version"
    );
    return this.updateUserVoiceSettings(userId, {
      callWaitingSettings: setting
    });
  }
  /**
   * Updates Voicemail setting for a user ID.
   *
   * @param userId - The ID of the user to update.
   * @returns A promise that resolves to the updated settings.
   * @deprecated Will be removed in a future version. Use updateUserVoiceSettings instead.
   */
  async updateUserVoicemailVoiceSetting(userId, setting) {
    this.logger.warn(
      "BaseUserService - updateUserCallForwardingVoiceSetting is deprecated and will be removed in a future version"
    );
    return this.updateUserVoiceSettings(userId, {
      voicemailSettings: setting
    });
  }
  /**
   * Deletes a voicemail greeting for a specified user.
   *
   * @param userId - The ID of the user whose voicemail greeting is to be deleted.
   * @param fileKey - The key of the file representing the voicemail greeting to be deleted.
   * @returns A promise that resolves to the user's voice settings after the voicemail greeting has been deleted.
   * @deprecated Use instead: `schemaTypeClient.request('user', 'deleteFileByKey', { method: 'DELETE', replacements: { fileKey, id }});`
   */
  async deleteVoicemailGreeting(userId, fileKey) {
    this.logger.warn(
      "BaseUserService - deleteVoicemailGreeting is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("user", "deleteFileByKey", {
      fileKey,
      id: userId
    });
    const response = await axiosInstance.delete(url);
    return response.data;
  }
  /**
   * Updates voice settings for a user ID.
   *
   * @param userId - The ID of the user to update.
   * @param {UserVoiceCallSettingsPayload} - The 'settingPayload' parameter is a object that specifies the call settings properites.
   * @returns A promise that resolves to the updated settings.
   * @deprecated User schemaTypeClient.request method instead.
   */
  async updateUserVoiceSettings(userId, settingPayload) {
    this.logger.warn(
      "BaseUserService - updateUserVoiceSettings is deprecated and will be removed in a future version"
    );
    const url = this.stateService.getSchemaTypeLinkURI({
      link: "updateForUser",
      name: "voicesettings",
      replacements: { userId }
    });
    const response = await axiosInstance.post(url, settingPayload);
    return response.data;
  }
  /**
   * Creates a voicemail greeting from text.
   *
   * @param {TextToSpeechPayload} - The `textToSpeechPayload` parameter is a object that specifies the properites of
   * of the greeting being created. It contains the `languageCode`, `text`, `userId`, `voiceGender`, and `voiceName`.
   * @returns A promise that resolves to a VoiceMailGreeting object.
   * @throws If an error occurs during the creation process.
   * @deprecated Use schemaTypeClient.request method instead.
   */
  async convertTextToSpeech({
    languageCode,
    text,
    userId,
    voiceGender,
    voiceName
  }) {
    this.logger.warn(
      "BaseUserService - convertTextToSpeech is deprecated and will be removed in a future version"
    );
    const url = this.schemaTypeClient.getLinkURI("user", "vmgreetingtts", {
      id: userId
    });
    const response = await axiosInstance.post(url, {
      languageCode,
      text,
      voiceGender,
      voiceName
    });
    return response.data;
  }
  /**
   * Generates a TTS voicemail greeting and returns it as a `Blob`.
   *
   * Calls the `vmgreetingtts` action to synthesize speech and obtain a signed URL,
   * then fetches the audio from that URL and returns the raw binary data.
   * Use this instead of {@link convertTextToSpeech} when you need the audio file
   * (e.g. to create an object URL for playback or to upload the greeting).
   *
   * @param payload - The text-to-speech parameters.
   * @param payload.languageCode - BCP-47 language code for the synthesized voice (e.g. `"en-US"`).
   * @param payload.text - The greeting text to convert to speech.
   * @param payload.userId - The ID of the user the greeting belongs to.
   * @param payload.voiceGender - Gender of the synthesized voice (`"MALE"` or `"FEMALE"`).
   * @param payload.voiceName - Name of the specific voice to use.
   * @returns A `Promise` that resolves to a `Blob` containing the synthesized audio.
   * @throws If the API request fails or the signed-URL fetch returns a non-2xx status.
   */
  async generateTtsGreetingBlob({
    languageCode,
    text,
    userId,
    voiceGender,
    voiceName
  }) {
    const result = await this.schemaTypeClient.request(
      "user",
      "vmgreetingtts",
      {
        data: { languageCode, text, voiceGender, voiceName },
        replacements: { id: userId }
      }
    );
    const response = await fetch(result.signedURL);
    if (!response.ok) {
      throw new Error(`TextToSpeech blob fetch failed: ${response.status.toString()}`);
    }
    return response.blob();
  }
  handleACDLoginNotifications() {
    this.eventsService.internalEvents$.pipe(ofType([InternalEvents.ACDLoginNotification, InternalEvents.ACDLogoutNotification])).subscribe((event) => {
      this.logger.debug("BaseUserService - handleACDLoginNotifications - ", event.name, event);
      const { session } = event.getProperties();
      const fixedSession = {
        ...session,
        authorities: session.authorities.map((authority) => {
          if (!authority.objectType) {
            const copyAuthority = { ...authority, objectType: "authorities" };
            return copyAuthority;
          }
          return authority;
        })
      };
      this.setLoggedInToACD(fixedSession.acdLoginAt);
      this.stateService.setSession(fixedSession);
      this.eventsService.emitExternal(
        ExternalEvents.SessionStateUpdateNotification,
        fixedSession
      );
      this.stateService.setAuthorities(fixedSession.authorities);
      this.eventsService.emitExternal(ExternalEvents.ACDSessionChangeNotification, fixedSession);
    });
  }
  async fetchUserHistory({
    agentId,
    agentName,
    rows,
    sort,
    start,
    type
  }) {
    const url = "/analytics/api/types/userhistory/stats";
    const { data } = await axiosInstance.get(url, {
      data: {},
      headers: {
        "Content-Type": "application/json"
      },
      params: {
        agentId,
        agentName,
        rows,
        sort: sort?.field ? `${sort.field} ${sort.order ?? "asc"}` : void 0,
        start,
        type
      }
    });
    return { ...data, objects: data.objects ?? [] };
  }
  async triggerAllUserMessages() {
    this.logger.trace("UserService - triggerAllUserMessages");
    await axiosInstance.get("/users/api/allusermessages");
  }
  /**
   * Sets the user's typing status for the provided context.
   * @param payload Payload containing the typing status information.
   * @param payload.startTyping Whether the user has started typing (true) or stopped typing (false).
   * @param payload.contextId The ID of the object referred to in contextType (conversationId).
   * @param payload.contextType The type of the context where the user is typing ('CONVERSATION').
   * @param payload.source The source of the typing status update (e.g., 'composing').
   * @param payload.tenantId The ID of the current tenant.
   * @param payload.userId The ID of the user that is typing.
   * @param payload.userName The name of the user.
   * @returns Promise that resolves to empty body.
   */
  setUserTyping(payload) {
    const { startTyping, ...body } = payload;
    const url = `/users/api/v1/typing/${payload.startTyping ? "start" : "stop"}`;
    return axiosInstance.post(url, body);
  }
  handleTypingStatusNotification() {
    this.eventsService.internalEvents$.pipe(ofType([InternalEvents.TypingStatusNotification])).subscribe((event) => {
      this.logger.debug("UserService - handleTypingStatusNotification", event);
      this.eventsService.emitExternal(ExternalEvents.TypingStatusNotification, event.data);
    });
  }
  handleUserAutoReplyConfigNotification() {
    this.eventsService.internalEvents$.pipe(ofType([InternalEvents.UserAutoReplyConfigNotification])).subscribe((event) => {
      this.logger.debug("UserService - handleUserAutoReplyConfigNotification", event);
      this.eventsService.emitExternal(ExternalEvents.UserAutoReplyConfigNotification, event.data);
    });
  }
  async updateAppVersionCode(appVersionCode) {
    const response = await axiosInstance.post(
      "/users/api/app-version-code",
      {
        appVersionCode
      }
    );
    return response.data;
  }
  async updateFirebaseToken(firebaseToken) {
    const response = await axiosInstance.post(
      "/users/api/firebase-token-update",
      {
        firebaseToken
      }
    );
    return response.data;
  }
  async updatePushKitToken(pushKitToken) {
    const response = await axiosInstance.post(
      "/users/api/pushkit-token-update",
      {
        pushKitToken
      }
    );
    return response.data;
  }
  /**
   * Generates a signed URL for accessing a user's avatar image.
   *
   * @param {string} userId - The ID of the user whose avatar URL needs to be generated.
   * @returns {string} The signed URL for the user's avatar image.
   */
  buildAvatarSignedURL({ userId }) {
    const baseURL = this.stateService.getBaseURL();
    const token = this.stateService.getToken();
    if (!baseURL) {
      throw new Error(`Expected baseURL to be defined`);
    }
    if (!token) {
      throw new Error(`Expected token to be defined`);
    }
    const user = userId === this.stateService.getUserId() ? this.stateService.getUser() : this.stateService.getUsers()?.find((user2) => userId === user2.userId);
    if (!user) {
      throw new Error(`Expected to find a user with id [${userId}]`);
    }
    if (!user.avatar) {
      return void 0;
    }
    const url = new URL(`${baseURL}/data/api/types/user/${userId}/avatar`);
    url.searchParams.append("token", token);
    url.searchParams.append("filename", user.avatar);
    return url.toString();
  }
  /**
   * Add a canned message to user's favorites.
   * @param payload The payload containing the details of the canned message to be added to favorites.
   * @param payload.junctionId The ID that links the user to the canned message.
   * @param payload.position The position of the canned message in the favorites list (optional).
   * @returns The response containing the details of the canned message added to favorites.
   */
  async addFavoriteCannedMessage(payload) {
    const { data } = await axiosInstance.post(
      "/data/api/types/canned-messages/favorites",
      payload
    );
    return data;
  }
  /**
   * Delete a canned message from the user's favorites
   * @param junctionId The ID that links the user to the canned message to be removed from favorites.
   * @returns A promise that resolves when the deletion is successful.
   */
  async deleteFavoriteCannedMessage(junctionId) {
    await axiosInstance.delete(`/data/api/types/canned-messages/favorites/${junctionId}`);
  }
  async importCannedMessages(id2, file) {
    const formData = new FormData();
    formData.append("file", file);
    const { data } = await axiosInstance.post(
      `/data/api/types/canned-messages/collections/${id2}/import`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    return data;
  }
  handleCannedMessageEvents() {
    this.eventsService.internalEvents$.pipe(
      ofType([
        InternalEvents.CannedMessageCollectionEvent,
        InternalEvents.CannedResponseTemplateEvent,
        InternalEvents.CannedResponseTemplateImportEvent
      ])
    ).subscribe((event) => {
      this.logger.debug("UserService - handleCannedMessageEvents - ", event.name, event);
      this.eventsService.emitExternal(event.name, event.data);
    });
  }
};

// src/internal/services/telephony.ts
var BaseTelephonyService = class {
  selectedImplementation;
  stateService;
  eventsService;
  logger;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.logger = loggerService;
  }
  /**
   * Retrieves the PSTN (Public Switched Telephone Network) object.
   *
   * @returns The PSTN object.
   */
  getPSTN() {
    return dependencyInjectionContainer.resolve("pstn");
  }
  /**
   * Retrieves the Twilio instance.
   * @returns The Twilio instance.
   */
  getTwilio() {
    return dependencyInjectionContainer.resolve("twilio");
  }
  /**
   * Retrieves the Freeswitch instance.
   * @returns The Freeswitch instance.
   */
  getFreeswitch() {
    return dependencyInjectionContainer.resolve("freeswitch");
  }
  /**
   * Gets the selected implementation.
   *
   * @returns The selected implementation.
   */
  getSelectedImplementation() {
    return this.selectedImplementation;
  }
  /**
   * Changes the telephony implementation based on the provided type.
   *
   * @param telephonyImplementationType - The type of telephony implementation to change to.
   * @param options - Optional parameters for changing telephony implementation.
   * @param options.isTelephonyInitAllowed - Indicates whether the telephony implementation should be initialized immediately after changing. If set to `false`, the initialization will be deferred until it is explicitly requested. This can be useful in scenarios where additional setup or configuration is needed before initializing telephony.
   * @returns A promise that resolves when the telephony implementation is changed.
   * @throws An error if the provided telephony type is unsupported or if the required implementations have not been added.
   */
  async changeTelephony(telephonyImplementationType, options) {
    const isTelephonyInitialized = this.stateService.isTelephonyInitialized();
    this.logger.debug(
      `BaseTelephonyService - changeTelephony - invoked with type [${telephonyImplementationType}]`
    );
    this.logger.debug(
      "BaseTelephonyService - changeTelephony - current user",
      this.stateService.getUser()
    );
    this.eventsService.emitExternal(
      ExternalEvents.InitChangeTelephonyImplementation,
      telephonyImplementationType
    );
    let implementation;
    if (telephonyImplementationType === "pstn") {
      implementation = this.getPSTN();
      this.eventsService.emitExternal(ExternalEvents.InitChangeTelephonyImplementationPSTN);
    } else if (telephonyImplementationType === "freeswitch") {
      implementation = this.getFreeswitch();
      this.eventsService.emitExternal(ExternalEvents.InitChangeTelephonyImplementationFreeswitch);
    } else if (telephonyImplementationType === "twilio") {
      implementation = this.getTwilio();
      this.eventsService.emitExternal(ExternalEvents.InitChangeTelephonyImplementationTwilio);
    } else {
      this.eventsService.emitExternal(
        ExternalEvents.InitChangeTelephonyImplementationError,
        telephonyImplementationType
      );
      throw new Error(`Unsupported telephony ${telephonyImplementationType}`);
    }
    if (this.selectedImplementation && this.selectedImplementation !== implementation && isTelephonyInitialized) {
      await this.selectedImplementation.close();
      this.stateService.setIsTelephonyInitialized(false);
    }
    this.selectedImplementation = implementation;
    if (options?.isTelephonyInitAllowed ?? true) {
      return this._changeTelephony(implementation);
    } else {
      this.logger.debug(
        "BaseTelephonyService - changeTelephony - skipping implementation initialization"
      );
      this.stateService.setIsTelephonyInitialized(false);
    }
  }
  /**
   * Changes the telephony implementation and initializes it with the provided session, user, edgeId, and debug flag.
   * If the selected implementation is already the same as the provided telephony, no action is taken.
   * If there is a previously selected implementation, it is closed before changing to the new implementation.
   *
   * @param telephony - The new telephony implementation to be set.
   * @returns A promise that resolves when the new telephony implementation is initialized.
   */
  async _changeTelephony(telephony) {
    const isTelephonyInitialized = this.stateService.isTelephonyInitialized();
    if (this.selectedImplementation === telephony && isTelephonyInitialized) {
      return;
    }
    this.selectedImplementation = telephony;
    const session = this.stateService.getSession();
    const user = this.stateService.getUser();
    const multiloginDevice = this.stateService.getDevice();
    const telephonyConfig = this.stateService.getTelephonyConfig();
    this.logger.debug("_changeTelephony User", user, session, telephonyConfig);
    if (!session || !user || !telephonyConfig) {
      throw new Error("Telephony - session and user not set");
    }
    const edgeId = user.edgeId ?? this.stateService.getUserProfile()?.edgeId ?? null;
    const debug = this.stateService.hasClientTracing();
    await this.selectedImplementation.init({
      debug,
      edgeId,
      multiloginDevice,
      session,
      telephonyConfig,
      user
    });
    this.stateService.setIsTelephonyInitialized(true);
  }
  async close() {
    await this.selectedImplementation?.close();
    this.selectedImplementation = null;
    this.stateService.setIsTelephonyInitialized(false);
  }
};

// src/internal/services/conversation.ts
import { AxiosHeaders as AxiosHeaders2 } from "axios";

// src/utilities/queries/getConversationsQueryOptions.ts
var MY_INBOX_ID = "my-inbox";
var CHANNEL_FILTER_TO_CHANNEL_TYPE = {
  email: ["email"],
  live_chat: ["chat"],
  phone: ["voice"],
  sms: ["sms", "conversation"]
};
function sortItems(items) {
  return [...items].sort((a, b) => b.createdAt - a.createdAt);
}
function filterLatestNItems(items, n) {
  const sortedItems = sortItems(items);
  return sortedItems.slice(0, n);
}
function getConversationsQueryOptions({
  filter: filter3,
  queueIds,
  tab
}) {
  const conversationService = dependencyInjectionContainer.resolve("conversationService");
  const stateService = dependencyInjectionContainer.resolve("stateService");
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log(
        "getConversationsQueryOptions",
        "Fetching conversations",
        queryData,
        (/* @__PURE__ */ new Date()).getTime()
      );
      if (!queryData) {
        conversationService.fetchFeed({
          fetch: "newer",
          filter: filter3,
          includeWorkitems: true,
          limit: stateService.getConversationsCacheLimit().conversations,
          queueIds,
          tab,
          workitemsLimit: stateService.getConversationsCacheLimit().workitems
        }).catch((error) => {
          Logger.error("getConversationsQueryOptions - Error fetching conversations feed", error);
        });
        return {
          engagementData: []
        };
      } else {
        let cursor = -1;
        queryData.engagementData.forEach((engagement) => {
          if (engagement.createdAt > cursor) {
            cursor = engagement.createdAt;
          }
        });
        const cursorValue = cursor > 0 ? cursor : void 0;
        if (conversationService.getLastRequestedCursor(filter3, queueIds, tab) !== cursorValue) {
          conversationService.fetchFeed({
            cursor: cursorValue,
            fetch: "newer",
            filter: filter3,
            includeWorkitems: true,
            limit: stateService.getConversationsCacheLimit().conversations,
            queueIds,
            tab,
            workitemsLimit: stateService.getConversationsCacheLimit().workitems
          }).catch((error) => {
            Logger.error(
              "getConversationsQueryOptions - Error fetching conversations feed",
              error
            );
          });
        }
      }
      const cacheLimit = stateService.getConversationsCacheLimit();
      const filteredEngagements = filterLatestNItems(
        queryData.engagementData,
        cacheLimit.conversations
      );
      return {
        engagementData: filteredEngagements
      };
    },
    queryKey: ["conversations", "push-feed", filter3, tab, queueIds ? queueIds : MY_INBOX_ID]
  };
}
function getWorkitemFromConversationsCache(conversationId, workitemId, client) {
  if (!workitemId) {
    return void 0;
  }
  const data = client.getQueryData([
    "conversations",
    "workitems",
    conversationId
  ]);
  return data?.workitems.find((w) => w.workitemId === workitemId);
}
function getConversationWorkitemsQueryOptions({
  conversationId
}) {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log(
        "getConversationsQueryOptions",
        "Fetching conversations",
        queryData,
        (/* @__PURE__ */ new Date()).getTime()
      );
      if (!queryData) {
        return {
          workitems: []
        };
      }
      const stateService = dependencyInjectionContainer.resolve("stateService");
      const cacheLimit = stateService.getConversationsCacheLimit();
      const limitedWorkitems = filterLatestNItems(queryData.workitems, cacheLimit.workitems);
      return {
        workitems: limitedWorkitems
      };
    },
    queryKey: ["conversations", "workitems", conversationId]
  };
}
function getConversationWorkitemsMultiScopeQueryOptions(params) {
  const conversationService = dependencyInjectionContainer.resolve("conversationService");
  return {
    queryFn: async ({ pageParam }) => {
      const response = await conversationService.fetchV2ConversationsWorkitems({
        contactId: params.contactId,
        conversationIds: params.conversationIds.length ? params.conversationIds : void 0,
        cursor: pageParam,
        filter: params.filter?.length ? params.filter : void 0,
        queueIds: params.queueIds.length ? params.queueIds : void 0
      });
      return response;
    },
    queryKey: [
      "conversations",
      "workitems-multi-scope",
      {
        contactId: params.contactId,
        conversationIds: [...params.conversationIds].sort(),
        filter: params.filter?.length ? [...params.filter].sort() : void 0,
        queueIds: [...params.queueIds].sort()
      }
    ]
  };
}
function getConversationIdByQueueIdQueryOptions({
  contactId,
  queueId
}) {
  const conversationService = dependencyInjectionContainer.resolve("conversationService");
  return {
    queryFn: async () => {
      const cached = conversationService.getConversationIdsByQueueIds({
        filter: "all",
        queueIds: [queueId],
        tab: "all"
      });
      const cachedEntry = contactId !== void 0 ? cached.find((entry) => entry.participants.some((p) => p.id === contactId)) : void 0;
      if (cachedEntry) {
        return cachedEntry;
      }
      let response;
      try {
        response = await conversationService.fetchV2ConversationsWorkitems({
          contactId,
          includeConversation: true,
          queueIds: [queueId]
        });
      } catch {
        return null;
      }
      const firstWorkitem = (response.objects ?? []).find((w) => {
        if (!w.conversationId) {
          return false;
        }
        const conversation2 = response.conversations?.[w.conversationId];
        return contactId === void 0 || conversation2?.contactId === contactId;
      });
      if (!firstWorkitem?.conversationId) {
        return null;
      }
      const conversation = response.conversations?.[firstWorkitem.conversationId];
      return {
        conversationId: firstWorkitem.conversationId,
        participants: conversation?.participants ?? [],
        workitems: response.objects ?? []
      };
    },
    queryKey: ["conversations", "conversationIdsByQueueIds", queueId, contactId]
  };
}

// src/utilities/queries/getConversationTimelineQueryOptions.ts
var DEFAULT_CONVERSATION_TIMELINE_LIMIT = 20;
function getConversationTimelineQueryOptions({
  conversationId,
  limit = DEFAULT_CONVERSATION_TIMELINE_LIMIT
}) {
  const conversationService = dependencyInjectionContainer.resolve("conversationService");
  return {
    queryFn: async ({ pageParam }) => {
      const response = await conversationService.fetchConversationTimeline({
        conversationId,
        limit,
        offset: pageParam
      });
      return response;
    },
    queryKey: ["conversations", "timeline", conversationId, limit]
  };
}

// src/internal/services/conversation.ts
import { notifyManager } from "@tanstack/query-core";
import { filter } from "rxjs";
var isWorkitem = (value) => {
  return value.objectType === "workitem";
};
var isEngagementDataWithWorkitem = (data) => {
  const unknownData = data;
  return typeof unknownData === "object" && unknownData !== null && "workitem" in unknownData && typeof unknownData.workitem === "object" && unknownData.workitem !== null;
};
var MODULO_LIMIT = 1e4;
var WORKITEM_TYPE = {
  [WorkitemTypes.ConversationMessage]: "CONVERSATION_MESSAGE",
  [WorkitemTypes.OutboundCall]: "OUTBOUNDCALL",
  [WorkitemTypes.InboundCall]: "INBOUNDCALL",
  [WorkitemTypes.InboundSMS]: "INBOUND_SMS",
  [WorkitemTypes.InboundExtensionCall]: "INBOUNDEXTENSION",
  [WorkitemTypes.OutboundExtensionCall]: "OUTBOUNDEXTENSION",
  [WorkitemTypes.OutboundVideoMeeting]: "OUTBOUND_VIDEO_MEETING",
  [WorkitemTypes.Chat]: "CHAT",
  [WorkitemTypes.Facebook]: "FACEBOOK",
  [WorkitemTypes.InboundFax]: "INBOUND_FAX",
  [WorkitemTypes.Instagram]: "INSTAGRAM",
  [WorkitemTypes.OutboundEmail]: "OUTBOUND_EMAIL",
  [WorkitemTypes.OutboundFax]: "OUTBOUND_FAX",
  [WorkitemTypes.OutboundSMS]: "OUTBOUND_SMS",
  [WorkitemTypes.PredictiveCall]: "PREDICTIVE_CALL",
  [WorkitemTypes.PredictiveSMS]: "PREDICTIVE_SMS",
  [WorkitemTypes.PreviewCall]: "PREVIEW_CALL",
  [WorkitemTypes.ProgressiveCall]: "PROGRESSIVE_CALL",
  [WorkitemTypes.Survey]: "SURVEY",
  [WorkitemTypes.SystemCall]: "SYSTEM_CALL",
  [WorkitemTypes.Twitter]: "TWITTER",
  [WorkitemTypes.Unrecognized]: "UNRECOGNIZED",
  [WorkitemTypes.Whatsapp]: "WHATSAPP",
  [WorkitemTypes.Workflow]: "WORKFLOW",
  [WorkitemTypes.Youtube]: "YOUTUBE",
  [WorkitemTypes.InboundEmail]: "INBOUND_EMAIL",
  [WorkitemTypes.ConversationWatermark]: "CONVERSATION_WATERMARK"
};
var _tempWorkitemIdCounter = 0;
var messageTypeMap = {
  chat: "CHAT",
  instagram: "INSTAGRAM",
  sms: "SMS",
  videomeeting: "VIDEO_MEETING",
  voice: "CALL"
};
function toSnakeCase(str) {
  return str.replaceAll(/([A-Z])/g, "_$1").replace(/^_/, "").toUpperCase();
}
var BaseConversationService = class {
  queryCacheUnsubscribe;
  stateService;
  eventsService;
  taskIdMatches;
  logger;
  feedLoadingStates = /* @__PURE__ */ new Map();
  // key: "filter:tab"
  workitemFeedLoadingStates = /* @__PURE__ */ new Map();
  // key: conversationId
  lastRequestedCursorByKey = /* @__PURE__ */ new Map();
  // key: "filter:tab"
  pendingPersistQueryKeys = /* @__PURE__ */ new Map();
  persistQueriesTimer;
  pendingWorkitemFeedNotifications = /* @__PURE__ */ new Map();
  workitemFeedNotificationsTimer;
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    loggerService.trace("BaseConversationService - constructor");
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.taskIdMatches = /* @__PURE__ */ new Map();
    this.logger = loggerService;
    this.handleConversationStatusEvent();
    this.handleUnreadCountNotification();
    this.handleUserRemovedFromChannel();
    this.handleConversationEngagementDataNotification();
    this.handleConversationFeedPushNotification();
    this.handleConversationWorkitemFeedPushNotification();
    this.handleWebSocketDisconnect();
    this.handleConversationsCacheSubscription();
    this.subscribeToQueryCacheChanges();
  }
  getFeedLoadingKey(filter3, queueIds, tab) {
    const normalizedFilter = normalizeFeedFilter(filter3).join(",");
    const normalizedQueueIds = queueIds != null && queueIds !== "" ? queueIds : "my-inbox";
    return `${normalizedFilter}:${normalizedQueueIds}:${tab}`;
  }
  isFeedLoading(filter3, queueIds, tab) {
    return this.feedLoadingStates.get(this.getFeedLoadingKey(filter3, queueIds, tab)) ?? false;
  }
  getLastRequestedCursor(filter3, queueIds, tab) {
    return this.lastRequestedCursorByKey.get(this.getFeedLoadingKey(filter3, queueIds, tab));
  }
  isWorkitemFeedLoading(conversationId) {
    return this.workitemFeedLoadingStates.get(conversationId) ?? false;
  }
  getConversationIdsByQueueIds({
    filter: filter3,
    queueIds,
    tab
  }) {
    const result = [];
    for (const queueId of queueIds) {
      const feedQueryKey = getConversationsQueryOptions({
        filter: filter3,
        queueIds: queueId,
        tab
      }).queryKey;
      const feedCache = queryClient.getQueryData(feedQueryKey);
      for (const engagement of feedCache?.engagementData ?? []) {
        if (engagement.conversationId) {
          const workitemsQueryKey = getConversationWorkitemsQueryOptions({
            conversationId: engagement.conversationId
          }).queryKey;
          const workitemsCache = queryClient.getQueryData(workitemsQueryKey);
          result.push({
            conversationId: engagement.conversationId,
            participants: engagement.participants ?? [],
            workitems: workitemsCache?.workitems ?? []
          });
        }
      }
    }
    return result;
  }
  /**
   * Subscribe to TanStack Query cache changes and emit events
   * when conversation or workitem queries are updated
   */
  subscribeToQueryCacheChanges() {
    const queryCache = queryClient.getQueryCache();
    this.queryCacheUnsubscribe = queryCache.subscribe((event) => {
      if (event.type !== "updated") {
        return;
      }
      const query = event.query;
      const queryKey = query.queryKey;
      if (Array.isArray(queryKey) && queryKey[0] === "conversations" && queryKey[1] === "push-feed") {
        const feedFilter = normalizeFeedFilter(queryKey[2]);
        const feedTab = queryKey[3];
        const queueIdsSegment = queryKey[4];
        const queryData = queryClient.getQueryData(queryKey);
        const data = queryData;
        if (data) {
          this.logger.debug("BaseConversationService - Query cache updated: conversations", {
            count: data.engagementData.length,
            filter: feedFilter,
            queueIds: queueIdsSegment,
            tab: feedTab
          });
          this.eventsService.emitExternal(ExternalEvents.ConversationsFeedQueryUpdated, {
            engagementData: data.engagementData,
            filter: feedFilter,
            queueIds: queueIdsSegment,
            tab: feedTab
          });
        }
      } else if (Array.isArray(queryKey) && queryKey[0] === "conversations" && queryKey[1] === "workitems") {
        const [, , conversationId] = queryKey;
        const queryData = queryClient.getQueryData(queryKey);
        const data = queryData;
        if (data) {
          this.logger.debug("BaseConversationService - Query cache updated: workitems", {
            conversationId,
            count: data.workitems.length
          });
          this.eventsService.emitExternal(ExternalEvents.ConversationWorkitemsQueryUpdated, {
            conversationId,
            workitems: data.workitems
          });
        }
      }
    });
  }
  getQueryKeyCacheKey(queryKey) {
    return JSON.stringify(queryKey);
  }
  schedulePersistQuery(queryKey) {
    const queryPersister = dependencyInjectionContainer.resolve("persisterClient").getQueryPersister();
    if (!queryPersister) {
      return;
    }
    this.pendingPersistQueryKeys.set(this.getQueryKeyCacheKey(queryKey), queryKey);
    if (this.persistQueriesTimer) {
      return;
    }
    this.persistQueriesTimer = setTimeout(() => {
      this.persistQueriesTimer = void 0;
      const queryKeys = Array.from(this.pendingPersistQueryKeys.values());
      this.pendingPersistQueryKeys.clear();
      queryKeys.forEach((pendingQueryKey) => {
        queryPersister.persistQueryByKey(pendingQueryKey, queryClient).catch((error) => {
          this.logger.debug(
            "ConversationService - schedulePersistQuery - persistQueryByKey error",
            error
          );
        });
      });
    }, 0);
  }
  mergeWorkitemFeedNotification(current, incoming) {
    if (!current) {
      return incoming;
    }
    const workitemsMap = current.workitems.reduce((acc, item) => {
      if (!item.workitemId) {
        return acc;
      }
      acc.set(item.workitemId, item);
      return acc;
    }, /* @__PURE__ */ new Map());
    incoming.workitems.forEach((item) => {
      if (!item.workitemId) {
        return;
      }
      workitemsMap.set(item.workitemId, item);
    });
    return {
      ...current,
      ...incoming,
      aiSummaries: incoming.aiSummaries.length > 0 ? incoming.aiSummaries : current.aiSummaries,
      batchMetadata: incoming.batchMetadata,
      conversation: incoming.conversation,
      pagination: incoming.pagination,
      workitems: Array.from(workitemsMap.values())
    };
  }
  queueWorkitemFeedNotification(notification) {
    const mergedNotification = this.mergeWorkitemFeedNotification(
      this.pendingWorkitemFeedNotifications.get(notification.conversationId),
      notification
    );
    this.pendingWorkitemFeedNotifications.set(notification.conversationId, mergedNotification);
    if (this.workitemFeedNotificationsTimer) {
      return;
    }
    this.workitemFeedNotificationsTimer = setTimeout(() => {
      this.flushQueuedWorkitemFeedNotifications();
    }, 0);
  }
  flushQueuedWorkitemFeedNotifications() {
    this.workitemFeedNotificationsTimer = void 0;
    if (this.pendingWorkitemFeedNotifications.size === 0) {
      return;
    }
    const notifications = Array.from(this.pendingWorkitemFeedNotifications.values());
    this.pendingWorkitemFeedNotifications.clear();
    const users = this.stateService.getUsers();
    notifyManager.batch(() => {
      notifications.forEach((workitemFeedPushNotification) => {
        const workitems = workitemFeedPushNotification.workitems.map((workitem) => ({
          ...workitem,
          owner: resolveWorkitemOwner(workitem, users)
        }));
        this.upsertConversationWorkitemsCache({
          conversationId: workitemFeedPushNotification.conversationId,
          persist: true,
          workitems
        });
        this.upsertMultiScopeWorkitemsCache({ workitems });
      });
    });
  }
  createSimpleEngagementDataFromConversation({
    conversation
  }) {
    const queueName = conversation.participants.find((p) => p.queueName)?.queueName;
    const engagementData = {
      channel: "CHAT",
      // Conversation object does not return anything that tells us the channel
      channelId: "ConversationMessage",
      contactId: conversation.contactId,
      conversationId: conversation.conversationId,
      conversationType: conversation.conversationType,
      createdAt: conversation.createdAt,
      createdBy: conversation.createdBy,
      deletedAt: 0,
      fromUser: {
        name: queueName ?? "",
        username: ""
      },
      id: "",
      message: "",
      messageId: "",
      messageMediaType: "",
      messageStatus: [],
      messageSubType: "CONVERSATION_MESSAGE",
      messageType: "",
      modifiedAt: conversation.modifiedAt,
      modifiedBy: conversation.modifiedBy,
      ownerId: conversation.ownerId,
      participants: conversation.participants,
      sourceId: "chat",
      status: "UNARCHIVED",
      toBCCEmailIds: [],
      toCCEmailIds: [],
      toEmailIds: [],
      toUser: { brandName: "", brandSocialId: "", brandUserName: "" },
      uid: "",
      userType: "",
      workitemId: ""
    };
    return engagementData;
  }
  upsertEngagementCache({
    engagementData,
    filter: filter3 = "all",
    queueIds,
    tab = "all"
  }) {
    const normalizedFilter = normalizeFeedFilter(filter3);
    const feedQueryKey = getConversationsQueryOptions({
      filter: normalizedFilter,
      queueIds,
      tab
    }).queryKey;
    queryClient.setQueryData(feedQueryKey, (currentData) => {
      if (!currentData) {
        return currentData;
      }
      const existingIndex = currentData.engagementData.findIndex(
        (e) => e.conversationId === engagementData.conversationId
      );
      if (existingIndex === -1) {
        return {
          engagementData: sortItems([...currentData.engagementData, engagementData])
        };
      } else {
        const updatedEngagementData = [...currentData.engagementData];
        updatedEngagementData[existingIndex] = engagementData;
        return {
          engagementData: updatedEngagementData
        };
      }
    });
    this.persistDataInQueries();
  }
  upsertConversationWorkitemsCache({
    conversationId,
    persist = false,
    workitems
  }) {
    if (workitems.length === 0) {
      return;
    }
    const queryKey = getConversationWorkitemsQueryOptions({
      conversationId
    }).queryKey;
    const cacheLimit = this.stateService.getConversationsCacheLimit();
    queryClient.setQueryData(queryKey, (currentData) => {
      const incomingWorkitemsMap = workitems.reduce((acc, item) => {
        if (!item.workitemId) {
          return acc;
        }
        acc.set(item.workitemId, item);
        return acc;
      }, /* @__PURE__ */ new Map());
      const mergedWorkitemsMap = currentData?.workitems.reduce((acc, item) => {
        if (!item.workitemId) {
          return acc;
        }
        if (acc.has(item.workitemId)) {
          return acc;
        }
        acc.set(item.workitemId, item);
        return acc;
      }, incomingWorkitemsMap) ?? incomingWorkitemsMap;
      const result = filterLatestNItems(
        Array.from(mergedWorkitemsMap.values()),
        cacheLimit.workitems
      );
      return { workitems: result };
    });
    if (persist) {
      this.schedulePersistQuery(queryKey);
    }
  }
  upsertMultiScopeWorkitemsCache({
    removeWorkitemId,
    workitems
  }) {
    if (workitems.length === 0) {
      return;
    }
    const multiScopeQueries = queryClient.getQueryCache().findAll({ queryKey: ["conversations", "workitems-multi-scope"] });
    for (const query of multiScopeQueries) {
      const params = query.queryKey[2];
      const conversationFilteredWorkitems = workitems.filter((w) => {
        if (params.contactId && w.conversation?.contactId !== params.contactId) {
          return false;
        }
        if (params.queueIds.length > 0 && (!w.conversation?.ownerId || !params.queueIds.includes(w.conversation.ownerId))) {
          return false;
        }
        if (params.conversationIds.length > 0 && !params.conversationIds.includes(w.conversationId ?? "")) {
          return false;
        }
        return true;
      });
      if (conversationFilteredWorkitems.length === 0) {
        continue;
      }
      const filteredWorkitems = params.filter && params.filter.length > 0 ? conversationFilteredWorkitems.filter(
        (w) => params.filter.flatMap((f) => CHANNEL_FILTER_TO_CHANNEL_TYPE[f]).includes(w.channelType)
      ) : conversationFilteredWorkitems;
      if (filteredWorkitems.length === 0) {
        continue;
      }
      queryClient.setQueryData(
        query.queryKey,
        (currentData) => {
          if (!currentData) {
            return {
              pageParams: [void 0],
              pages: [{ conversations: {}, next: void 0, objects: filteredWorkitems }]
            };
          }
          const incomingWorkitemsMap = filteredWorkitems.reduce(
            (acc, item) => {
              if (!item.workitemId) {
                return acc;
              }
              acc.set(item.workitemId, item);
              return acc;
            },
            /* @__PURE__ */ new Map()
          );
          const [firstPage, ...restPages] = currentData.pages;
          const existingObjects = (firstPage?.objects ?? []).filter(
            (w) => !removeWorkitemId || w.workitemId !== removeWorkitemId
          );
          const mergedWorkitemsMap = existingObjects.reduce((acc, item) => {
            if (!item.workitemId || acc.has(item.workitemId)) {
              return acc;
            }
            acc.set(item.workitemId, item);
            return acc;
          }, incomingWorkitemsMap);
          return {
            ...currentData,
            pages: [
              {
                ...firstPage,
                objects: sortItems(Array.from(mergedWorkitemsMap.values()))
              },
              ...restPages
            ]
          };
        },
        // Preserve the existing dataUpdatedAt so WS seeds
        // before the first API response don't appear fresh in IndexDB
        { updatedAt: query.state.dataUpdatedAt }
      );
    }
  }
  insertOptimisticMessage({
    attachments,
    baseWorkitem,
    contactId,
    conversationId,
    message,
    queueId
  }) {
    _tempWorkitemIdCounter = (_tempWorkitemIdCounter + 1) % MODULO_LIMIT;
    const tempWorkitemId = `temp-${_tempWorkitemIdCounter}`;
    const participants = baseWorkitem.conversation?.participants ?? [];
    const userId = this.stateService.getUserId() ?? "";
    const personalNumber = this.stateService.getPersonalInboxNumber() ?? "";
    const tempWorkitem = {
      ...baseWorkitem,
      _id: tempWorkitemId,
      callId: tempWorkitemId,
      conversationId,
      conversationMessage: {
        attachments,
        conversationId,
        fileContentSize: 0,
        fileContentType: "",
        filename: "",
        fromId: userId,
        id: tempWorkitemId,
        priority: false,
        textMsg: message,
        timestamp: Date.now(),
        toId: participants[0]?.id ?? "",
        type: CHAT_MSG_SOURCE.USER
      },
      createdAt: Date.now(),
      from: userId,
      fromAddress: personalNumber,
      to: participants[0]?.id ?? "",
      type: WorkitemTypes.ConversationMessage,
      workitemId: tempWorkitemId
    };
    tempWorkitem.smsMessageStatus = ChatMessageStates.SENDING;
    if (tempWorkitem.conversation && (contactId !== void 0 || queueId !== void 0)) {
      tempWorkitem.conversation = Object.assign({}, tempWorkitem.conversation);
      if (contactId !== void 0) {
        tempWorkitem.conversation.contactId = contactId;
      }
      if (queueId !== void 0) {
        tempWorkitem.conversation.ownerId = queueId;
      }
    }
    this.upsertConversationWorkitemsCache({ conversationId, workitems: [tempWorkitem] });
    this.upsertMultiScopeWorkitemsCache({ workitems: [tempWorkitem] });
    return tempWorkitem;
  }
  insertOptimisticEmailWorkitem({
    baseWorkitem,
    engagementData,
    payload
  }) {
    _tempWorkitemIdCounter = (_tempWorkitemIdCounter + 1) % MODULO_LIMIT;
    const tempWorkitemId = `temp-${_tempWorkitemIdCounter}`;
    const userId = this.stateService.getUserId() ?? "";
    const tenantId = this.stateService.getTenantId() ?? "";
    const conversationId = payload.conversationId ?? baseWorkitem?.conversationId ?? engagementData?.conversationId ?? "";
    const contactId = baseWorkitem?.contactId ?? engagementData?.contactId ?? "";
    const campaignId = payload.campaignId ?? baseWorkitem?.campaignId ?? "";
    let tempWorkitem;
    if (baseWorkitem) {
      tempWorkitem = {
        ...baseWorkitem,
        _id: tempWorkitemId,
        agentUsername: baseWorkitem.agentUsername,
        callId: tempWorkitemId,
        campaignId,
        channelType: "email",
        contactId,
        conversation: baseWorkitem.conversation ? {
          ...baseWorkitem.conversation,
          ownerId: payload.queueId ?? baseWorkitem.conversation.ownerId ?? ""
        } : { conversationId, ownerId: payload.queueId ?? "" },
        conversationId,
        createdAt: Date.now(),
        email: {
          bodyParts: {
            "1": { content: payload.message, id: "1", secureAttachment: 0, type: "TEXT" }
          },
          from: payload.from,
          subject: payload.subject,
          to: payload.to
        },
        from: userId,
        fromAddress: payload.from,
        fromId: userId,
        isDraft: false,
        isOpen: true,
        modifiedAt: Date.now(),
        ownerId: payload.queueId,
        priority: WorkItemPriorities.Standard,
        selectedQueue: payload.queueId ?? baseWorkitem.selectedQueue,
        skills: "",
        smsMessageStatus: ChatMessageStates.SENDING,
        state: "active",
        tenantId,
        to: payload.to,
        type: WorkitemTypes.OutboundEmail,
        workitemId: tempWorkitemId
      };
    } else {
      const feedQueryKey = getConversationsQueryOptions({
        filter: ["all"],
        queueIds: payload.queueId ?? "my-inbox",
        tab: "all"
      }).queryKey;
      const feedCache = queryClient.getQueryData(feedQueryKey);
      const foundEngagement = feedCache?.engagementData.find(
        (e) => e.conversationId === conversationId
      );
      tempWorkitem = {
        _id: tempWorkitemId,
        actionCount: 0,
        actions: [],
        actualQueuedAt: 0,
        agentUsername: "",
        assignedAt: 0,
        businessEvents: {},
        callId: tempWorkitemId,
        campaignId,
        channelType: "email",
        contactId: foundEngagement?.contactId ?? contactId,
        conversation: {
          _id: conversationId,
          contactId: foundEngagement?.contactId ?? contactId,
          conversationId,
          conversationType: foundEngagement?.conversationType ? foundEngagement.conversationType : payload.queueId ? WorkitemConversationTypes.QUEUE_CONTACT : WorkitemConversationTypes.CONTACT_BASED,
          createdAt: foundEngagement?.createdAt ?? Date.now(),
          createdBy: foundEngagement?.createdBy ?? "",
          deletedAt: foundEngagement?.deletedAt ?? 0,
          id: conversationId,
          modifiedAt: foundEngagement?.modifiedAt ?? Date.now(),
          modifiedBy: foundEngagement?.modifiedBy ?? "",
          name: foundEngagement?.conversationName ?? foundEngagement?.name ?? "",
          objectType: "conversation",
          ownerId: payload.queueId,
          parentWorkitemId: "",
          participants: foundEngagement?.participants ?? [],
          tenantId
        },
        conversationId,
        createdAt: Date.now(),
        currentStateName: "",
        dialedAt: 0,
        dlpCleanUp: [],
        dlpFlag: false,
        email: {
          bodyParts: {
            "1": { content: payload.message, id: "1", secureAttachment: 0, type: "TEXT" }
          },
          from: payload.from,
          subject: payload.subject,
          to: payload.to
        },
        from: userId,
        fromAddress: payload.from,
        fromId: userId,
        isDraft: false,
        isOpen: true,
        modifiedAt: Date.now(),
        mute: 0,
        offeredAt: 0,
        ownedBy: "",
        ownedById: "",
        priority: WorkItemPriorities.Standard,
        queuedAt: 0,
        record: 0,
        regionId: "",
        ringAll: false,
        selectedQueue: payload.queueId ?? "",
        skills: "",
        smsMessageStatus: ChatMessageStates.SENDING,
        state: "active",
        tenantId,
        terminatedAt: 0,
        time: {
          currentDayOfMonth: 0,
          currentDayOfWeek: 0,
          currentHour: 0,
          currentMin: 0,
          currentSec: 0,
          currentYear: 0
        },
        timeEvents: [],
        to: payload.to,
        type: WorkitemTypes.OutboundEmail,
        withACDService: 0,
        workitemId: tempWorkitemId
      };
    }
    this.upsertConversationWorkitemsCache({ conversationId, workitems: [tempWorkitem] });
    this.upsertMultiScopeWorkitemsCache({ workitems: [tempWorkitem] });
    this.updatePushFeedEngagementData(tempWorkitem);
    return tempWorkitem;
  }
  confirmOptimisticMessage({
    conversationId,
    tempWorkitem,
    workitemId
  }) {
    const queryKey = getConversationWorkitemsQueryOptions({ conversationId }).queryKey;
    const tempWorkitemId = tempWorkitem.workitemId;
    queryClient.setQueryData(queryKey, (data) => ({
      workitems: data?.workitems.filter((w) => w.workitemId !== tempWorkitemId) ?? []
    }));
    tempWorkitem.workitemId = workitemId;
    tempWorkitem._id = workitemId;
    tempWorkitem.smsMessageStatus = ChatMessageStates.SENT;
    if (tempWorkitem.conversationMessage) {
      tempWorkitem.conversationMessage.id = workitemId;
    }
    this.upsertConversationWorkitemsCache({ conversationId, workitems: [tempWorkitem] });
    this.upsertMultiScopeWorkitemsCache({
      removeWorkitemId: tempWorkitemId,
      workitems: [tempWorkitem]
    });
  }
  isConversationMessageFromCurrentUser(workitem) {
    const currentUserId = this.stateService.getUserId();
    if (!currentUserId || workitem.type !== WorkitemTypes.ConversationMessage) {
      return false;
    }
    return workitem.fromId === currentUserId || workitem.from === currentUserId;
  }
  isConversationWatermarkFromCurrentUser(workitem) {
    const currentUserId = this.stateService.getUserId();
    if (!currentUserId || workitem.type !== WorkitemTypes.ConversationWatermark) {
      return false;
    }
    return workitem.conversationWatermark?.createdBy === currentUserId;
  }
  getUnreadCountIncrement(workitem, engagement) {
    if (workitem.type.toLocaleLowerCase().includes("outbound")) {
      return 0;
    }
    const normalizedWorkitemId = workitem.workitemId || workitem._id;
    if (workitem.channelType.toLowerCase() === "voice" && engagement?.workitemId === normalizedWorkitemId) {
      return 0;
    }
    if (workitem.type === WorkitemTypes.InboundSMS) {
      return 1;
    }
    if (workitem.type === WorkitemTypes.ConversationWatermark) {
      return this.isConversationWatermarkFromCurrentUser(workitem) ? 0 : 1;
    }
    if (workitem.type === WorkitemTypes.ConversationMessage) {
      return this.isConversationMessageFromCurrentUser(workitem) ? 0 : 1;
    }
    return 1;
  }
  createEngagementDataFromWorkitem(workitem) {
    const channelType = workitem.channelType.toUpperCase();
    const channelTypeLower = workitem.channelType.toLowerCase();
    let messageHtml;
    if (channelTypeLower === "sms") {
      messageHtml = workitem.currentSMSMessage?.message ?? workitem.currentSMSMessage?.textMsg;
    } else if (channelTypeLower === "chat") {
      messageHtml = workitem.currentChatMessage?.textMsg;
    } else if (channelTypeLower === "email") {
      messageHtml = workitem.email?.subject;
    } else if (channelTypeLower === "voice") {
      messageHtml = workitem.displayName ?? workitem.fromAddress ?? workitem.from;
    } else if (channelTypeLower === "videomeeting") {
      messageHtml = workitem.conversationMessage?.textMsg ?? "";
    } else if (workitem.conversationMessage) {
      messageHtml = workitem.conversationMessage.textMsg;
    } else if (workitem.currentEngagementData?.message) {
      messageHtml = workitem.currentEngagementData.message;
    }
    const baseFields = {
      active: workitem.state === "active",
      assignedAt: workitem.assignedAt,
      conversationId: workitem.conversationId ?? workitem.conversation?.conversationId,
      conversationName: workitem.conversation?.name,
      conversationType: workitem.conversation?.conversationType,
      conversationWatermark: workitem.conversationWatermark,
      createdAt: workitem.createdAt,
      createdBy: workitem.conversation?.createdBy ?? "",
      deletedAt: 0,
      forwardedWorkitems: workitem.forwardedWorkitems,
      id: workitem._id,
      message: messageHtml ?? "",
      messageHtml,
      messageId: workitem._id,
      messageMediaType: "",
      messageStatus: [],
      messageSubType: WORKITEM_TYPE[workitem.type],
      messageType: messageTypeMap[workitem.channelType.toLowerCase()],
      modifiedAt: workitem.modifiedAt ?? workitem.createdAt,
      modifiedBy: workitem.conversation?.modifiedBy ?? "",
      name: workitem.conversation?.name,
      parentWorkitemIds: workitem.parentWorkitemIds,
      parentWorkitems: workitem.parentWorkitems,
      participants: workitem.conversation?.participants,
      status: workitem.currentEngagementData?.status ?? "UNARCHIVED",
      toBCCEmailIds: [],
      toCCEmailIds: [],
      toEmailIds: workitem.toAddresses ?? [],
      uid: workitem._id,
      unreadCount: this.getUnreadCountIncrement(workitem),
      userType: "",
      workitemId: workitem.workitemId || workitem._id
    };
    if (channelType === "VOICE") {
      let terminationMetadata;
      const hasVoicemailEvent = (workitem.timeEvents ?? []).some((event) => {
        const eventType = event.type;
        return eventType === "workflowvoicemail" || event.type === "startacdvm" || eventType.includes("voicemail");
      });
      const hasAnsweredEvent = (workitem.timeEvents ?? []).some((event) => {
        const eventType = event.type;
        return event.type === "answered" || event.type === "useractive" || event.type === "outboundconnected" || eventType.includes("connected");
      });
      const wentToVoicemailUnanswered = workitem.state === "terminated" && hasVoicemailEvent && !hasAnsweredEvent;
      const voiceMailFile = workitem.voicemailFile ?? (workitem.data ? ["voicemail"] : void 0);
      const isMissedCall = (workitem.type === WorkitemTypes.InboundCall || workitem.type === WorkitemTypes.InboundExtensionCall) && !hasAnsweredEvent && Boolean(workitem.terminatedAt);
      if (isMissedCall) {
        terminationMetadata = "MISSED_CALL";
        this.logger.debug("createEngagementDataFromWorkitem - Detected missed call", {
          state: workitem.state,
          wentToVoicemailUnanswered,
          workitemId: workitem.workitemId
        });
      }
      if (hasVoicemailEvent && voiceMailFile) {
        terminationMetadata = "VOICEMAIL";
      }
      const voiceEngagement = {
        ...baseFields,
        channel: "VOICE",
        channelId: workitem.channelType,
        content: workitem.voicemailTranscript ?? "",
        fromUser: {
          name: workitem.displayName ?? workitem.from,
          userId: workitem.fromId
        },
        sourceId: "voice",
        state: workitem.state,
        terminationMetadata,
        toUser: {
          userId: workitem.ownedById
        },
        voicemailDuration: voiceMailFile?.duration,
        voicemailFileName: voiceMailFile?.filename,
        voicemailSaveWorkitemId: voiceMailFile?.saveWorkitemId
      };
      return voiceEngagement;
    } else if (channelType === "VIDEOMEETING") {
      const videoMeetingInfo = workitem.videoMeetingInformation;
      const messageSubType = videoMeetingInfo?.type.toUpperCase() ?? workitem.type.toUpperCase();
      const messageType = toSnakeCase(workitem.type);
      const terminationMetadata = videoMeetingInfo?.status.toUpperCase();
      const videoMeetingEngagement = {
        ...baseFields,
        channel: "VIDEO_MEETING",
        channelId: workitem.channelType,
        fromUser: {
          name: workitem.displayName ?? workitem.from,
          userId: workitem.fromId
        },
        messageSubType,
        messageType,
        sourceId: "video_meeting",
        terminationMetadata,
        toUser: {
          userId: workitem.ownedById
        },
        videoMeetingId: videoMeetingInfo?.meetingId
      };
      return videoMeetingEngagement;
    } else if (channelType === "SMS") {
      const smsEngagement = {
        ...baseFields,
        channel: "SMS",
        channelId: workitem.channelType,
        fromUser: {
          name: workitem.displayName ?? workitem.from,
          userId: workitem.fromId
        },
        sourceId: "chat_sms",
        terminationMetadata: void 0,
        // Clear for non-voice channels
        toUser: {
          name: workitem.to,
          userId: workitem.ownedById
        }
      };
      return smsEngagement;
    } else if (channelType === "INSTAGRAM") {
      const instagramEngagement = {
        ...baseFields,
        channel: "INSTAGRAM",
        channelId: workitem.channelType,
        fromUser: {
          name: workitem.displayName ?? workitem.from,
          profilePicUrl: "",
          userId: workitem.fromId
        },
        sourceId: "chat_ig",
        terminationMetadata: void 0
        // Clear for non-voice channels
      };
      return instagramEngagement;
    } else if (channelType === "EMAIL") {
      const emailEngagement = {
        ...baseFields,
        channel: "EMAIL",
        channelId: workitem.channelType,
        fromUser: { userId: workitem.fromId },
        sourceId: "eml",
        toAddresses: workitem.toAddresses ?? (workitem.to ? [workitem.to] : void 0)
      };
      return emailEngagement;
    } else {
      const chatEngagement = {
        ...baseFields,
        channel: "CHAT",
        channelId: workitem.channelType,
        fromUser: {
          name: workitem.displayName ?? workitem.from,
          username: workitem.agentUsername
        },
        sourceId: "chat",
        terminationMetadata: void 0,
        // Clear for non-voice channels
        toUser: {
          brandName: "",
          brandSocialId: "",
          brandUserName: ""
        }
      };
      return chatEngagement;
    }
  }
  /**
   * Determines whether a brand-new conversation workitem should be inserted into a
   * given push-feed query cache based on the query's filter key and the workitem's
   * channelType.
   *
   * Rules:
   *  - Always insert into the 'all' filter cache regardless of channelType.
   *  - For 'voice': insert into all call-related filters — 'calls', 'phone',
   *    'incoming_calls', 'outgoing_calls', 'missed_calls', 'voicemails', 'calls_and_texts'.
   *    All call sub-types share channelType='voice', so one condition covers all of them.
   *  - For 'sms': insert into 'sms', 'texts', and 'calls_and_texts'.
   *    'texts' is the SMS sub-filter in the calls_and_texts hierarchy.
   *  - For 'conversation': insert into 'sms', 'texts', 'live_chat', and 'calls_and_texts'.
   *    Treated as CHAT by createEngagementDataFromWorkitem but also a pure text-message channel.
   *  - For 'chat': insert into 'sms', 'live_chat', and 'calls_and_texts'.
   *    Excluded from 'texts' — not a pure text-message channel.
   *  - For 'fax' / 'social': insert into 'sms' and 'calls_and_texts'.
   *    Treated as CHAT by createEngagementDataFromWorkitem but excluded from 'texts' and 'live_chat'.
   *  - For 'email': direct match — inserts into 'email' only.
   *  - For all others: direct channelType → filter key match.
   *  - Cross-channel filters (archived, mentions, unread, drafts, …) are never matched
   *    because channelType alone cannot determine membership in those buckets.
   *
   * Verification scenarios, determined by the incoming work item's channelType:
   * ┌────────────────────────┬──────────────────────────┬───────────┬────────────────────────┬───────────────────────────────────────────┬──────────────┐
   * │ channelType            │ keyFilter                │ isAllFeed │ direct match           │ special OR                                │ shouldInsert │
   * ├────────────────────────┼──────────────────────────┼───────────┼────────────────────────┼───────────────────────────────────────────┼──────────────┤
   * │ sms                    │ ['all']                   │ true      │ —                      │ —                                         │ true  ✓      │
   * │ sms                    │ ['calls','email','sms']   │ false     │ includes('sms')=Y      │ —                                         │ true  ✓      │
   * │ sms                    │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
   * │ sms                    │ ['texts']                 │ false     │ false                  │ includes('texts')=Y                       │ true  ✓      │
   * │ sms                    │ ['calls','email']         │ false     │ false                  │ —                                         │ false ✓      │
   * │ sms                    │ ['email']                 │ false     │ false                  │ —                                         │ false ✓      │
   * │ voice                  │ ['all']                   │ true      │ —                      │ —                                         │ true  ✓      │
   * │ voice                  │ ['calls','email','sms']   │ false     │ includes('voice')=N    │ includes('calls')=Y                       │ true  ✓      │
   * │ voice                  │ ['phone']                 │ false     │ false                  │ includes('phone')=Y                       │ true  ✓      │
   * │ voice                  │ ['phone','email']         │ false     │ false                  │ includes('phone')=Y                       │ true  ✓      │
   * │ voice (incoming call)  │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
   * │ voice (outgoing call)  │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
   * │ voice (missed call)    │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
   * │ voice (voicemail)      │ ['phone']                 │ false     │ false                  │ includes('phone')=Y (channelType='voice') │ true  ✓      │
   * │ voice                  │ ['incoming_calls']        │ false     │ false                  │ includes('incoming_calls')=Y              │ true  ✓      │
   * │ voice                  │ ['outgoing_calls']        │ false     │ false                  │ includes('outgoing_calls')=Y              │ true  ✓      │
   * │ voice                  │ ['missed_calls']          │ false     │ false                  │ includes('missed_calls')=Y                │ true  ✓      │
   * │ voice                  │ ['voicemails']            │ false     │ false                  │ includes('voicemails')=Y                  │ true  ✓      │
   * │ voice                  │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
   * │ voice                  │ ['texts']                 │ false     │ false                  │ false (voice is not a texts channel)      │ false ✓      │
   * │ voice                  │ ['email']                 │ false     │ false                  │ false                                     │ false ✓      │
   * │ email                  │ ['calls','email','sms']   │ false     │ includes('email')=Y    │ —                                         │ true  ✓      │
   * │ email                  │ ['texts']                 │ false     │ false                  │ false (email is not a texts channel)      │ false ✓      │
   * │ email                  │ ['calls_and_texts']       │ false     │ false                  │ false (email not in calls+texts)          │ false ✓      │
   * │ email                  │ ['archived']              │ false     │ false                  │ —                                         │ false ✓      │
   * │ chat                   │ ['calls','email','sms']   │ false     │ includes('chat')=N     │ includes('sms')=Y                         │ true  ✓      │
   * │ chat                   │ ['live_chat']             │ false     │ false                  │ includes('live_chat')=Y                   │ true  ✓      │
   * │ chat                   │ ['texts']                 │ false     │ false                  │ false (chat is live_chat, not texts)      │ false ✓      │
   * │ chat                   │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
   * │ chat                   │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
   * │ conversation           │ ['calls','email','sms']   │ false     │ includes('conv.')=N    │ includes('sms')=Y                         │ true  ✓      │
   * │ conversation           │ ['live_chat']             │ false     │ false                  │ includes('live_chat')=Y                   │ true  ✓      │
   * │ conversation           │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
   * │ conversation           │ ['texts']                 │ false     │ false                  │ includes('texts')=Y                       │ true  ✓      │
   * │ conversation           │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
   * │ fax                    │ ['calls','email','sms']   │ false     │ includes('fax')=N      │ includes('sms')=Y                         │ true  ✓      │
   * │ fax                    │ ['live_chat']             │ false     │ false                  │ false (fax is not live chat)              │ false ✓      │
   * │ fax                    │ ['texts']                 │ false     │ false                  │ false (fax is not a texts channel)        │ false ✓      │
   * │ fax                    │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
   * │ fax                    │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
   * │ social                 │ ['calls','email','sms']   │ false     │ includes('social')=N   │ includes('sms')=Y                         │ true  ✓      │
   * │ social                 │ ['live_chat']             │ false     │ false                  │ false (social is not live chat)           │ false ✓      │
   * │ social                 │ ['texts']                 │ false     │ false                  │ false (social is not a texts channel)     │ false ✓      │
   * │ social                 │ ['calls_and_texts']       │ false     │ false                  │ includes('calls_and_texts')=Y             │ true  ✓      │
   * │ social                 │ ['calls','email']         │ false     │ false                  │ false                                     │ false ✓      │
   * │ any                    │ ['all']                   │ true      │ —                      │ —                                         │ true  ✓      │
   * └────────────────────────┴──────────────────────────┴───────────┴────────────────────────┴───────────────────────────────────────────┴──────────────┘
   */
  shouldInsertNewConversationIntoFeedQuery(queryKey, channelType, conversationType) {
    if (!Array.isArray(queryKey) || queryKey.length <= 2) {
      return false;
    }
    if (!tabAllowsConversationType(queryKey[3], conversationType)) {
      return false;
    }
    const keyFilter = normalizeFeedFilter(queryKey[2]);
    const isAllFeedQuery = keyFilter.length === 1 && keyFilter[0] === "all";
    const isCallsOrTextsChannel = channelType === "voice" || channelType === "sms" || channelType === "chat" || channelType === "conversation" || channelType === "fax" || channelType === "social";
    return isAllFeedQuery || // Direct match: sms→'sms', email→'email'
    keyFilter.includes(channelType) || // 'voice' covers all call-related feed filters including 'phone'
    channelType === "voice" && (keyFilter.includes("calls") || keyFilter.includes("phone") || keyFilter.includes("incoming_calls") || keyFilter.includes("outgoing_calls") || keyFilter.includes("missed_calls") || keyFilter.includes("voicemails")) || // 'chat', 'conversation', 'fax', 'social' all map to CHAT engagement
    // (via createEngagementDataFromWorkitem default branch) and appear under the 'sms' section
    (channelType === "chat" || channelType === "conversation" || channelType === "fax" || channelType === "social") && keyFilter.includes("sms") || // 'chat' and 'conversation' also appear under the 'live_chat' section
    // (fax and social are not live-chat channels)
    (channelType === "chat" || channelType === "conversation") && keyFilter.includes("live_chat") || // 'sms' and 'conversation' appear under the 'texts' filter
    // ('texts' is the SMS sub-filter in the calls_and_texts hierarchy;
    // fax/social/chat are excluded — they are not pure text-message channels)
    (channelType === "sms" || channelType === "conversation") && keyFilter.includes("texts") || // 'calls_and_texts' covers voice + sms + chat-type channels (calls OR texts)
    isCallsOrTextsChannel && keyFilter.includes("calls_and_texts");
  }
  updatePushFeedEngagementData(workitem) {
    this.logger.debug("updatePushFeedEngagementData", workitem);
    const conversationId = workitem.conversationId ?? workitem.conversation?.conversationId;
    if (!conversationId) {
      return;
    }
    const queueId = workitem.conversation?.conversationType === "queue_contact" && workitem.conversation.ownerId ? workitem.conversation.ownerId : "my-inbox";
    this.logger.debug("updatePushFeedEngagementData - queueId:", {
      conversationType: workitem.conversation?.conversationType,
      ownerId: workitem.conversation?.ownerId,
      queueId
    });
    const pushFeedData = queryClient.getQueriesData({}).reduce(
      (acc, curr) => {
        if (Array.isArray(curr)) {
          const queryKey = curr[0];
          if (Array.isArray(queryKey) && queryKey.includes("push-feed") && queryKey.includes(queueId)) {
            const existingEngagements = curr[1]?.engagementData ?? [];
            const existingEngagement = existingEngagements.find(
              (eng) => eng.conversationId === conversationId
            );
            const incomingChannelType = workitem.channelType.toLowerCase();
            const shouldInsert = this.shouldInsertNewConversationIntoFeedQuery(
              queryKey,
              incomingChannelType,
              workitem.conversation?.conversationType
            );
            let currentData;
            if (!shouldInsert) {
              currentData = existingEngagements;
            } else if (existingEngagement) {
              currentData = existingEngagements.map((engagement) => {
                if (engagement.conversationId === conversationId) {
                  const channelType = workitem.channelType.toUpperCase();
                  let messageHtml;
                  if (incomingChannelType === "sms") {
                    messageHtml = workitem.currentSMSMessage?.message ?? workitem.currentSMSMessage?.textMsg;
                  } else if (incomingChannelType === "chat") {
                    messageHtml = workitem.currentChatMessage?.textMsg;
                  } else if (incomingChannelType === "email") {
                    messageHtml = workitem.email?.subject;
                  } else if (incomingChannelType === "voice") {
                    messageHtml = workitem.displayName ?? workitem.fromAddress ?? workitem.from;
                  } else if (incomingChannelType === "videomeeting") {
                    messageHtml = workitem.conversationMessage?.textMsg ?? "";
                  } else if (workitem.conversationMessage) {
                    messageHtml = workitem.conversationMessage.textMsg;
                  } else if (workitem.currentEngagementData?.message) {
                    messageHtml = workitem.currentEngagementData.message;
                  }
                  const commonUpdates = {
                    active: workitem.state === "active",
                    assignedAt: workitem.assignedAt,
                    channelId: workitem.type,
                    conversationId,
                    createdAt: workitem.createdAt,
                    messageSubType: workitem.type.toUpperCase(),
                    messageType: messageTypeMap[incomingChannelType],
                    unreadCount: (engagement.unreadCount ?? 0) + this.getUnreadCountIncrement(workitem, engagement),
                    workitemId: workitem.workitemId || workitem._id,
                    ...workitem.currentEngagementData?.status && {
                      status: workitem.currentEngagementData.status
                    },
                    ...workitem.currentEngagementData?.modifiedAt && {
                      modifiedAt: workitem.currentEngagementData.modifiedAt
                    },
                    ...workitem.conversation?.participants && {
                      participants: workitem.conversation.participants
                    },
                    ...workitem.conversation?.name && {
                      conversationName: workitem.conversation.name,
                      name: workitem.conversation.name
                    },
                    ...workitem.conversation?.conversationType && {
                      conversationType: workitem.conversation.conversationType
                    },
                    ...messageHtml && { messageHtml },
                    ...workitem.conversationWatermark !== void 0 && {
                      conversationWatermark: workitem.conversationWatermark
                    },
                    ...workitem.forwardedWorkitems && {
                      forwardedWorkitems: workitem.forwardedWorkitems
                    },
                    ...workitem.parentWorkitemIds && {
                      parentWorkitemIds: workitem.parentWorkitemIds
                    },
                    ...workitem.parentWorkitems && {
                      parentWorkitems: workitem.parentWorkitems
                    }
                  };
                  if (channelType === "VOICE") {
                    let terminationMetadata = void 0;
                    const hasVoicemailEvent = (workitem.timeEvents ?? []).some((event) => {
                      const eventType = event.type;
                      return eventType === "workflowvoicemail" || event.type === "startacdvm" || eventType.includes("voicemail");
                    });
                    const hasVoicemailFile = Boolean(workitem.voicemailFile?.filename) || Boolean(workitem.data && workitem.data.voicemail?.filename);
                    const hasAnsweredEvent = (workitem.timeEvents ?? []).some((event) => {
                      const eventType = event.type;
                      return event.type === "answered" || event.type === "useractive" || event.type === "outboundconnected" || eventType.includes("connected");
                    });
                    const wentToVoicemailUnanswered = workitem.state === "terminated" && hasVoicemailEvent && !hasAnsweredEvent;
                    const isMissedCall = wentToVoicemailUnanswered && !hasVoicemailFile;
                    if (isMissedCall) {
                      terminationMetadata = "MISSED_CALL";
                      this.logger.debug("updatePushFeedEngagementData - Detected missed call", {
                        state: workitem.state,
                        wentToVoicemailUnanswered,
                        workitemId: workitem.workitemId
                      });
                    }
                    if (hasVoicemailEvent && hasVoicemailFile) {
                      terminationMetadata = "VOICEMAIL";
                      this.logger.debug("updatePushFeedEngagementData - Detected voicemail", {
                        state: workitem.state,
                        wentToVoicemailUnanswered,
                        workitemId: workitem.workitemId
                      });
                    }
                    const voiceEngagement = {
                      ...engagement,
                      ...commonUpdates,
                      channel: "VOICE",
                      fromUser: {
                        name: workitem.displayName ?? workitem.from,
                        userId: workitem.fromId
                      },
                      sourceId: "voice",
                      terminationMetadata,
                      toUser: {
                        userId: workitem.ownedById
                      }
                    };
                    return voiceEngagement;
                  } else if (channelType === "VIDEOMEETING") {
                    const videoMeetingInfo = workitem.videoMeetingInformation;
                    const messageSubType = videoMeetingInfo?.type.toUpperCase() ?? workitem.type.toUpperCase();
                    const messageType = toSnakeCase(workitem.type);
                    const terminationMetadata = videoMeetingInfo?.status.toUpperCase();
                    const videoMeetingEngagement = {
                      ...engagement,
                      ...commonUpdates,
                      channel: "VIDEO_MEETING",
                      fromUser: {
                        name: workitem.displayName ?? workitem.from,
                        userId: workitem.fromId
                      },
                      messageSubType,
                      messageType,
                      participants: commonUpdates.participants?.map((participant) => {
                        return {
                          ...participant,
                          role: videoMeetingInfo?.participants.find(
                            (p) => p.id === participant.id
                          )?.role,
                          status: videoMeetingInfo?.participants.find(
                            (p) => p.id === participant.id
                          )?.status
                        };
                      }) ?? commonUpdates.participants,
                      sourceId: "video_meeting",
                      terminationMetadata,
                      toUser: {
                        userId: workitem.ownedById
                      },
                      videoMeetingId: videoMeetingInfo?.meetingId
                    };
                    return videoMeetingEngagement;
                  } else if (channelType === "SMS") {
                    const smsEngagement = {
                      ...engagement,
                      ...commonUpdates,
                      channel: "SMS",
                      fromUser: {
                        name: workitem.displayName ?? workitem.from,
                        userId: workitem.fromId
                      },
                      sourceId: "chat_sms",
                      terminationMetadata: void 0,
                      // Clear for non-voice channels
                      toUser: {
                        name: workitem.to,
                        userId: workitem.ownedById
                      }
                    };
                    return smsEngagement;
                  } else if (channelType === "INSTAGRAM") {
                    const existingInstagram = engagement;
                    const instagramEngagement = {
                      ...engagement,
                      ...commonUpdates,
                      channel: "INSTAGRAM",
                      fromUser: {
                        name: workitem.displayName ?? workitem.from,
                        profilePicUrl: existingInstagram.fromUser.profilePicUrl || "",
                        userId: workitem.fromId
                      },
                      sourceId: "chat_ig",
                      terminationMetadata: void 0
                      // Clear for non-voice channels
                    };
                    return instagramEngagement;
                  } else if (channelType === "EMAIL") {
                    const emailEngagement = {
                      ...engagement,
                      ...commonUpdates,
                      channel: "EMAIL",
                      fromUser: {
                        userId: workitem.fromId
                      },
                      sourceId: "eml",
                      toAddresses: workitem.toAddresses ?? (workitem.to ? [workitem.to] : void 0)
                    };
                    return emailEngagement;
                  } else {
                    const existingChat = engagement;
                    const chatEngagement = {
                      ...engagement,
                      ...commonUpdates,
                      channel: "CHAT",
                      fromUser: {
                        name: workitem.displayName ?? workitem.from,
                        username: workitem.agentUsername
                      },
                      sourceId: "chat",
                      terminationMetadata: void 0,
                      // Clear for non-voice channels
                      toUser: {
                        brandName: existingChat.toUser.brandName || "",
                        brandSocialId: existingChat.toUser.brandSocialId || "",
                        brandUserName: existingChat.toUser.brandUserName || ""
                      }
                    };
                    return chatEngagement;
                  }
                } else {
                  return engagement;
                }
              }).sort((a, b) => b.createdAt - a.createdAt);
            } else {
              const newEngagement = this.createEngagementDataFromWorkitem(workitem);
              currentData = [newEngagement, ...existingEngagements].sort(
                (a, b) => b.createdAt - a.createdAt
              );
            }
            acc.push([queryKey, currentData]);
          }
        }
        return acc;
      },
      []
    );
    pushFeedData.forEach(([queryKey, engagementData]) => {
      queryClient.setQueryData(queryKey, {
        engagementData
      });
    });
    this.persistDataInQueries();
  }
  /**
   * Update or add a workitem in the conversation workitems cache
   */
  updateWorkitemInCache(workitem, strategy = "upsert") {
    if (!workitem.conversationId) {
      return;
    }
    if (workitem.state === "directconnect") {
      return;
    }
    const queryKey = getConversationWorkitemsQueryOptions({
      conversationId: workitem.conversationId
    }).queryKey;
    const data = queryClient.getQueryData(queryKey);
    let newWorkitems;
    let updatedWorkitem = { ...workitem };
    if (strategy === "prepend") {
      newWorkitems = [workitem, ...data?.workitems ?? []];
    } else {
      const existingWorkitem = data?.workitems.find(
        (w) => w.workitemId === workitem.workitemId || w._id === workitem._id
      );
      if (existingWorkitem && data?.workitems) {
        if (existingWorkitem.conversation) {
          updatedWorkitem = {
            ...updatedWorkitem,
            conversation: { ...existingWorkitem.conversation }
          };
        }
        newWorkitems = data.workitems.map(
          (wi) => wi.workitemId === updatedWorkitem.workitemId || wi._id === updatedWorkitem._id ? { ...wi, ...updatedWorkitem } : wi
        );
      } else {
        newWorkitems = [updatedWorkitem, ...data?.workitems ?? []];
      }
    }
    queryClient.setQueryData(queryKey, {
      workitems: newWorkitems
    });
    this.upsertMultiScopeWorkitemsCache({ workitems: [updatedWorkitem] });
    this.updatePushFeedEngagementData(updatedWorkitem);
  }
  /**
   * Find and update a workitem across all queries by workitemId
   */
  updateWorkitemByIdAcrossQueries(workitemId, updateFn, { syncPushFeedEngagement = true } = {}) {
    const allWorkitemQueries = queryClient.getQueriesData({});
    allWorkitemQueries.forEach(([queryKey, queryData]) => {
      if (!queryData?.workitems) {
        return;
      }
      const workitemIndex = queryData.workitems.findIndex((w) => w.workitemId === workitemId);
      if (workitemIndex !== -1) {
        const workitem = queryData.workitems[workitemIndex];
        if (!workitem) {
          return;
        }
        const updatedWorkitem = {
          ...workitem,
          ...updateFn(workitem)
        };
        const updatedWorkitems = [...queryData.workitems];
        updatedWorkitems[workitemIndex] = updatedWorkitem;
        queryClient.setQueryData(queryKey, {
          workitems: updatedWorkitems
        });
        this.upsertMultiScopeWorkitemsCache({ workitems: [updatedWorkitem] });
        if (syncPushFeedEngagement) {
          this.updatePushFeedEngagementData(updatedWorkitem);
        }
      }
    });
  }
  /**
   * Find and update matching workitems across all queries
   */
  updateMatchingWorkitemsAcrossQueries(matchFn, updateFn, { syncPushFeedEngagement = true } = {}) {
    const allWorkitemQueries = queryClient.getQueriesData({});
    allWorkitemQueries.forEach(([queryKey, queryData]) => {
      if (!queryData?.workitems) {
        return;
      }
      const matchingWorkitems = new Set(
        queryData.workitems.filter((w) => matchFn(w)).map((w) => w.workitemId)
      );
      if (matchingWorkitems.size > 0) {
        const updatedWorkitems = [...queryData.workitems].map((workitem) => {
          if (matchingWorkitems.has(workitem.workitemId)) {
            const updatedWorkitem = {
              ...workitem,
              ...updateFn(workitem)
            };
            if (syncPushFeedEngagement) {
              this.updatePushFeedEngagementData(updatedWorkitem);
            }
            return updatedWorkitem;
          }
          return workitem;
        });
        queryClient.setQueryData(queryKey, {
          workitems: updatedWorkitems
        });
      }
    });
  }
  /**
   * Update all workitems in a conversation workitems query.
   */
  updateWorkitemsInConversationIdQuery(conversationId, {
    matchFn,
    updateFn
  }) {
    const queryKey = getConversationWorkitemsQueryOptions({ conversationId }).queryKey;
    const data = queryClient.getQueryData(queryKey);
    if (!data?.workitems) {
      return;
    }
    const idsToUpdate = new Set(
      data.workitems.filter((workitem) => {
        if (workitem.conversationId !== conversationId) {
          return false;
        }
        if (matchFn && !matchFn(workitem)) {
          return false;
        }
        return true;
      }).map((workitem) => workitem.workitemId)
    );
    this.updateMatchingWorkitemsAcrossQueries(
      (workitem) => idsToUpdate.has(workitem.workitemId),
      (workitem) => updateFn(workitem),
      { syncPushFeedEngagement: false }
    );
  }
  /**
   * Update engagement data across all push-feed queries for a conversation
   */
  updateEngagementDataAcrossQueries(conversationId, updateFn) {
    const data = queryClient.getQueriesData({}).reduce(
      (acc, curr) => {
        if (Array.isArray(curr)) {
          const queryKey = curr[0];
          if (Array.isArray(queryKey) && queryKey.includes("push-feed")) {
            const updatedData = curr[1]?.engagementData.map((engagement) => {
              if (engagement.conversationId === conversationId) {
                return updateFn(engagement);
              }
              return engagement;
            }).filter((engagement) => engagement !== null);
            acc.push([queryKey, updatedData]);
          }
        }
        return acc;
      },
      []
    );
    data.forEach(([queryKey, engagementData]) => {
      queryClient.setQueryData(queryKey, {
        engagementData
      });
    });
    this.persistDataInQueries();
  }
  /**
   * Remove a conversation from push-feed query cache entries, optionally scoped to a specific
   * filter bucket. When `filter` is omitted the conversation is removed from every push-feed
   * query. When `filter` is provided only queries whose key filter segment matches are touched,
   * leaving all other filter caches intact.
   *
   * Called from two places:
   *
   * 1. ConversationStatusEvent (status === 'UNARCHIVED') — handleConversationsCacheSubscription
   *    When: the backend notifies that a previously archived conversation has been unarchived.
   *    Why:  the conversation must be removed from the 'archived' filter cache only; it should
   *          remain in the 'all' (and any other active) feed caches.
   *
   * 2. UserRemovedFromChannelNotification — handleConversationsCacheSubscription
   *    When: the backend notifies that the current user has been removed from a channel/conversation.
   *    Why:  the user has lost access entirely, so the conversation must be wiped from every
   *          push-feed cache (no filter scope). Workitem queries for the same conversation are
   *          also removed via removeWorkitemQueriesByConversationId.
   */
  removeConversationFromPushFeedQueries(conversationId, { filter: filter3 } = {}) {
    const data = queryClient.getQueriesData({}).reduce((acc, curr) => {
      if (!Array.isArray(curr)) {
        return acc;
      }
      const queryKey = curr[0];
      if (!(Array.isArray(queryKey) && queryKey.includes("push-feed"))) {
        return acc;
      }
      if (filter3 !== void 0) {
        if (queryKey.length <= 2 || !areFeedFiltersEqual(filter3, queryKey[2])) {
          return acc;
        }
      }
      const engagementData = curr[1]?.engagementData.filter(
        (engagement) => engagement.conversationId !== conversationId
      ) ?? [];
      acc.push([queryKey, engagementData]);
      return acc;
    }, []);
    data.forEach(([queryKey, engagementData]) => {
      queryClient.setQueryData(queryKey, {
        engagementData
      });
    });
    this.persistDataInQueries();
  }
  /**
   * Remove the workitem from all the conversationIds workitems query cache (e.g. for blind transfers,
   * the workitem may have lived in multiple conversations)
   */
  removeWorkitemFromConversation(workitemId, conversationId) {
    const queryKey = getConversationWorkitemsQueryOptions({
      conversationId
    }).queryKey;
    const data = queryClient.getQueryData(queryKey);
    const foundWorkitem = data?.workitems.find((w) => w.workitemId === workitemId);
    const isWorkitemInactive = foundWorkitem?.workitemId === workitemId && (foundWorkitem.state === WorkitemStates.Dispositioned || foundWorkitem.state === WorkitemStates.Terminated);
    if (isWorkitemInactive) {
      return;
    }
    const updatedWorkitems = data?.workitems.filter((w) => w.workitemId !== workitemId);
    if (updatedWorkitems) {
      queryClient.setQueryData(queryKey, {
        workitems: updatedWorkitems
      });
      this.upsertMultiScopeWorkitemsCache({
        removeWorkitemId: workitemId,
        workitems: updatedWorkitems
      });
    }
  }
  /**
   * Remove workitem from push-feed queries (engagementData), defaulting to the previous one.
   * If it's the only one, default to an empty workitemId so it doesn't display.
   */
  removeWorkitemFromPushFeedQueries(workitemId, conversationId) {
    this.updateEngagementDataAcrossQueries(conversationId, (engagement) => {
      const queryKey = getConversationWorkitemsQueryOptions({
        conversationId
      }).queryKey;
      const data = queryClient.getQueryData(queryKey);
      const isEngagementWorkitemInactive = engagement.workitemId === workitemId && (engagement.state === WorkitemStates.Dispositioned || engagement.state === WorkitemStates.Terminated);
      if (isEngagementWorkitemInactive) {
        return engagement;
      }
      const foundNextWorkitem = data?.workitems.find((w) => w.workitemId !== workitemId);
      if (foundNextWorkitem) {
        const engagementData = this.createEngagementDataFromWorkitem(foundNextWorkitem);
        return {
          ...engagementData,
          conversationId: engagement.conversationId,
          ownerId: engagement.ownerId
        };
      }
      if (engagement.workitemId === workitemId) {
        return {
          ...engagement,
          workitemId: ""
        };
      }
      return engagement;
    });
  }
  /**
   * Remove all workitem queries for a specific conversation from the cache
   */
  removeWorkitemQueriesByConversationId(conversationId) {
    const allWorkitemQueries = queryClient.getQueriesData({});
    let removedCount = 0;
    allWorkitemQueries.forEach(([queryKey, queryData]) => {
      if (!queryData?.workitems) {
        return;
      }
      const hasMatchingConversation = queryData.workitems.some(
        (workitem) => workitem.conversationId === conversationId
      );
      if (hasMatchingConversation) {
        queryClient.removeQueries({ queryKey });
        removedCount++;
      }
    });
    if (removedCount > 0) {
      this.logger.debug("BaseConversationService - Removed workitem queries for conversation", {
        conversationId,
        removedQueriesCount: removedCount
      });
    }
  }
  handleConversationsCacheSubscription() {
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemConversationMessageNotification)).subscribe((event) => {
      this.logger.debug("ConversationService - WorkitemConversationMessageNotification", event);
      const { workitem } = event.data;
      if (workitem) {
        this.updateWorkitemInCache(workitem, "upsert");
      }
    });
    this.eventsService.internalEvents$.pipe(
      ofType(InternalEvents.WorkitemStateChangeNotification),
      filter((event) => {
        return event.data.workitem?.type === WorkitemTypes.ConversationMessage || event.data.workitem?.type === WorkitemTypes.ConversationWatermark;
      })
    ).subscribe((event) => {
      this.logger.debug(
        `BaseConversationService - ConversationMessageOrWatermark - ${event.name}`,
        event
      );
      const { workitem } = event.data;
      if (!workitem) {
        return;
      }
      this.updateWorkitemInCache(workitem, "upsert");
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemStateChangeNotification)).subscribe((event) => {
      this.logger.debug(`BaseConversationService - ${event.name}`, event);
      const { workitem } = event.data;
      if (!workitem) {
        return;
      }
      this.updateWorkitemInCache(workitem, "upsert");
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemTerminatedNotification)).subscribe((event) => {
      this.logger.debug(`BaseConversationService - ${event.name}`, event);
      const { workitem } = event.data;
      if (!workitem) {
        return;
      }
      this.updateWorkitemInCache(workitem, "upsert");
      if (workitem.conversationIds?.length) {
        workitem.conversationIds.forEach((priorConversationId) => {
          const previousEngagementData = queryClient.getQueriesData({}).filter(([queryKey]) => Array.isArray(queryKey) && queryKey.includes("push-feed")).flatMap(([, data]) => data?.engagementData ?? []).find((eng) => eng.conversationId === priorConversationId);
          const ownerId = previousEngagementData?.participants?.find(
            (p) => p.type === "queue"
          )?.id;
          this.updateWorkitemInCache(
            {
              ...workitem,
              conversation: workitem.conversation ? {
                ...workitem.conversation,
                conversationId: priorConversationId,
                ownerId: ownerId ?? previousEngagementData?.ownerId,
                participants: previousEngagementData?.participants ?? workitem.conversation.participants
              } : workitem.conversation,
              conversationId: priorConversationId
            },
            "upsert"
          );
        });
      }
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemRemovedNotification)).subscribe((event) => {
      this.logger.debug(`BaseConversationService - ${event.name}`, event);
      const { conversationId, conversationIds, workitemId } = event.data;
      if (conversationId) {
        this.removeWorkitemFromConversation(workitemId, conversationId);
        this.removeWorkitemFromPushFeedQueries(workitemId, conversationId);
      }
      if (conversationIds?.length) {
        conversationIds.forEach((priorConversationId) => {
          this.removeWorkitemFromConversation(workitemId, priorConversationId);
          this.removeWorkitemFromPushFeedQueries(workitemId, priorConversationId);
        });
      }
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.LiveTranscriptionNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - LiveTranscriptionNotification", event);
      const { message, workitemId } = event.data;
      this.updateWorkitemByIdAcrossQueries(
        workitemId,
        (workitem) => {
          const transcriptionMessages = [...workitem.transcriptionMessages ?? []];
          const existingMessageIndex = transcriptionMessages.findIndex(
            (m) => m.id === message.id
          );
          if (existingMessageIndex !== -1) {
            transcriptionMessages[existingMessageIndex] = message;
          } else {
            transcriptionMessages.push(message);
          }
          return { transcriptionMessages };
        },
        { syncPushFeedEngagement: false }
      );
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.AISummaryNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - AISummaryNotification", event);
      const { summaryList, workitemId } = event.data;
      this.updateWorkitemByIdAcrossQueries(
        workitemId,
        () => ({
          summary: summaryList[0].summary
        }),
        { syncPushFeedEngagement: false }
      );
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemSummaryNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - WorkitemSummaryNotification", event);
      const { state, summary, workitemId } = event.data;
      if (state === "ended" && summary.length > 0) {
        this.updateWorkitemByIdAcrossQueries(
          workitemId,
          () => ({
            summary
          }),
          { syncPushFeedEngagement: false }
        );
      }
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.ConversationEngagementDataNotification)).subscribe((event) => {
      this.logger.debug(
        "BaseConversationService - ConversationEngagementDataNotification",
        event
      );
      const { conversationId, engagementData } = event.data;
      this.updateEngagementDataAcrossQueries(conversationId, () => engagementData);
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.UnreadCountNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - UnreadCountNotification", event);
      const { conversationId, unreadCount } = event.data;
      if (unreadCount === 0) {
        this.updateWorkitemsInConversationIdQuery(conversationId, {
          matchFn: (workitem) => workitem["isRead"] === false || workitem.read === false,
          updateFn: () => ({
            isRead: true,
            read: true
          })
        });
      }
      this.updateEngagementDataAcrossQueries(conversationId, (engagement) => {
        if (isEngagementDataWithWorkitem(engagement) && unreadCount === 0) {
          return {
            ...engagement,
            unreadCount,
            workitem: {
              ...engagement.workitem,
              isRead: true,
              read: true
            }
          };
        } else {
          return {
            ...engagement,
            unreadCount
          };
        }
      });
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.ConversationStatusEvent)).subscribe((event) => {
      this.logger.debug("BaseConversationService - ConversationStatusEvent", event);
      const { conversationId, status } = event.data;
      this.updateEngagementDataAcrossQueries(conversationId, (engagement) => {
        if (status === "DELETED") {
          return null;
        }
        return {
          ...engagement,
          archived: status === "ARCHIVED",
          status
        };
      });
      if (status === "DELETED") {
        const queryKey = getConversationWorkitemsQueryOptions({ conversationId }).queryKey;
        queryClient.removeQueries({ queryKey });
        this.removeWorkitemQueriesByConversationId(conversationId);
      } else if (status === "UNARCHIVED") {
        this.removeConversationFromPushFeedQueries(conversationId, {
          filter: "archived"
        });
      }
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.UserRemovedFromChannelNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - UserRemovedFromChannelNotification", event);
      const { conversationId } = event.data;
      this.removeConversationFromPushFeedQueries(conversationId);
      this.removeWorkitemQueriesByConversationId(conversationId);
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemDeletedNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - WorkitemDeletedNotification", event);
      const { conversationId, workitemId } = event.data;
      if (conversationId) {
        const queryKey = getConversationWorkitemsQueryOptions({ conversationId }).queryKey;
        const data = queryClient.getQueryData(queryKey);
        const newWorkitems = data?.workitems.filter((w) => w._id !== workitemId) ?? [];
        queryClient.setQueryData(queryKey, {
          workitems: newWorkitems
        });
        const replacementWorkitem = sortItems([...newWorkitems])[0];
        this.updateEngagementDataAcrossQueries(conversationId, (engagement) => {
          if (engagement.workitemId !== workitemId) {
            return engagement;
          }
          if (!replacementWorkitem) {
            return null;
          }
          const replacementEngagement = this.createEngagementDataFromWorkitem(replacementWorkitem);
          return {
            ...engagement,
            ...replacementEngagement,
            unreadCount: engagement.unreadCount
          };
        });
        this.persistDataInQueries();
      }
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.WorkitemReadNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - WorkitemReadNotification", event);
      const { affectedCount = 0, conversationId, read, workitemId } = event.data;
      if (workitemId) {
        this.updateWorkitemByIdAcrossQueries(
          workitemId,
          () => ({
            isRead: read,
            read
          }),
          { syncPushFeedEngagement: false }
        );
      }
      if (conversationId) {
        this.updateEngagementDataAcrossQueries(conversationId, (engagement) => ({
          ...engagement,
          unreadCount: read ? Math.max(0, (engagement.unreadCount ?? 0) - affectedCount) : (engagement.unreadCount ?? 0) + affectedCount
        }));
      }
    });
    this.eventsService.externalEvents$.pipe(ofType(ExternalEvents.CallRecordingNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - CallRecordingNotification", event);
      const { callRecordingData, conversationId, workitemId } = event.data;
      if (conversationId) {
        this.updateWorkitemByIdAcrossQueries(
          workitemId,
          () => ({
            callRecordingData: callRecordingData.callRecording
          }),
          { syncPushFeedEngagement: false }
        );
      }
    });
  }
  persistDataInQueries() {
    const conversationsQueries = queryClient.getQueriesData({}).map(([queryKey, engagementData]) => {
      return [queryKey, engagementData];
    });
    const workitemsQueries = queryClient.getQueriesData({}).map(([queryKey, data]) => {
      return [queryKey, data];
    });
    const queryPersister = dependencyInjectionContainer.resolve("persisterClient").getQueryPersister();
    if (queryPersister) {
      conversationsQueries.forEach(([queryKey]) => {
        queryPersister.persistQueryByKey(queryKey, queryClient).catch((error) => {
          this.logger.error(error);
        });
      });
      workitemsQueries.forEach(([queryKey]) => {
        queryPersister.persistQueryByKey(queryKey, queryClient).catch((error) => {
          this.logger.error(error);
        });
      });
    }
  }
  handleConversationStatusEvent() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ConversationStatusEvent)).subscribe((event) => {
      this.logger.debug("BaseConversationService - handleConversationStatusEvent", event);
      this.eventsService.emitExternal(ExternalEvents.ConversationStatusEvent, event.data);
    });
  }
  handleConversationEngagementDataNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ConversationEngagementDataNotification)).subscribe((event) => {
      this.logger.debug(
        "BaseConversationService - handleConversationEngagementDataNotification",
        event
      );
      this.eventsService.emitExternal(
        ExternalEvents.ConversationEngagementDataNotification,
        event.data
      );
    });
  }
  handleUnreadCountNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.UnreadCountNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - handleUnreadCountNotification", event);
      this.eventsService.emitExternal(ExternalEvents.UnreadCountNotification, event.data);
    });
  }
  handleUserRemovedFromChannel() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.UserRemovedFromChannelNotification)).subscribe((event) => {
      this.logger.debug("BaseConversationService - handleUserRemovedFromChannel", event);
      this.eventsService.emitExternal(
        ExternalEvents.UserRemovedFromChannelNotification,
        event.data
      );
    });
  }
  /**
   * Fetch conversations
   * @param {number} params.rows - Number of items per page, defaults to 100
   * @param {number} params.start - Pagination starting index, defaults to 0.
   */
  async fetchConversations({
    rows = 100,
    start = 0
  }) {
    this.logger.trace("BaseConversationService - fetchConversations");
    const { data } = await axiosInstance.get(
      `/data/api/types/conversation?rows=${rows}&start=${start}`
    );
    if (data.objects) {
      data.objects = data.objects.map((workitem) => {
        return fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
      });
    }
    return data;
  }
  /**
   * Creates a conversation with the specified `conversationData`.
   * API endpoint.
   * @param {ConversationPayload} conversationData - The required initial data for a conversation.
   * @param {string} conversationData.description - The description of the conversation
   * @param {string} conversationData.name - The name of the conversation
   * @param {ParticipantPayload[]} conversationData.participants - The initial participants of the conversation
   * @param {string} conversationData.phoneNumber - The phone number for this conversation
   * @deprecated use sdk.getSchemaTypeClient().create('conversation', { data: {...} })
   */
  async createConversation(conversationData) {
    this.logger.warn(
      'BaseConversationService - createConversation is deprecated and will be removed in a future version. Use sdk.getSchemaTypeClient().create("conversation", { data: {...} })'
    );
    const payload = {
      ...conversationData,
      objectType: "conversation"
    };
    const { data } = await axiosInstance.post(
      "/data/api/types/conversation",
      payload
    );
    return data;
  }
  createMessageRequestPayload(commonPayload) {
    const payload = {
      campaignId: commonPayload.campaignId,
      conversationId: commonPayload.conversationId,
      draftMessage: commonPayload.draftMessage,
      fromAddressOption: commonPayload.fromAddressOption,
      mentionedUsers: commonPayload.mentionedUsers ?? [],
      message: commonPayload.message,
      messageType: commonPayload.messageType,
      parentWorkitemIds: commonPayload.parentWorkitemIds
    };
    let url = `/users/api/conversation/message`;
    if (commonPayload.conversationId) {
      url = `/users/api/conversation/${commonPayload.conversationId}/message`;
    }
    if (commonPayload.internal) {
      url = `/users/api/conversation/${commonPayload.conversationId}/internalmessage`;
    }
    if (commonPayload.external) {
      url = `/users/api/conversation/${commonPayload.conversationId}/externalmessage`;
    }
    if (commonPayload.workitemId) {
      payload["workitemId"] = commonPayload.workitemId;
    }
    if (commonPayload.from) {
      payload["from"] = commonPayload.from;
    }
    if (commonPayload.to) {
      payload["to"] = commonPayload.to;
    } else if (commonPayload.toAddresses) {
      payload["toAddresses"] = commonPayload.toAddresses;
    } else if (!commonPayload.internal && !commonPayload.workitemId) {
      throw new Error("Either `to` or `toAddresses` must be provided");
    }
    const headers = new AxiosHeaders2();
    let requestBody;
    if (commonPayload.files?.length) {
      headers.setContentType("multipart/form-data");
      requestBody = new FormData();
      for (const file of commonPayload.files) {
        requestBody.append("file", file);
      }
      requestBody.append("object", JSON.stringify(payload));
    } else if (commonPayload.file) {
      headers.setContentType("multipart/form-data");
      requestBody = new FormData();
      requestBody.append("file", commonPayload.file);
      requestBody.append("object", JSON.stringify(payload));
    } else if (commonPayload.workitemId) {
      headers.setContentType("multipart/form-data");
      requestBody = new FormData();
      requestBody.append("object", JSON.stringify(payload));
    } else {
      requestBody = payload;
    }
    return {
      headers,
      requestBody,
      url
    };
  }
  /**
   * Send a message in the conversation specified by `campaignId` and `conversationId`.
   * @param {string} params.campaignId - The campaign ID
   * @param {string} params.conversationId - The conversation ID. **This parameter will be REQUIRED** in future versions; to create a conversation, use instead `createConversationWithParticipants`. Using this parameter will send the message to the specified existing conversation.
   * @param params.file - Deprecated file parameter. Use files instead.
   * @param params.files - Array of files to send as attachments.
   * @param {string} params.fromAddressOption - Array of files to send as attachments.
   * @param {string} params.message - The message to send
   * @param {string} params.messageType - The type of message sent, DRAFT or TEXT
   * @param {string[]} params.mentionedUsers - The list of user ids that are mentioned in the message
   * @param {{ phoneNumber: string }[]} params.toAddresses - The list of phone numbers that will be part of the conversation.
   * @param {{ phoneNumber: string }[]} params.to - The ID or number that's the recipient of the message.
   */
  async sendMessage(sendMessagePayload) {
    this.logger.debug(
      "BaseConversationService - sendMessage - invoked with payload:",
      sendMessagePayload
    );
    const { headers, requestBody, url } = this.createMessageRequestPayload(sendMessagePayload);
    const { data } = await axiosInstance.post(url, requestBody, {
      headers
    });
    return data;
  }
  /**
   * Edit a draft message specified by `workitemId` in the conversation specified by `campaignId` and `conversationId`.
   * @param {string} params.campaignId - The campaign ID
   * @param {string} params.conversationId - The conversation ID. **This parameter will be REQUIRED** in future versions; to create a conversation, use instead `createConversationWithParticipants`. Using this parameter will send the message to the specified existing conversation.
   * @param params.file - Deprecated file parameter. Use files instead.
   * @param params.files - Array of files to send as attachments.
   * @param {string} params.fromAddressOption - Array of files to send as attachments.
   * @param {string} params.message - The message to send
   * @param {string} params.messageType - The type of message sent, DRAFT or TEXT
   * @param {string[]} params.mentionedUsers - The list of user ids that are mentioned in the message
   * @param {string} params.workitemId - The ID of the workitem to edit
   */
  async editMessage(editMessagePayload) {
    this.logger.debug(
      "BaseConversationService - editMessage - invoked with payload:",
      editMessagePayload
    );
    const { headers, requestBody, url } = this.createMessageRequestPayload(editMessagePayload);
    const { data } = await axiosInstance.put(url, requestBody, {
      headers
    });
    return data;
  }
  /**
   * Fetches a conversation's messages by the specified conversationId.
   * @param {string} params.conversationId - The conversation ID
   * @param {number} params.rows - Number of items per page
   * @param {number} params.start - Pagination starting index
   * @param {boolean} params.mentioned - Filter messages that mention the logged user
   * @param {boolean} params.version - To use v1 or v2 of the API. Defaults to v1.
   */
  async fetchConversationById({
    conversationId,
    cursor,
    endCursor,
    includeCallRecordings,
    includeConversation,
    includeParentEngagement,
    includeSummary,
    includeVoicemail,
    limit = 100,
    mentioned,
    rows = 100,
    start = 0,
    version = "v1",
    workitemId
  }) {
    this.logger.debug(
      `BaseConversationService - fetchConversationById version [${version}] invoked with payload:`
    );
    let url = `/analytics/api/conversations/${conversationId}/workitems`;
    if (version === "v2") {
      url = `/analytics/api/v2/conversations/${conversationId}/workitems`;
    }
    const { data } = await axiosInstance.get(url, {
      params: {
        ...version === "v2" ? { cursor, endCursor, limit } : { rows, start },
        includeCallRecordings,
        includeConversation,
        includeParentEngagement,
        includeSummary,
        includeVoicemail,
        mentioned,
        workitemId
      }
    });
    if (data.objects) {
      data.objects = data.objects.map(
        (workitem) => fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        })
      );
    }
    return data;
  }
  /**
   * Fetches a conversation's messages with workItems only in given status
   * @param {string} params.conversationId - The conversation ID
   * @param {number} params.rows - Number of items per page
   * @param {number} params.start - Pagination starting index
   * @param {number} params.workItemStatus - Pagination starting index
   */
  async fetchConversationWorkItemsByStatus({
    conversationId,
    rows = 100,
    start = 0,
    workItemStatus
  }) {
    this.logger.debug(
      `BaseConversationService - fetchConversationWorkItemsByStatus - fetching conversation [${conversationId}] workitems with status [${workItemStatus}]`
    );
    const { data } = await axiosInstance.get(
      `/analytics/api/conversations/${conversationId}/workitems/${workItemStatus}`,
      {
        params: {
          rows,
          start
        }
      }
    );
    if (data.objects) {
      data.objects = data.objects.map((workitem) => {
        return fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
      });
    }
    return data;
  }
  /**
   * Fetches conversations in the campaign specified by campaignId
   * @param {boolean} params.archived - Filter archived conversations
   * @param {boolean} params.calls - Filter calls
   * @param {string} params.campaignId - The campaign ID
   * @param {boolean} params.draft - Filter draft conversations
   * @param {boolean} params.inboundCalls - Filter inbound calls
   * @param {boolean} params.latest - Filter latest conversations
   * @param {boolean} params.mentioned - Filter messages that have mentions
   * @param {boolean} params.messages - Filter messages
   * @param {boolean} params.missedCalls - Filter missed calls
   * @param {boolean} params.outboundCalls - Filter outbound calls
   * @param {boolean} params.read - Filter read messages
   * @param {number} params.rows - Number of items per page
   * @param {string} params.scope - Filter by scope
   * @param {number} params.start - Pagination starting index
   * @param {boolean} params.totalUnread - Include unread count for each conversation
   * @param {boolean} params.voicemails - Filter voicemails
   * @param {string} params.workitem - Filter by workitem
   */
  async fetchConversationByCampaignId({
    campaignId,
    limit = 100,
    offset = 0,
    ...params
  }) {
    this.logger.debug(
      `BaseConversationService - fetchConversationByCampaignId - fetching recent conversation workitems for campaign [${campaignId}] with payload:`,
      params
    );
    const { data } = await axiosInstance.get(
      `/analytics/api/campaigns/${campaignId}/recentconversationworkitems`,
      {
        params: {
          limit,
          offset,
          ...params
        }
      }
    );
    if (data.objects) {
      data.objects = data.objects.map((workitem) => {
        return fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
      });
    }
    return data;
  }
  /**
   * Fetches the journal-style timeline for a conversation, grouped into date
   * sections and topic groups. Sent to the backend as the snake_case
   * `conversation_id` query param.
   * @param {string} params.conversationId - Conversation to fetch the timeline for.
   * @param {number} params.limit - Number of items per page.
   * @param {number} params.offset - Offset of the first item of the page; advance by `limit` while `pagination.hasMore` is true.
   */
  async fetchConversationTimeline({
    conversationId,
    limit = DEFAULT_CONVERSATION_TIMELINE_LIMIT,
    offset = 0
  }) {
    this.logger.debug(
      "BaseConversationService - fetchConversationTimeline - invoked with payload",
      {
        conversationId,
        limit,
        offset
      }
    );
    const { data } = await axiosInstance.get(
      "/cxfabric/api/conversation-timeline",
      {
        params: {
          conversation_id: conversationId,
          limit,
          offset
        }
      }
    );
    return {
      conversationId: data.conversation_id,
      pagination: {
        hasMore: data.pagination.has_more,
        limit: data.pagination.limit,
        offset: data.pagination.offset
      },
      sections: data.sections.map((section) => ({
        date: section.date,
        dateLabel: section.date_label,
        groups: section.groups.map((group) => ({
          entries: group.entries,
          summary: group.summary,
          topicName: group.topic_name
        }))
      }))
    };
  }
  /**
   * Fetches recent conversation engagements based on the provided parameters.
   * @param {number} params.cursor - Cursor for pagination.
   * @param {ConversationFilterTabType} params.filter - Filter type for conversations.
   * @param {boolean} params.ignoreVoicemailTranscripts - Whether to ignore voicemail transcripts.
   * @param {number} params.limit - Number of items per page.
   * @param {ConversationFilterTabType} params.tab - Tab filter for conversations.
   */
  async fetchRecentConversationWorkitemEngagements(params = {}) {
    this.logger.debug(
      "BaseConversationService - fetchRecentConversationWorkitemEngagements - invoked with payload",
      params
    );
    const { data } = await axiosInstance.get(
      `analytics/api/recentConversationWorkitems`,
      {
        params
      }
    );
    return data;
  }
  /**
   * Fetches conversation messages between the logged user and the participants specified
   * in `participantIds` array.
   *
   * @param {number} params.pageNumber - Page number
   * @param {number} params.pageSize - Number of items per page
   * @param {number} params.participantIds - IDs of the participants
   * @returns
   * * `{}` empty object if there's not conversation with these participants.
   * * `{ total: 0, count: 0, objects: [{ ...basicWorkitem, conversation: { ...conversationInfo } }] }` a single basic workitem with the conversation information if there's an existing conversation but no messages.
   * * `{ total: 2, count: 2, objects: [...workitems] }` An object with the correctly paginated conversation messages.
   */
  async fetchConversationHistoryByParticipantId({
    pageNumber = 1,
    pageSize = 100,
    participantIds
  }) {
    const params = {
      pageNumber,
      pageSize,
      participants: participantIds.length ? participantIds : void 0
    };
    this.logger.debug(
      "BaseConversationService - fetchConversationHistoryByParticipantId - invoked with payload:",
      params
    );
    const response = await axiosInstance.get(
      "/analytics/api/conversations/workitems",
      {
        params,
        paramsSerializer: {
          indexes: null
        }
      }
    );
    if (response.data.objects) {
      response.data.objects = response.data.objects.filter((value) => isWorkitem(value)).map((workitem) => {
        return fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
      });
    }
    return response.data;
  }
  /**
   * Create a conversation with the specified participants.
   * @param payload
   * @param {ConversationWithParticipantsParticipant[]} payload.conversationsParticipantList - The list of participants described by objects with `phoneNumber` or `id`.
   * @returns
   */
  async createConversationWithParticipants(payload) {
    const response = await axiosInstance.post(
      "/data/api/types/conversation-with-participants",
      payload
    );
    return response.data;
  }
  /**
   * Bulk update read status of workitems in a conversation.
   */
  async bulkChangeReadStatusInConversation(conversationId, status) {
    const response = await axiosInstance.put(
      `/users/api/conversations/${conversationId}/workitems/read`,
      {
        read: status
      }
    );
    if (status) {
      try {
        this.updateWorkitemsInConversationIdQuery(conversationId, {
          matchFn: (workitem) => workitem["isRead"] === false || workitem.read === false,
          updateFn: () => ({
            isRead: true,
            read: true
          })
        });
        this.updateEngagementDataAcrossQueries(conversationId, (engagement) => {
          if (isEngagementDataWithWorkitem(engagement)) {
            return {
              ...engagement,
              unreadCount: 0,
              workitem: {
                ...engagement.workitem,
                isRead: true,
                read: true
              }
            };
          } else {
            return {
              ...engagement,
              unreadCount: 0
            };
          }
        });
      } catch (error) {
        this.logger.error(
          "BaseConversationService - bulkChangeReadStatusInConversation - Error updating read status in cache after bulk update",
          error
        );
      }
    }
    return response.data;
  }
  /**
   * Delete a message from a conversation, used for draft messages flow.
   *
   * @param payload - The payload to delete a message from a conversation.
   * @param {string} payload.conversationId - The conversation ID.
   * @param {boolean=} payload.isDraft - True if the message is a draft, false otherwise.
   * @param {string} payload.workitemId - The workitemId of the message to delete.
   */
  async deleteMessage({
    conversationId,
    isDraft,
    workitemId
  }) {
    let url = `/analytics/api/user/${this.stateService.getUserId()}/conversation/${conversationId}/workitem/${workitemId}`;
    if (isDraft) {
      url = `/users/api/conversation/${conversationId}/workitem/${workitemId}`;
    }
    const response = await axiosInstance.delete(url);
    return response.data;
  }
  /**
   * Update the draft status of the conversation with conversationId in workitem with workitemId.
   *
   * @param payload - The payload to change the draft status of a conversation.
   * @param conversationId - The conversation ID.
   * @param draft - The draft status.
   * @param workitemId - The workitem ID.
   */
  async changeConversationDraftStatus({
    conversationId,
    draft,
    workitemId
  }) {
    const response = await axiosInstance.put(
      `/users/api/conversation/${conversationId}/workitem/${workitemId}/draft`,
      { draft }
    );
    return response.data;
  }
  /**
   * Retry sending a failed message from a conversation.
   *
   * @param payload - The payload to delete a message from a conversation.
   * @param {string} payload.conversationId - The conversation ID.
   * @param {string} payload.workitemId - The workitemId of the message to retry.
   */
  async retryMessage({ conversationId, workitemId }) {
    const response = await axiosInstance.put(
      `/users/api/conversation/${conversationId}/workitem/${workitemId}/retry`
    );
    return response.data;
  }
  /**
   * Delete a conversation.
   *
   * @param payload - The payload to delete a conversation.
   * @param {string} payload.conversationId - The conversation ID.
   * @param {string=} payload.userId - The user ID.
   */
  async deleteConversation({ conversationId, userId }) {
    const response = await axiosInstance.delete(
      `/analytics/api/user/${userId ?? this.stateService.getUserId()}/conversation/${conversationId}`
    );
    return response.data;
  }
  /**
   * Archive and Unarchive a conversation.
   *
   * @param payload - The payload to archive or unarchive a conversation.
   * @param {string} payload.conversationId - The conversation ID.
   * @param {boolean} payload.archived - True if the conversation is archived, false otherwise.
   * @returns
   */
  async archiveConversation({
    archived,
    campaignId,
    conversationId
  }) {
    const { data } = await axiosInstance.put(
      `/data/api/types/conversation/${conversationId}/archived`,
      { archived, campaignId }
    );
    return data;
  }
  /**
   * Fetches the conversations of a ticket.
   *
   * @param ticketId - The ticket ID.
   * @returns The ticket conversations.
   */
  async fetchTicketConversations(ticketId) {
    const response = await axiosInstance.get(
      `/analytics/api/tickets/${ticketId}/conversations`
    );
    return response.data;
  }
  /**
   * Converts a conversation to a channel.
   *
   * @param conversationId - The conversation ID.
   * @param channelName - The channel name.
   * @returns The channel.
   */
  async convertConversationToChannel(conversationId, channelName) {
    const { data } = await axiosInstance.post(
      `/data/api/types/conversation/${conversationId}/channel`,
      { name: channelName }
    );
    return data;
  }
  /**
   * Renames a channel.
   *
   * @param channelId - The channel ID.
   * @param channelName - The new channel name.
   * @returns The channel.
   */
  async renameChannel(channelId, channelName) {
    const { data } = await axiosInstance.put(
      `/data/api/types/conversation/${channelId}/channel`,
      { name: channelName }
    );
    return data;
  }
  /**
   * Updates the participants of a conversation.
   *
   * @param conversationId - The conversation ID.
   * @param payload - The payload to update the participants.
   * @returns The conversation.
   */
  async updateConversationParticipants(conversationId, payload) {
    const { data } = await axiosInstance.post(
      `/analytics/api/types/conversation/${conversationId}/participants`,
      payload
    );
    return data;
  }
  async fetchUnreadCounts() {
    this.logger.trace("BaseConversationService - fetchUnreadCounts");
    const { data } = await axiosInstance.get(
      "/data/api/types/conversation/unread/counts"
    );
    return data;
  }
  async fetchTranscriptionsAndRecordings({
    conversationId,
    createdAt,
    workitemId
  }) {
    const { data } = await axiosInstance.get(
      `/analytics/api/types/conversation/${conversationId}/workitems/${workitemId}/transcriptions-and-recordings`,
      {
        params: {
          createdAt
        }
      }
    );
    return data;
  }
  /**
   * Fetches the conversation activity summary including unread counts and latest activity.
   *
   * @returns The conversation activity summary with categorized conversations and unread counts.
   * @deprecated Use sdk.getSchemaTypeClient() to access the new v2 API
   */
  async fetchConversationActivitySummary() {
    this.logger.warn("BaseConversationService - fetchConversationActivitySummary is deprecated");
    const { data } = await axiosInstance.get(
      `/analytics/api/conversationActivitySummary`
    );
    return data;
  }
  /**
   * Update read status of a workitem in a conversation.
   */
  async updateWorkitemReadStatus({
    conversationId,
    status,
    workitemId
  }) {
    const response = await axiosInstance.put(
      `/users/api/conversation/${conversationId}/workitem/${workitemId}/read`,
      {
        read: status
      }
    );
    return response.data;
  }
  handleConversationFeedPushNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ConversationFeedPushNotification)).subscribe((event) => {
      this.logger.debug("ConversationService - handleConversationFeedPushNotification", {
        data: event.data,
        keysData: Array.from(this.taskIdMatches.entries())
      });
      const cacheLimit = this.stateService.getConversationsCacheLimit();
      const conversationFeedPushNotification = {
        ...event.data,
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- backend may omit objects when empty
        objects: event.data.objects ?? []
      };
      const taskIdMatch = this.taskIdMatches.get(conversationFeedPushNotification.taskId);
      if (taskIdMatch) {
        const remainingBatches = typeof taskIdMatch.remainingBatches === "number" ? taskIdMatch.remainingBatches - 1 : conversationFeedPushNotification.batchMetadata.totalBatches - 1;
        const isFinalBatch = remainingBatches === 0 || conversationFeedPushNotification.batchMetadata.isFinalBatch;
        if (!isFinalBatch) {
          this.taskIdMatches.set(conversationFeedPushNotification.taskId, {
            filter: taskIdMatch.filter,
            loadingKey: taskIdMatch.loadingKey,
            persistConversations: taskIdMatch.persistConversations,
            queryKey: taskIdMatch.queryKey,
            queueIds: taskIdMatch.queueIds,
            remainingBatches,
            tab: taskIdMatch.tab
          });
        } else {
          this.logger.debug(
            "ConversationService - ConversationFeedPushNotification - removing taskId batch tracking"
          );
          if (taskIdMatch.loadingKey) {
            this.feedLoadingStates.delete(taskIdMatch.loadingKey);
            this.logger.debug("ConversationService - Cleared feed loading state", {
              loadingKey: taskIdMatch.loadingKey
            });
            this.eventsService.emitExternal(ExternalEvents.ConversationsFeedLoadingChanged, {
              filter: taskIdMatch.filter,
              isLoading: false,
              queueIds: taskIdMatch.queueIds,
              tab: taskIdMatch.tab
            });
          }
          this.taskIdMatches.delete(conversationFeedPushNotification.taskId);
        }
        if (conversationFeedPushNotification.objects.length === 0) {
          this.logger.debug(
            "ConversationService - ConversationFeedPushNotification - no objects"
          );
          return;
        }
        this.logger.debug(
          "ConversationService - FeedPushNotification - updating query data",
          conversationFeedPushNotification.taskId,
          taskIdMatch
        );
        const queryKey = taskIdMatch.queryKey ?? getConversationsQueryOptions({
          filter: taskIdMatch.filter,
          queueIds: taskIdMatch.queueIds ?? "my-inbox",
          tab: taskIdMatch.tab
        }).queryKey;
        queryClient.setQueryData(queryKey, (currentData) => {
          const notificationEngagementDataMap = conversationFeedPushNotification.objects.reduce(
            (acc, item) => {
              if (!item.conversationId) {
                return acc;
              }
              acc.set(item.conversationId, item);
              return acc;
            },
            /* @__PURE__ */ new Map()
          );
          const newQueryDataMap = currentData?.engagementData.reduce((acc, item) => {
            if (!item.conversationId) {
              return acc;
            }
            if (!acc.has(item.conversationId)) {
              acc.set(item.conversationId, item);
            }
            return acc;
          }, notificationEngagementDataMap) ?? notificationEngagementDataMap;
          if (taskIdMatch.persistConversations) {
            const limitedEngagementData = filterLatestNItems(
              Array.from(newQueryDataMap.values()),
              cacheLimit.conversations
            );
            return {
              engagementData: limitedEngagementData
            };
          }
          return {
            engagementData: sortItems(Array.from(newQueryDataMap.values()))
          };
        });
        const queryPersister = dependencyInjectionContainer.resolve("persisterClient").getQueryPersister();
        if (queryPersister && taskIdMatch.persistConversations) {
          this.schedulePersistQuery(queryKey);
        }
        return;
      }
      this.logger.debug(
        "ConversationService - ConversationFeedPushNotification - no taskId match, skipping cache update",
        { taskId: conversationFeedPushNotification.taskId }
      );
    });
  }
  handleConversationWorkitemFeedPushNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ConversationWorkitemFeedPushNotification)).subscribe((event) => {
      this.logger.debug("ConversationService - handleConversationWorkitemFeedPushNotification");
      const workitemFeedPushNotification = event.data;
      this.logger.debug("ConversationService - ConversationWorkitemFeedPushNotification", {
        conversationId: workitemFeedPushNotification.conversationId,
        parentTaskId: workitemFeedPushNotification.parentTaskId,
        workitemsLength: workitemFeedPushNotification.workitems.length
      });
      if (workitemFeedPushNotification.workitems.length === 0) {
        this.logger.debug(
          "ConversationService - ConversationWorkitemFeedPushNotification - no objects"
        );
        return;
      }
      this.logger.debug("ConversationService - Queueing workitem feed update", {
        conversationId: workitemFeedPushNotification.conversationId,
        parentTaskId: workitemFeedPushNotification.parentTaskId
      });
      this.queueWorkitemFeedNotification(workitemFeedPushNotification);
    });
  }
  /**
   * Clears all orphaned push-feed tasks that were registered via fetchFeed() but
   * never completed because the WebSocket connection dropped before the final batch arrived.
   *
   * Why this is needed:
   * fetchFeed() sets feedLoadingStates to true and registers a taskId in taskIdMatches.
   * The only normal clearing path is handleConversationFeedPushNotification() when
   * remainingBatches reaches 0 (final batch). If the WebSocket drops before the final
   * batch arrives, remainingBatches never reaches 0, feedLoadingStates is never cleared,
   * and the isFeedLoading guard permanently blocks all future fetchFeed() calls for the
   * same filter/tab/queue combination — leaving the UI stuck in a loading state with no
   * way to recover without a page refresh.
   *
   * What this method does:
   * For each pending taskId it clears the loading state, clears the last requested cursor,
   * emits isLoading:false so the hook reacts and unblocks the UI, and emits an error so
   * the user knows the feed failed to load and can retry.
   *
   * Why lastRequestedCursorByKey is cleared per orphaned task:
   * getConversationsQueryOptions.queryFn uses getLastRequestedCursor() to skip background
   * re-fetches when the cursor has not changed. If a fetch was incomplete (partial batches
   * delivered before disconnect), the cache cursor and the last requested cursor may
   * coincidentally match — causing the background re-fetch to be silently skipped on the
   * next queryFn call (e.g. component re-mount). Clearing only the affected loadingKey
   * ensures getLastRequestedCursor returns undefined for that key, so the cursor guard
   * sees a difference and correctly triggers a fresh background fetch after reconnect.
   * Cursor entries for completed fetches are intentionally left untouched.
   */
  cleanupOrphanedConversationPushFeedTaskIds() {
    this.logger.debug(
      "BaseConversationService - cleanupOrphanedConversationPushFeedTaskIds - clearing pending tasks",
      { pendingTaskCount: this.taskIdMatches.size }
    );
    this.taskIdMatches.forEach((taskIdMatch) => {
      if (!taskIdMatch.loadingKey) {
        return;
      }
      this.feedLoadingStates.delete(taskIdMatch.loadingKey);
      this.lastRequestedCursorByKey.delete(taskIdMatch.loadingKey);
      this.eventsService.emitExternal(ExternalEvents.ConversationsFeedLoadingChanged, {
        filter: taskIdMatch.filter,
        isLoading: false,
        queueIds: taskIdMatch.queueIds,
        tab: taskIdMatch.tab
      });
      this.eventsService.emitExternal(ExternalEvents.ConversationsFeedErrorChanged, {
        errorMessage: "Connection lost, please try again",
        filter: taskIdMatch.filter,
        queueIds: taskIdMatch.queueIds,
        tab: taskIdMatch.tab
      });
    });
    this.taskIdMatches.clear();
  }
  /**
   * Subscribes to SocketClosedNotification and cleans up any push-feed tasks
   * that were in-flight when the WebSocket connection was lost.
   *
   * Why SocketClosedNotification and not SocketDisconnectedNotification or SocketErrordNotification:
   * - SocketClosedNotification (onWebSocketClose) is the definitive signal that the
   *   underlying WebSocket connection is gone and no further messages will arrive on it.
   * - SocketDisconnectedNotification (onDisconnect) is a STOMP-level graceful disconnect
   *   and does not reliably indicate an unexpected connection loss.
   * - SocketErrordNotification fires for both onWebSocketError and onStompError. In most
   *   failure scenarios onWebSocketError fires first and onWebSocketClose fires immediately
   *   after. Subscribing to both would run cleanup twice on the same taskIds — harmless
   *   but unnecessary. SocketClosedNotification alone is sufficient and definitive.
   *
   * STOMP reconnect behaviour:
   * reconnectDelay is 1000ms — STOMP automatically reconnects after close. Cleaning up
   * on close is still correct because any batches in-flight at the time of close are
   * permanently lost regardless of whether the socket reconnects. The user must trigger
   * a fresh fetchFeed() after reconnect, which is now unblocked by this cleanup.
   */
  handleWebSocketDisconnect() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SocketClosedNotification)).subscribe(() => {
      this.cleanupOrphanedConversationPushFeedTaskIds();
    });
  }
  async fetchFeed(params) {
    this.logger.debug("ConversationService - fetchFeed", params);
    const filter3 = normalizeFeedFilter(params.filter);
    const queueIds = params.queueIds;
    const tab = params.tab ?? "all";
    const loadingKey = this.getFeedLoadingKey(filter3, queueIds, tab);
    if (this.isFeedLoading(filter3, queueIds, tab)) {
      this.logger.debug("ConversationService - fetchFeed - skipping, already loading", {
        filter: filter3,
        loadingKey,
        tab
      });
      return;
    }
    this.lastRequestedCursorByKey.set(loadingKey, params.cursor);
    const queryKey = getConversationsQueryOptions({ filter: filter3, queueIds, tab }).queryKey;
    this.feedLoadingStates.set(loadingKey, true);
    this.logger.debug("ConversationService - Set feed loading to true", {
      filter: filter3,
      loadingKey,
      tab
    });
    const normalizedQueueIds = queueIds != null && queueIds !== "" ? queueIds : "my-inbox";
    this.eventsService.emitExternal(ExternalEvents.ConversationsFeedLoadingChanged, {
      filter: filter3,
      isLoading: true,
      queueIds: normalizedQueueIds,
      tab
    });
    this.eventsService.emitExternal(ExternalEvents.ConversationsFeedErrorChanged, {
      errorMessage: null,
      filter: filter3,
      queueIds: normalizedQueueIds,
      tab
    });
    try {
      const response = await axiosInstance.post(
        "/analytics/api/conversations/push-feed",
        null,
        {
          params: { ...params, filter: filter3 },
          paramsSerializer: (params2) => {
            const sp = new URLSearchParams();
            for (const key of Object.keys(params2)) {
              const typedKey = key;
              const value = params2[typedKey];
              if (value == null) {
                continue;
              }
              const arr = Array.isArray(value) ? value : [value];
              for (const v of arr) {
                sp.append(String(typedKey), String(v));
              }
            }
            return sp.toString();
          }
        }
      );
      this.taskIdMatches.set(response.data.taskId, {
        filter: filter3,
        loadingKey,
        persistConversations: params.fetch === "newer",
        queryKey,
        queueIds: normalizedQueueIds,
        tab
      });
      this.logger.debug("ConversationService - fetchFeed - taskId registered", {
        loadingKey,
        params,
        persistConversations: params.fetch === "newer",
        response: response.data,
        taskIdMatchesData: Array.from(this.taskIdMatches.entries())
      });
      return response.data;
    } catch (error) {
      this.logger.debug("ConversationService - fetchFeed error", error);
      this.feedLoadingStates.delete(loadingKey);
      this.eventsService.emitExternal(ExternalEvents.ConversationsFeedLoadingChanged, {
        filter: filter3,
        isLoading: false,
        queueIds: normalizedQueueIds,
        tab
      });
      this.eventsService.emitExternal(ExternalEvents.ConversationsFeedErrorChanged, {
        errorMessage: error instanceof Error ? error.message : "Failed to fetch conversations feed",
        filter: filter3,
        queueIds: normalizedQueueIds,
        tab
      });
      throw error;
    }
  }
  /**
   * Update workitems by conversation cached in QueryClient
   * @param conversationId - The conversation ID.
   * @param cursor - Epoch cursor, works as 'newest' bound, will fetch workitems created before this ().
   * @param endCursor - Epoch cursor, works as 'oldest' bound, will fetch workitems created after this.
   * @param includeCallRecordings - Whether to include call recordings.
   * @param includeConversation - Whether to include conversation details.
   * @param includeParentEngagement - Whether to include parent engagement details.
   * @param includeSummary - Whether to include summary details.
   * @param includeVoicemail - Whether to include voicemail details.
   * @param limit - The maximum number of items to fetch.
   */
  async feedWorkitemsByConversationId({
    conversationId,
    cursor,
    endCursor,
    includeCallRecordings,
    includeConversation = true,
    includeParentEngagement,
    includeSummary,
    includeVoicemail,
    limit = 25
  }) {
    this.workitemFeedLoadingStates.set(conversationId, true);
    this.logger.debug("ConversationService - Set workitem feed loading to true", {
      conversationId
    });
    this.eventsService.emitExternal(ExternalEvents.ConversationWorkitemsFeedLoadingChanged, {
      conversationId,
      isLoading: true
    });
    this.eventsService.emitExternal(ExternalEvents.ConversationWorkitemsFeedErrorChanged, {
      conversationId,
      errorMessage: null
    });
    try {
      const data = await this.fetchConversationById({
        conversationId,
        cursor,
        endCursor,
        includeCallRecordings,
        includeConversation,
        includeParentEngagement,
        includeSummary,
        includeVoicemail,
        limit,
        version: "v2"
      });
      const queryKey = getConversationWorkitemsQueryOptions({
        conversationId
      }).queryKey;
      const workitems = data.objects ?? [];
      if (workitems.length) {
        queryClient.setQueryData(queryKey, (currentData) => {
          this.logger.debug(
            "ConversationService - FeedPushNotification - currentData",
            currentData
          );
          const notificationWorkitemsMap = workitems.reduce((acc, item) => {
            if (!item.workitemId) {
              return acc;
            }
            acc.set(item.workitemId, item);
            return acc;
          }, /* @__PURE__ */ new Map());
          const newQueryDataMap = currentData?.workitems.reduce((acc, item) => {
            if (!item.workitemId) {
              return acc;
            }
            if (acc.has(item.workitemId)) {
              return acc;
            }
            acc.set(item.workitemId, item);
            return acc;
          }, notificationWorkitemsMap) ?? notificationWorkitemsMap;
          return {
            workitems: sortItems(Array.from(newQueryDataMap.values()))
          };
        });
      }
    } catch (error) {
      this.eventsService.emitExternal(ExternalEvents.ConversationWorkitemsFeedErrorChanged, {
        conversationId,
        errorMessage: error instanceof Error ? error.message : "Failed to fetch conversation workitems"
      });
      this.logger.debug("ConversationService - feedWorkitemsByConversationId error", error);
      throw error;
    } finally {
      this.workitemFeedLoadingStates.delete(conversationId);
      this.logger.debug("ConversationService - Cleared workitem feed loading state", {
        conversationId
      });
      this.eventsService.emitExternal(ExternalEvents.ConversationWorkitemsFeedLoadingChanged, {
        conversationId,
        isLoading: false
      });
    }
  }
  async fetchV2ConversationsWorkitems({
    bidirectional,
    contactId,
    conversationIds,
    cursor,
    endCursor,
    filter: filter3,
    includeCallRecordings,
    includeConversation,
    includeParentEngagement,
    includeReactions,
    includeSummary,
    includeVoicemail,
    lean,
    limit = 25,
    queueIds,
    workitemId
  }) {
    this.logger.debug("BaseConversationService - fetchConversationWorkitems invoked");
    const { data } = await axiosInstance.get(
      "/analytics/api/v2/conversations/workitems",
      {
        params: {
          bidirectional,
          contactId,
          conversationIds: conversationIds?.join(","),
          cursor,
          endCursor,
          filter: filter3?.join(","),
          includeCallRecordings,
          includeConversation,
          includeParentEngagement,
          includeReactions,
          includeSummary,
          includeVoicemail,
          lean,
          limit,
          queueIds: queueIds?.join(","),
          workitemId
        }
      }
    );
    if (data.objects) {
      const baseUrl = axiosInstance.defaults.baseURL;
      const token = this.stateService.getToken();
      const users = this.stateService.getUsers();
      data.objects = data.objects.map(
        (workitem) => fixWorkitem(workitem, { baseUrl, token, users })
      );
    }
    return data;
  }
  /**
   * Sends an outbound email. If `conversationId` is provided the email is sent as a reply or continuing the conversation.
   * Not sending a conversationId will create a new conversation with the email as the first message.
   * https://nextiva.atlassian.net/wiki/spaces/~jkida/pages/4660494379/Nexar+Outbound+Email+API
   * @param payload.from - The sending mailbox address.
   * @param payload.to - The recipient email address.
   * @param payload.subject - The email subject.
   * @param payload.message - The HTML body.
   * @param payload.emailResponse - Body-parts bag (TEXT + HTML parts required).
   * @param payload.fromAddressOption - Use `1`.
   * @param payload.conversationId - When present, replies within this conversation.
   * @param payload.queueId - Inbox queue for new outbound emails (ignored when conversationId is set).
   * @param payload.campaignId - Optional; derived from `from` if omitted.
   * @param payload.parentWorkitemIds - Workitem IDs to thread this email as a reply to.
   */
  async sendEmail({
    conversationId,
    ...rest
  }) {
    this.logger.debug("BaseConversationService - sendEmail - invoked with payload:", {
      conversationId,
      ...rest
    });
    const url = conversationId ? `/users/api/conversation/${conversationId}/email` : "/users/api/outbound/email";
    const { data } = await axiosInstance.post(url, rest);
    return data;
  }
  /**
   * Cleanup method - call this when destroying the service
   */
  destroy() {
    if (this.queryCacheUnsubscribe) {
      this.queryCacheUnsubscribe();
      this.queryCacheUnsubscribe = void 0;
    }
  }
};

// src/internal/services/chat.ts
import { AxiosHeaders as AxiosHeaders3 } from "axios";
var BaseChatService = class {
  stateService;
  logger;
  constructor({
    loggerService,
    stateService
  }) {
    loggerService.trace("BaseChatService - constructor");
    this.stateService = stateService;
    this.logger = loggerService;
  }
  /**
   * Sends a chat message.
   *
   * @param chatMessage - The chat message to send.
   * @returns A promise that resolves with the response from the server.
   * @deprecated Will be removed in a future version.
   */
  async send(chatMessage) {
    this.logger.debug("BaseChatService - send - invoked with payload:", chatMessage);
    const { data } = await axiosInstance.post(`/users/api/messages`, chatMessage);
    const userMessages = [...this.stateService.getUserMessages() ?? []];
    userMessages.push(data);
    this.stateService.setUserMessages(userMessages);
    return data;
  }
  /**
   * The `typing` function sends a typing indicator message from a workitem to a specified recipient
   * using Axios in TypeScript.
   * @param {string} userId - The `userId` parameter is a string that represents the ID of the
   * user associated with the typing action.
   * @param {string} toId - The `toId` parameter in the `typing` function represents the ID of the
   * recipient to whom the typing indicator message will be sent.
   * @returns The `typing` function is returning the result of the `axiosInstance.post` call, which is a
   * Promise. This Promise will resolve with the response data from the POST request to the specified
   * endpoint `/chats/api/agent/chats/{toId}/typing`.
   */
  async typing(userId, toId) {
    this.logger.debug(
      `BaseChatService - typing - user [${userId}] is typing a message for user [${toId}]`
    );
    const message = {
      fromId: userId,
      toId,
      type: CHAT_MSG_SOURCE.USER,
      userId
    };
    return await axiosInstance.post(`/chats/api/agent/chats/${toId}/typing`, message);
  }
  /**
   * Send a message in a live chat.
   * @param {BaseChatSendMessagePayload} params - Message payload
   * @param {File | null} params.files - Files attached
   * @param {string} params.fromId - Sender ID
   * @param {boolean | null} params.priority - Priority should be enabled
   * @param {string} params.textMsg - Message to be sent
   * @param {string} params.toId - Addressee ID
   * @param {ChatMessageSource} params.type - The type of the message's source
   */
  async sendMessage(payload) {
    const { files, fromId, priority, textMsg, toId, type } = payload;
    this.logger.debug("BaseChatService - sendMessage - invoked with payload:", payload);
    const headers = new AxiosHeaders3();
    const message = {
      fromId,
      priority: priority ?? false,
      textMsg,
      toId,
      type
    };
    const url = `/chats/api/agent/chats/${message.toId}/messages`;
    let requestBody;
    if (files) {
      headers.setContentType("multipart/form-data");
      requestBody = new FormData();
      for (const file of files) {
        requestBody.append("file", file);
      }
      requestBody.append("object", JSON.stringify(message));
    } else {
      requestBody = message;
    }
    const { data } = await axiosInstance.post(url, requestBody, {
      headers
    });
    return data;
  }
  /**
   * Mark a message as viewed by the requesting user. Adds an entry to viewedBy array with the current user's ID and timestamp.
   * @param viewedPayload
   * @param viewedPayload.messageId - ID that identifies the message to mark as viewed.
   * @param viewedPayload.toId - Workitem ID that the message belongs to.
   * @returns
   */
  async viewed(viewedPayload) {
    this.logger.debug("ChatService - viewed - invoked with payload", viewedPayload);
    return await axiosInstance.post(
      `/chats/api/agent/chats/${viewedPayload.toId}/messages/${viewedPayload.messageId}`
    );
  }
};

// src/internal/services/copilot.ts
var BaseCopilotService = class {
  queryCacheUnsubscribe;
  stateService;
  eventsService;
  logger;
  sessionsLoading = false;
  sessionLoadingStates = /* @__PURE__ */ new Map();
  // Track active streams by messageId
  activeStreams = /* @__PURE__ */ new Map();
  constructor({
    eventsService,
    loggerService,
    stateService
  }) {
    loggerService.trace("BaseCopilotService - constructor");
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.logger = loggerService;
    this.handleSessionCreatedNotification();
    this.handleSessionUpdatedNotification();
    this.handleSessionDeletedNotification();
    this.handleStreamStartNotification();
    this.handleStreamChunkNotification();
    this.handleStreamDoneNotification();
    this.handleStreamErrorNotification();
    this.subscribeToQueryCacheChanges();
  }
  // ============================================
  // Public API Methods
  // ============================================
  async fetchSessions(params = {}) {
    const { before, limit = 20 } = params;
    const isInitialLoad = !before;
    this.logger.info("BaseCopilotService - fetchSessions", { before, isInitialLoad, limit });
    this.setSessionsLoading(true);
    try {
      const response = await axiosInstance.get(
        "/cxfabric/api/copilot/sessions",
        { params: { before, limit } }
      );
      const { pagination, sessions, totalCount } = response.data;
      this.updateSessionsCache(sessions, isInitialLoad ? "replace" : "append", pagination, totalCount);
      this.logger.info("BaseCopilotService - fetchSessions success", {
        hasMore: pagination.hasMore,
        nextCursor: pagination.nextCursor,
        sessionCount: sessions.length,
        totalCount
      });
      return response.data;
    } catch (error) {
      this.logger.error("BaseCopilotService - fetchSessions error", error);
      throw error;
    } finally {
      this.setSessionsLoading(false);
    }
  }
  async fetchSession(params) {
    const { sessionId } = params;
    this.logger.info("BaseCopilotService - fetchSession", { sessionId });
    try {
      const response = await axiosInstance.get(
        `/cxfabric/api/copilot/sessions/${sessionId}`
      );
      const session = response.data;
      this.updateSessionTitleInCache(sessionId, session.title);
      this.logger.info("BaseCopilotService - fetchSession success", {
        messageCount: session.messageCount,
        sessionId,
        title: session.title
      });
      return response.data;
    } catch (error) {
      this.logger.error("BaseCopilotService - fetchSession error", error);
      throw error;
    }
  }
  async fetchSessionMessages(params) {
    const { before, limit = 50, sessionId } = params;
    const isInitialLoad = !before;
    this.logger.info("BaseCopilotService - fetchSessionMessages", { before, isInitialLoad, limit, sessionId });
    this.setSessionLoading(sessionId, true);
    try {
      const response = await axiosInstance.get(
        `/cxfabric/api/copilot/sessions/${sessionId}/messages`,
        { params: { before, limit } }
      );
      const { messages, pagination } = response.data;
      this.updateSessionMessagesCache(sessionId, messages, isInitialLoad ? "replace" : "prepend", pagination);
      this.logger.info("BaseCopilotService - fetchSessionMessages success", {
        hasMore: pagination.hasMore,
        messageCount: messages.length,
        nextCursor: pagination.nextCursor,
        sessionId
      });
      return response.data;
    } catch (error) {
      this.logger.error("BaseCopilotService - fetchSessionMessages error", error);
      throw error;
    } finally {
      this.setSessionLoading(sessionId, false);
    }
  }
  async createSession(params = {}) {
    this.logger.info("BaseCopilotService - createSession", params);
    try {
      const response = await axiosInstance.post(
        "/cxfabric/api/copilot/sessions",
        params
      );
      this.logger.info("BaseCopilotService - createSession success", response.data);
      return response.data;
    } catch (error) {
      this.logger.error("BaseCopilotService - createSession error", error);
      throw error;
    }
  }
  async renameSession(params) {
    const { sessionId, title } = params;
    this.logger.info("BaseCopilotService - renameSession", { sessionId, title });
    try {
      const response = await axiosInstance.patch(
        `/cxfabric/api/copilot/sessions/${sessionId}`,
        { title }
      );
      this.logger.info("BaseCopilotService - renameSession success", response.data);
      return response.data;
    } catch (error) {
      this.logger.error("BaseCopilotService - renameSession error", error);
      throw error;
    }
  }
  async deleteSession(sessionId) {
    this.logger.info("BaseCopilotService - deleteSession", { sessionId });
    try {
      await axiosInstance.delete(`/cxfabric/api/copilot/sessions/${sessionId}`);
      this.logger.info("BaseCopilotService - deleteSession success", { sessionId });
    } catch (error) {
      this.logger.error("BaseCopilotService - deleteSession error", error);
      throw error;
    }
  }
  async sendMessage(params) {
    const { message, mode = "AUTO", sessionId } = params;
    this.logger.info("BaseCopilotService - sendMessage", { messageLength: message.length, mode, sessionId });
    try {
      const response = await axiosInstance.post(
        "/cxfabric/api/copilot/chat",
        { message, mode, sessionId }
      );
      const { messageId, sessionId: responseSessionId } = response.data;
      const userMessage = {
        content: message,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        messageId,
        role: "user"
      };
      this.addMessageToSessionCache(responseSessionId, userMessage);
      this.logger.info("BaseCopilotService - sendMessage success", { messageId, sessionId: responseSessionId });
      return response.data;
    } catch (error) {
      this.logger.error("BaseCopilotService - sendMessage error", error);
      throw error;
    }
  }
  // ============================================
  // Loading State
  // ============================================
  isSessionsLoading() {
    return this.sessionsLoading;
  }
  isSessionLoading(sessionId) {
    return this.sessionLoadingStates.get(sessionId) ?? false;
  }
  setSessionsLoading(isLoading) {
    this.sessionsLoading = isLoading;
    this.eventsService.emitExternal(ExternalEvents.CopilotSessionsLoadingChanged, {
      isLoading
    });
  }
  setSessionLoading(sessionId, isLoading) {
    this.sessionLoadingStates.set(sessionId, isLoading);
    this.eventsService.emitExternal(ExternalEvents.CopilotSessionLoadingChanged, {
      isLoading,
      sessionId
    });
  }
  // ============================================
  // Cache Management - Sessions List
  // ============================================
  updateSessionsCache(sessions, mode, pagination, totalCount) {
    const queryKey = ["copilot", "sessions"];
    queryClient.setQueryData(queryKey, (old) => {
      let mergedSessions;
      if (mode === "replace" || !old) {
        mergedSessions = sessions;
      } else {
        const existingIds = new Set(old.sessions.map((s) => s.sessionId));
        const newSessions = sessions.filter((s) => !existingIds.has(s.sessionId));
        mergedSessions = [...old.sessions, ...newSessions];
      }
      mergedSessions.sort(
        (a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
      );
      return {
        hasMore: pagination.hasMore,
        nextCursor: pagination.nextCursor,
        sessions: mergedSessions,
        totalCount
      };
    });
  }
  addSessionToCache(session) {
    const queryKey = ["copilot", "sessions"];
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) {
        return {
          hasMore: false,
          nextCursor: null,
          sessions: [session],
          totalCount: 1
        };
      }
      if (old.sessions.some((s) => s.sessionId === session.sessionId)) {
        return old;
      }
      const newSessions = [session, ...old.sessions].sort(
        (a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
      );
      return {
        ...old,
        sessions: newSessions,
        totalCount: old.totalCount + 1
      };
    });
  }
  updateSessionInCache(sessionData) {
    const queryKey = ["copilot", "sessions"];
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      const updatedSessions = old.sessions.map(
        (s) => s.sessionId === sessionData.sessionId ? { ...s, ...sessionData } : s
      );
      updatedSessions.sort(
        (a, b) => new Date(b.lastActivity).getTime() - new Date(a.lastActivity).getTime()
      );
      return {
        ...old,
        sessions: updatedSessions
      };
    });
  }
  removeSessionFromCache(sessionId) {
    const queryKey = ["copilot", "sessions"];
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      const sessionExists = old.sessions.some((s) => s.sessionId === sessionId);
      return {
        ...old,
        sessions: old.sessions.filter((s) => s.sessionId !== sessionId),
        totalCount: sessionExists ? old.totalCount - 1 : old.totalCount
      };
    });
    queryClient.removeQueries({ queryKey: ["copilot", "session", sessionId] });
  }
  // ============================================
  // Cache Management - Session Messages
  // ============================================
  updateSessionTitleInCache(sessionId, title) {
    const queryKey = ["copilot", "session", sessionId];
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) return old;
      return { ...old, title };
    });
  }
  updateSessionMessagesCache(sessionId, messages, mode, pagination) {
    const queryKey = ["copilot", "session", sessionId];
    queryClient.setQueryData(queryKey, (old) => {
      let mergedMessages;
      if (mode === "replace" || !old) {
        mergedMessages = messages;
      } else {
        const existingIds = new Set(old.messages.map((m) => m.messageId));
        const newMessages = messages.filter((m) => !existingIds.has(m.messageId));
        mergedMessages = [...newMessages, ...old.messages];
      }
      mergedMessages.sort(
        (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
      return {
        hasMore: pagination.hasMore,
        messages: mergedMessages,
        nextCursor: pagination.nextCursor,
        sessionId,
        title: old?.title ?? ""
      };
    });
  }
  addMessageToSessionCache(sessionId, message) {
    const queryKey = ["copilot", "session", sessionId];
    queryClient.setQueryData(queryKey, (old) => {
      if (!old) {
        return {
          hasMore: false,
          messages: [message],
          nextCursor: null,
          sessionId,
          title: ""
        };
      }
      if (old.messages.some((m) => m.messageId === message.messageId)) {
        return old;
      }
      const newMessages = [...old.messages, message];
      return {
        ...old,
        messages: newMessages
      };
    });
  }
  // ============================================
  // Query Cache Subscription
  // ============================================
  subscribeToQueryCacheChanges() {
    const queryCache = queryClient.getQueryCache();
    this.queryCacheUnsubscribe = queryCache.subscribe((event) => {
      if (event.type !== "updated") {
        return;
      }
      const query = event.query;
      const queryKey = query.queryKey;
      if (Array.isArray(queryKey) && queryKey[0] === "copilot" && queryKey[1] === "sessions") {
        this.eventsService.emitExternal(ExternalEvents.CopilotSessionsQueryUpdated, {
          queryKey
        });
      }
      if (Array.isArray(queryKey) && queryKey[0] === "copilot" && queryKey[1] === "session" && typeof queryKey[2] === "string") {
        this.eventsService.emitExternal(ExternalEvents.CopilotSessionQueryUpdated, {
          queryKey,
          sessionId: queryKey[2]
        });
      }
    });
  }
  // ============================================
  // WebSocket Event Handlers - Session Lifecycle
  // ============================================
  handleSessionCreatedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotSessionCreatedNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseCopilotService - SessionCreated", data);
      const session = {
        createdAt: data.createdAt,
        lastActivity: data.createdAt,
        lastMessagePreview: data.lastMessagePreview,
        messageCount: 0,
        sessionId: data.sessionId,
        title: data.title,
        userId: data.userId
      };
      this.addSessionToCache(session);
      this.eventsService.emitExternal(
        ExternalEvents.CopilotSessionCreatedNotification,
        data
      );
    });
  }
  handleSessionUpdatedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotSessionUpdatedNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseCopilotService - SessionUpdated", data);
      this.updateSessionInCache({
        lastActivity: data.lastActivity,
        lastMessagePreview: data.lastMessagePreview,
        messageCount: data.messageCount,
        sessionId: data.sessionId,
        title: data.title
      });
      const sessionQueryKey = ["copilot", "session", data.sessionId];
      queryClient.setQueryData(sessionQueryKey, (old) => {
        if (!old) return old;
        return { ...old, title: data.title };
      });
      this.eventsService.emitExternal(
        ExternalEvents.CopilotSessionUpdatedNotification,
        data
      );
    });
  }
  handleSessionDeletedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotSessionDeletedNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseCopilotService - SessionDeleted", data);
      this.removeSessionFromCache(data.sessionId);
      this.eventsService.emitExternal(
        ExternalEvents.CopilotSessionDeletedNotification,
        data
      );
    });
  }
  // ============================================
  // WebSocket Event Handlers - Stream
  // ============================================
  handleStreamStartNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotStreamStartNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseCopilotService - StreamStart", data);
      this.activeStreams.set(data.messageId, {
        chunks: /* @__PURE__ */ new Map(),
        messageId: data.messageId,
        sessionId: data.sessionId,
        startedAt: Date.now()
      });
      this.eventsService.emitExternal(
        ExternalEvents.CopilotStreamStartNotification,
        data
      );
    });
  }
  handleStreamChunkNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotStreamChunkNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.trace("BaseCopilotService - StreamChunk", {
        sequence: data.sequence,
        sessionId: data.sessionId,
        textLength: data.text.length
      });
      const activeStream = this.activeStreams.get(data.messageId);
      if (activeStream) {
        activeStream.chunks.set(data.sequence, data.text);
      }
      this.eventsService.emitExternal(
        ExternalEvents.CopilotStreamChunkNotification,
        data
      );
    });
  }
  handleStreamDoneNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotStreamDoneNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.debug("BaseCopilotService - StreamDone", data);
      const activeStream = this.activeStreams.get(data.messageId);
      if (activeStream) {
        const content = this.buildContentFromChunks(activeStream.chunks);
        const assistantMessage = {
          content,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messageId: data.messageId,
          role: "assistant"
        };
        this.addMessageToSessionCache(activeStream.sessionId, assistantMessage);
        this.logger.debug("BaseCopilotService - Added streamed message to cache", {
          contentLength: content.length,
          messageId: data.messageId,
          sessionId: activeStream.sessionId
        });
        this.activeStreams.delete(data.messageId);
      }
      this.eventsService.emitExternal(
        ExternalEvents.CopilotStreamDoneNotification,
        data
      );
    });
  }
  handleStreamErrorNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CopilotStreamErrorNotification)).subscribe((event) => {
      const data = event.data;
      this.logger.error("BaseCopilotService - StreamError", data);
      this.activeStreams.delete(data.messageId);
      this.eventsService.emitExternal(
        ExternalEvents.CopilotStreamErrorNotification,
        data
      );
    });
  }
  // ============================================
  // Stream Helpers
  // ============================================
  buildContentFromChunks(chunks) {
    if (chunks.size === 0) return "";
    const sequences = Array.from(chunks.keys()).sort((a, b) => a - b);
    return sequences.map((seq) => chunks.get(seq) ?? "").join("");
  }
  // ============================================
  // Cleanup
  // ============================================
  destroy() {
    if (this.queryCacheUnsubscribe) {
      this.queryCacheUnsubscribe();
      this.queryCacheUnsubscribe = void 0;
    }
    this.sessionLoadingStates.clear();
    this.activeStreams.clear();
    this.logger.trace("BaseCopilotService - destroyed");
  }
};

// src/internal/services/datadog.ts
var BaseDatadogService = class {
};

// src/internal/services/telephonyEvents.ts
import { Subject as Subject2 } from "rxjs";
var BaseTelephonyEventsService = class {
  _subject = new Subject2();
  events$ = this._subject.asObservable();
};

// src/internal/services/workitem.ts
import { filter as filter2, switchMap } from "rxjs";

// src/types/workitem.ts
var isBuildWorkitemSignedURLPayload = (payload) => {
  return payload.type === "workitem";
};
var isBuildEmailSignedURLPayload = (payload) => {
  return payload.type === "email";
};
var isBuildTwitterSignedURLPayload = (payload) => {
  return payload.type === "twitter";
};
var isBuildVoicemailSignedURLPayload = (payload) => {
  return payload.type === "voicemail";
};
var isBuildRecordingSignedURLPayload = (payload) => {
  return payload.type === "recording";
};

// src/utilities/workitem.ts
function validateSMSWorkitemType(workitemType) {
  return workitemType === WorkitemTypes.InboundSMS || workitemType === WorkitemTypes.OutboundSMS || workitemType === WorkitemTypes.PredictiveSMS;
}
function validateCallWorkitemType(workitemType) {
  return workitemType === WorkitemTypes.InboundCall || workitemType === WorkitemTypes.OutboundCall || workitemType === WorkitemTypes.InboundExtensionCall || workitemType === WorkitemTypes.OutboundExtensionCall || workitemType === WorkitemTypes.PredictiveCall || workitemType === WorkitemTypes.ProgressiveCall || workitemType === WorkitemTypes.SystemCall;
}
var buildSignedURL = ({ baseUrl, fileName, messageId, token }) => {
  if (token === void 0) {
    throw new Error("Token is required to build signed URL");
  }
  return `${baseUrl}/data/api/messages/${messageId}/signedurl?filename=${encodeURIComponent(
    fileName
  )}&token=${token}`;
};
var buildSignedAttachmentURL = ({
  baseURL,
  fileName,
  token,
  workitemId
}) => {
  if (token === void 0) {
    throw new Error("Token is required to build signed URL");
  }
  return `${baseURL}/data/api/workitem/${workitemId}/signedurl?filename=${encodeURIComponent(
    fileName
  )}&token=${token}`;
};
var isMissingSignedURL = (message) => {
  return Boolean(message.filename && !message.signedURL);
};
var isMissingState = (message) => {
  const viewedBy = message.viewedBy?.[message.viewedBy.length - 1];
  const length = message.viewedBy?.length;
  return length !== void 0 && length > 0 && message.state !== viewedBy?.status;
};
var isMissingFrom = (message) => {
  return !message.from;
};
var getName = ({ firstName, lastName, name, pseudonym, username }) => {
  if (pseudonym) {
    return pseudonym;
  }
  if (name) {
    return name;
  }
  if (firstName || lastName) {
    return [firstName, lastName].filter((name2) => name2).join(" ");
  }
  return username;
};
var resolveWorkitemOwner = (workitem, users) => {
  const { agentUsername, ownedBy, ownedById } = workitem;
  const isAgentOwned = ownedBy === "agent" || !ownedBy && Boolean(ownedById || agentUsername);
  if (!isAgentOwned || !ownedById && !agentUsername) {
    return void 0;
  }
  const user = users?.find(
    ({ userId, username }) => Boolean(ownedById) && userId === ownedById || Boolean(agentUsername) && username === agentUsername
  );
  return {
    displayName: user ? getName(user) : void 0,
    id: ownedById,
    username: agentUsername
  };
};
var fixMessage = (message, options) => {
  const responseMessage = { ...message };
  if (isMissingSignedURL(message)) {
    responseMessage.signedURL = buildSignedURL({
      ...options,
      fileName: responseMessage.filename,
      messageId: responseMessage.id
    });
  }
  const viewedBy = responseMessage.viewedBy?.[responseMessage.viewedBy.length - 1];
  if (isMissingState(responseMessage) && viewedBy) {
    responseMessage.state = viewedBy.status;
  }
  const user = options.users?.find(({ userId }) => userId === responseMessage.fromId);
  if (isMissingFrom(responseMessage) && user) {
    responseMessage.from = getName(user);
  }
  return responseMessage;
};
var fixMessages = (messages, options) => {
  const hasToBeFixed = messages.some(
    (message) => isMissingSignedURL(message) || isMissingState(message) || isMissingFrom(message)
  );
  if (hasToBeFixed) {
    return messages.map((message) => {
      return fixMessage(message, options);
    });
  }
  return messages;
};
var fixAttachment = (attachment, { baseURL, token, workitemId }) => {
  return {
    ...attachment,
    signedURL: buildSignedAttachmentURL({
      baseURL,
      fileName: attachment.title,
      token,
      workitemId
    })
  };
};
var fixEngagementDataItem = (engagementData, options) => {
  if (!engagementData.attachments) {
    return engagementData;
  }
  return {
    ...engagementData,
    attachments: engagementData.attachments.map((attachment) => fixAttachment(attachment, options))
  };
};
var fixEngagementData = (engagementData, options) => {
  return engagementData.map((item) => {
    return fixEngagementDataItem(item, options);
  });
};
var fixWorkitem = (workitem, options) => {
  const newWorkitem = { ...workitem };
  newWorkitem.owner = resolveWorkitemOwner(workitem, options.users);
  if (workitem.smsMessages && workitem.smsMessages.length > 0) {
    newWorkitem.smsMessages = fixMessages(workitem.smsMessages, options);
  } else if (workitem.chatMessages && workitem.chatMessages.length > 0) {
    newWorkitem.chatMessages = fixMessages(workitem.chatMessages, options);
  }
  if (newWorkitem.engagementData) {
    newWorkitem.engagementData = fixEngagementData(newWorkitem.engagementData, {
      baseURL: options.baseUrl,
      token: options.token,
      workitemId: workitem.workitemId
    });
  }
  if (newWorkitem.currentEngagementData?.attachments) {
    newWorkitem.currentEngagementData.attachments = newWorkitem.currentEngagementData.attachments.map(
      (attachment) => fixAttachment(attachment, {
        baseURL: options.baseUrl,
        token: options.token,
        workitemId: workitem.workitemId
      })
    );
  }
  if (newWorkitem.conversationMessage) {
    newWorkitem.conversationMessage = fixMessage(newWorkitem.conversationMessage, options);
  }
  if (newWorkitem.currentChatMessage) {
    newWorkitem.currentChatMessage = fixMessage(newWorkitem.currentChatMessage, options);
  }
  if (newWorkitem.currentSMSMessage?.attachments) {
    newWorkitem.currentSMSMessage.attachments = fixAttachment(
      newWorkitem.currentSMSMessage.attachments,
      {
        baseURL: options.baseUrl,
        token: options.token,
        workitemId: workitem.workitemId
      }
    );
  }
  return newWorkitem;
};
var DefaultMergeProperties = {
  Default: ["workitemId", "type", "createdAt", "ownedBy", "to", "from", "type"],
  InboundCall: [
    "workitemId",
    "type",
    "createdAt",
    "ownedBy",
    "to",
    "from",
    "type",
    "voicemailFile"
  ],
  InboundSMS: ["workitemId", "type", "createdAt", "ownedBy", "to", "from", "type"],
  OutboundSMS: ["workitemId", "type", "createdAt", "ownedBy", "to", "from", "type"]
};

// src/internal/services/workitem.ts
var BaseWorkitemsService = class {
  workitems = [];
  getWorkitemFn;
  eventsService;
  stateService;
  datadogService;
  schemaTypeClient;
  workitemCache;
  logger;
  constructor({
    datadogService,
    eventsService,
    loggerService,
    schemaTypeClient,
    stateService,
    workitemCache
  }) {
    this.logger = loggerService;
    loggerService.trace("BaseWorkitemsService - constructor");
    this.schemaTypeClient = schemaTypeClient;
    this.stateService = stateService;
    this.eventsService = eventsService;
    this.datadogService = datadogService;
    this.workitemCache = workitemCache;
    this.handleWorkitemStateChangeNotification();
    this.handleWorkitemRemovedNotification();
    this.handleWorkitemDeletedNotification();
    this.handleWorkitemTerminatedNotification();
    this.handleWorkitemDirectConnectNotification();
    this.handleMessageNotification();
    this.handleMessageStatusNotification();
    this.handleLiveTranscriptionNotification();
    this.handleUpdateTicketNotification();
    this.handleWorkitemConversationMessageNotification();
    this.handleConferenceStateNotification();
    this.handleWorkitemPredictiveNotification();
    this.handleWorkitemProgressiveNotification();
    this.handleWorkitemTransferNotification();
    this.handleExtensionWorkitemNotification();
    this.handleMonitorWorkitemNotification();
    this.handleWorkitemSummaryNotification();
    this.handleEngagementDataStatusUpdateNotification();
    this.handleWorkitemFailedNotification();
    this.handleCallExternalTransferNotification();
    this.handleAISummaryNotification();
    this.handleSupervisorNotification();
    this.handleBackfillWorkitemsNotification();
    this.handleWorkitemsAISummaryNotification();
    this.handleMessageTypingNotification();
    this.handleInformationNotification();
    this.handleWorkitemReadNotification();
    this.handleWorkitemVoicemailNotification();
  }
  setGetWorkitemFn(fn) {
    this.getWorkitemFn = fn;
  }
  handleConferenceStateNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ConferenceStateNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleConferenceStateNotification", event);
      this.stateService.setInConference(event.data.inconference);
      this.eventsService.emitExternal(ExternalEvents.ConferenceStateNotification, event.data);
    });
  }
  handleUpdateTicketNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.UpdateTicketNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleUpdateTicketNotification", event);
      const updateTicketNotification = event.getProperties();
      try {
        const workitem2 = this.getWorkitem(updateTicketNotification.workitemId);
        if (workitem2) {
          const newWorkitem = {
            ...workitem2,
            ...updateTicketNotification.ticket ? {
              ticket: {
                ...updateTicketNotification.ticket
              },
              ticketId: updateTicketNotification.ticket.ticketId
            } : null
          };
          this.upsertWorkItem(newWorkitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        }
      } catch (error) {
        Logger.error(error);
      }
      if (workitem) {
        const newWorkitem = {
          ...workitem,
          ...updateTicketNotification.ticket ? {
            ticket: {
              ...updateTicketNotification.ticket
            },
            ticketId: updateTicketNotification.ticket.ticketId
          } : null
        };
        this.eventsService.emitExternal(ExternalEvents.UpdateTicketNotification, {
          workitem: this.workitemCache.applyWorkitemLocalOverwrite(newWorkitem),
          workitemId: updateTicketNotification.workitemId
        });
      }
    });
  }
  handleEngagementDataStatusUpdateNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.EngagementDataStatusUpdateNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug(
        "BaseWorkitemsService - handleEngagementDataStatusUpdateNotification",
        event
      );
      const engagementDataStatusUpdateNotification = event.getProperties();
      try {
        this.eventsService.emitExternal(
          ExternalEvents.EngagementDataStatusUpdateNotification,
          engagementDataStatusUpdateNotification
        );
        if (workitem) {
          const engagementDataCopy = [...workitem.engagementData ?? []];
          const engagementDataIndex = engagementDataCopy.findIndex(
            (data) => data.id.includes(engagementDataStatusUpdateNotification.engagementDataUid)
          );
          if (engagementDataIndex >= 0 && engagementDataCopy[engagementDataIndex]) {
            engagementDataCopy[engagementDataIndex].messageStatus = [
              ...engagementDataStatusUpdateNotification.engagementDataPayloadList
            ];
            this.workitemCache.upsertWorkitem({
              ...workitem,
              engagementData: engagementDataCopy
            });
            this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
              workitem: this.workitemCache.applyWorkitemLocalOverwrite({
                ...workitem,
                engagementData: engagementDataCopy
              }),
              workitemId: workitem.workitemId
            });
          }
        }
      } catch (error) {
        Logger.error(error);
      }
    });
  }
  /**
   * The function `handleWorkitemStateChangeNotification` listens for internal
   * events related to work item state changes, processes the notification, and
   * emits an external event with updated work item information.
   */
  handleWorkitemStateChangeNotification() {
    this.eventsService.internalEvents$.pipe(
      ofType(InternalEvents.WorkitemStateChangeNotification),
      filter2((event) => {
        return !event.data.workitem?.dispositionedAt || event.data.workitem.state === WorkitemStates.Voicemail;
      }),
      this.workitemSwitchMap
    ).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemStateChangeNotification", event);
      this.datadogService?.addAction("WorkitemStateChangeNotification", event.data);
      if (workitem) {
        event.data.workitem = fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
        try {
          this.upsertWorkItem(event.data.workitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        } catch (error) {
          Logger.error(error);
        }
        this.workitemCache.upsertWorkitem(workitem);
        event.data.workitem = this.workitemCache.applyWorkitemLocalOverwrite(event.data.workitem);
      }
      this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, event.data);
    });
  }
  handleWorkitemVoicemailNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemVoicemailNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemVoicemailNotification", event);
      this.eventsService.emitExternal(ExternalEvents.WorkitemVoicemailNotification, event.data);
    });
  }
  /**
   * The function `handleWorkItemMessageNotification` handles subscription to PersonalInbox Messages Type.
   * It is being added separately to avoid disrupting work on MessageNotification type
   */
  handleWorkitemConversationMessageNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemConversationMessageNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug(
        "BaseWorkitemsService - handleWorkitemConversationMessageNotification",
        event
      );
      if (workitem) {
        const fixedWorkItem = fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
        try {
          this.eventsService.emitExternal(
            ExternalEvents.WorkitemConversationMessageNotification,
            {
              workitem: this.workitemCache.applyWorkitemLocalOverwrite(fixedWorkItem),
              workitemId: fixedWorkItem.workitemId
            }
          );
        } catch (error) {
          Logger.error(error);
        }
      }
    });
  }
  /**
   * The function `handleWorkitemDirectConnectNotification` subscribes to internal
   * events for a specific type and performs various operations on workitems.
   */
  handleWorkitemDirectConnectNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemDirectConnectNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemDirectConnectNotification", event);
      const { workitemId } = event.getProperties();
      if (workitem) {
        try {
          this.upsertWorkItem(workitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        } catch (error) {
          Logger.error(error);
        }
        this.workitemCache.upsertWorkitem(workitem);
      }
      this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
        workitem,
        workitemId
      });
    });
  }
  /**
   * The function `handleWorkitemRemovedNotification` listens for a specific
   * internal event related to work item removal, processes the event data, removes
   * the corresponding work item, and emits an external event notifying of the
   * change in work items.
   */
  handleWorkitemRemovedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemRemovedNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemRemovedNotification", event);
      this.datadogService?.addAction("WorkitemRemovedNotification", event.data);
      const workitemRemovedNotification = event.getProperties();
      this.removeWorkitem(workitemRemovedNotification.workitemId);
      this.workitemCache.deleteWorkitem(workitemRemovedNotification.workitemId);
      this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
        workitems: this.getWorkitems()
      });
      this.eventsService.emitExternal(ExternalEvents.WorkitemRemovedNotification, {
        conversationId: workitemRemovedNotification.conversationId,
        conversationIds: workitemRemovedNotification.conversationIds,
        workitemId: workitemRemovedNotification.workitemId
      });
    });
  }
  /**
   * The function `handleWorkitemDeletedNotification` listens for a specific
   * internal event related to draft work item delete, processes the event data, removes
   * the corresponding work item, and emits an external event notifying of the
   * change in work items.
   */
  handleWorkitemDeletedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemDeletedNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemDeletedNotification", event);
      this.datadogService?.addAction("WorkitemDeletedNotification", event.data);
      const workitemDeletedNotification = event.getProperties();
      this.removeWorkitem(workitemDeletedNotification.workitemId);
      this.workitemCache.deleteWorkitem(workitemDeletedNotification.workitemId);
      this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
        workitems: this.getWorkitems()
      });
      this.eventsService.emitExternal(
        ExternalEvents.WorkitemDeletedNotification,
        workitemDeletedNotification
      );
    });
  }
  /**
   * The function `handleWorkitemTerminatedNotification` listens for a specific
   * event and updates the workitem accordingly.
   */
  handleWorkitemTerminatedNotification() {
    this.eventsService.internalEvents$.pipe(ofType("WorkitemTerminatedNotification"), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemTerminatedNotification", event);
      this.workitemCache.clearTerminationTimeout(event.data.workitemId);
      this.workitemCache.clearWorkitemOverwrite(event.data.workitemId);
      this.datadogService?.addAction("WorkitemTerminatedNotification", event.data);
      const workitemTerminatedNotification = event.getProperties();
      if (workitemTerminatedNotification.workitem) {
        try {
          this.upsertWorkItem({
            ...workitemTerminatedNotification.workitem,
            state: WorkitemStates.Terminated
          });
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        } catch (error) {
          Logger.error(error);
        }
        this.workitemCache.upsertWorkitem({
          ...workitemTerminatedNotification.workitem,
          state: WorkitemStates.Terminated
        });
        this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
          ...event.getProperties(),
          workitem: {
            ...workitemTerminatedNotification.workitem,
            state: WorkitemStates.Terminated
          }
        });
        this.eventsService.emitExternal(ExternalEvents.WorkitemTerminatedNotification, {
          ...event.getProperties(),
          workitem: workitemTerminatedNotification.workitem
        });
        if (workitemTerminatedNotification.workitem.transcriptionMessages?.length) {
          this.eventsService.emitExternal(ExternalEvents.LiveTranscriptionCompletedNotification, {
            workitem: workitemTerminatedNotification.workitem,
            workitemId: workitemTerminatedNotification.workitemId
          });
        }
      } else {
        const terminatedWorkitem = this.getWorkitems().find(
          (model) => model.workitemId === workitemTerminatedNotification.workitemId
        );
        if (terminatedWorkitem) {
          const newWorkitem = {
            ...terminatedWorkitem,
            state: WorkitemStates.Terminated
          };
          try {
            this.upsertWorkItem(newWorkitem);
            this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
              workitems: this.getWorkitems()
            });
            if (newWorkitem.transcriptionMessages?.length) {
              this.eventsService.emitExternal(
                ExternalEvents.LiveTranscriptionCompletedNotification,
                {
                  workitem: newWorkitem,
                  workitemId: workitemTerminatedNotification.workitemId
                }
              );
            }
          } catch (error) {
            Logger.error(error);
          }
        }
        if (workitem) {
          const newWorkitem = {
            ...workitem,
            state: WorkitemStates.Terminated
          };
          this.workitemCache.upsertWorkitem(workitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
            workitem: newWorkitem,
            workitemId: workitemTerminatedNotification.workitemId
          });
          if (newWorkitem.transcriptionMessages?.length) {
            this.eventsService.emitExternal(
              ExternalEvents.LiveTranscriptionCompletedNotification,
              {
                workitem: newWorkitem,
                workitemId: workitemTerminatedNotification.workitemId
              }
            );
          }
        }
      }
    });
  }
  /**
   * The function `handleCallExternalTransferNotification` listens for internal
   * events related to work item calls transferred to an external number, processes
   * the notification, and emits an external event with updated work item information.
   */
  handleCallExternalTransferNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.CallExternalTransferNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleCallExternalTransferNotification", event);
      this.datadogService?.addAction("CallExternalTransferNotification", event.data);
      const callExternalTransferNotification = event.getProperties();
      if (workitem) {
        const newWorkitem = {
          ...workitem,
          state: WorkitemStates.Terminated,
          terminatedAt: Date.now()
        };
        this.workitemCache.upsertWorkitem(newWorkitem);
        try {
          this.upsertWorkItem(newWorkitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
          this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
            workitem: newWorkitem,
            workitemId: callExternalTransferNotification.workitemId
          });
        } catch (error) {
          Logger.error(error);
        }
      }
    });
  }
  handleLiveTranscriptionNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.LiveTranscriptionNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleLiveTranscriptionNotification", event);
      const liveTranscriptionNotification = event.getProperties();
      const upsertTranscriptionMessages = (workitem2) => {
        const transcriptionMessages = [...workitem2.transcriptionMessages ?? []];
        const newMessage = {
          fileContentSize: liveTranscriptionNotification.message.fileContentSize,
          fileContentType: liveTranscriptionNotification.message.fileContentType,
          filename: liveTranscriptionNotification.message.filename,
          fromId: liveTranscriptionNotification.message.fromId,
          id: liveTranscriptionNotification.message.id,
          priority: liveTranscriptionNotification.message.priority,
          textMsg: liveTranscriptionNotification.message.textMsg,
          timestamp: liveTranscriptionNotification.message.timestamp,
          toId: liveTranscriptionNotification.message.toId,
          // doesn't actually exist in the notification
          transcript: liveTranscriptionNotification.message.transcript,
          type: liveTranscriptionNotification.message.type,
          viewedBy: liveTranscriptionNotification.message.viewedBy
        };
        const existingMessageIndex = transcriptionMessages.findIndex(
          (element) => element.id && newMessage.id && element.id === newMessage.id
        );
        const existingMessage = existingMessageIndex >= 0 ? { ...transcriptionMessages[existingMessageIndex] } : null;
        if (existingMessage) {
          transcriptionMessages[existingMessageIndex] = { ...existingMessage, ...newMessage };
        } else {
          transcriptionMessages.push(newMessage);
        }
        return {
          ...workitem2,
          transcriptionMessages
        };
      };
      try {
        const workitem2 = this.getWorkitem(liveTranscriptionNotification.workitemId);
        if (workitem2) {
          const newWorkitem = upsertTranscriptionMessages(workitem2);
          this.upsertWorkItem(newWorkitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        }
      } catch (error) {
        Logger.error(error);
      }
      if (workitem) {
        const newWorkitem = upsertTranscriptionMessages(workitem);
        this.workitemCache.upsertWorkitem(newWorkitem);
        this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
          workitem: this.workitemCache.applyWorkitemLocalOverwrite(newWorkitem),
          workitemId: liveTranscriptionNotification.workitemId
        });
        this.eventsService.emitExternal(ExternalEvents.LiveTranscriptionNotification, {
          ...event.data,
          workitem: this.workitemCache.applyWorkitemLocalOverwrite(newWorkitem)
        });
      }
    });
  }
  handleWorkitemSummaryNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemSummaryNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemSummaryNotification", event);
      const summaryNotification = event.getProperties();
      if (summaryNotification.workitem) {
        summaryNotification.workitem = this.workitemCache.applyWorkitemLocalOverwrite(
          summaryNotification.workitem
        );
      }
      this.eventsService.emitExternal(
        ExternalEvents.WorkitemSummaryNotification,
        summaryNotification
      );
    });
  }
  handleWorkitemProgressiveNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemProgressiveNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemProgressiveNotification", event);
      const progressiveNotification = event.getProperties();
      if (!progressiveNotification.workitem && workitem) {
        progressiveNotification.workitem = workitem;
      }
      try {
        this.eventsService.emitExternal(
          ExternalEvents.WorkitemProgressiveNotification,
          progressiveNotification
        );
      } catch (error) {
        Logger.error(error);
      }
    });
  }
  handleWorkitemPredictiveNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemPredictiveNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemPredictiveNotification", event);
      const predictiveNotification = event.getProperties();
      if (!predictiveNotification.workitem && workitem) {
        predictiveNotification.workitem = workitem;
      }
      try {
        this.eventsService.emitExternal(
          ExternalEvents.WorkitemPredictiveNotification,
          predictiveNotification
        );
      } catch (error) {
        Logger.error(error);
      }
    });
  }
  handleWorkitemFailedNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemFailedNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemFailedNotification", event);
      const workitemFailedNotification = event.getProperties();
      const errorMessage = workitemFailedNotification.reason;
      if (!workitemFailedNotification.workitem && workitem) {
        workitemFailedNotification.workitem = {
          ...this.workitemCache.applyWorkitemLocalOverwrite(workitem),
          errorMessage
        };
      } else if (workitemFailedNotification.workitem) {
        workitemFailedNotification.workitem = {
          ...this.workitemCache.applyWorkitemLocalOverwrite(workitemFailedNotification.workitem),
          errorMessage
        };
      }
      try {
        this.eventsService.emitExternal(
          ExternalEvents.WorkitemFailedNotification,
          workitemFailedNotification
        );
      } catch (error) {
        Logger.error(error);
      }
      if (workitemFailedNotification.workitem?.conversationId) {
        try {
          this.eventsService.emitExternal(
            ExternalEvents.WorkitemConversationMessageNotification,
            {
              workitem: workitemFailedNotification.workitem,
              workitemId: workitemFailedNotification.workitemId
            }
          );
        } catch (error) {
          Logger.error(error);
        }
      }
    });
  }
  /**
   * Re-emits the AISummaryNotification into our external events with correct typing.
   */
  handleAISummaryNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.AISummaryNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleAISummaryNotification", event);
      this.eventsService.emitExternal(ExternalEvents.AISummaryNotification, event.data);
    });
  }
  /**
   * The function "active" in the WorkitemsService class logs the model ID and then
   * makes a POST request to a specific endpoint using axiosInstance.
   * @param {Workitem} model - The `model` parameter in the `active` function is of
   * type `Workitem`. It seems to be an object that contains information related to
   * a work item. The function logs a message using `Logger.log` and then makes a
   * POST request using `axiosInstance` to a specific endpoint related to
   * @returns The `active` method is returning the result of the
   * `axiosInstance.post` call, which is a Promise. This Promise will resolve with
   * the response data from the POST request to the specified endpoint
   * `/users/api/calls/${model._id}/bridge`.
   */
  async active(model) {
    const isWorkitemId = typeof model === "string";
    this.logger.debug(
      `BaseWorkitemsService - active - activating workitem [${isWorkitemId ? model : model.workitemId}]`
    );
    return await axiosInstance.post(
      `/users/api/calls/${isWorkitemId ? model : model.workitemId}/bridge`
    );
  }
  /**
   * This TypeScript function sends a POST request to hold a work item using
   * axiosInstance.
   * @param {Workitem} model - The `model` parameter in the `hold` function is of
   * type `Workitem`. It is used to pass information about the work item that needs
   * to be put on hold.
   * @returns The `hold` method is returning the result of the `axiosInstance.post`
   * call, which is a Promise. This Promise will resolve with the response data
   * from the POST request to the specified endpoint
   * `/users/api/calls/${model._id}/hold`.
   */
  async hold(model) {
    const isWorkitemId = typeof model === "string";
    this.logger.debug(
      `BaseWorkitemsService - hold - placing workitem [${isWorkitemId ? model : model.workitemId}] on hold`
    );
    return await axiosInstance.post(
      `/users/api/calls/${isWorkitemId ? model : model.workitemId}/hold`
    );
  }
  /**
   * This TypeScript function hangs up a call for a specific work item by sending a
   * POST request to the specified endpoint.
   * @param {Workitem} model - The `model` parameter in the `hangUp` function is of
   * type `Workitem`. It seems to contain information related to a work item,
   * possibly including an `_id` property used to identify the specific work item.
   * The function logs a message using `Logger.log` and then makes a POST
   */
  async hangUp(model) {
    const isWorkitemId = typeof model === "string";
    this.logger.debug(
      `BaseWorkitemsService - hangUp - hanging up workitem [${isWorkitemId ? model : model.workitemId}]`
    );
    try {
      const onTimeout = () => {
        this.eventsService.emitExternal(ExternalEvents.WorkitemTerminationFailedNotification, {
          workitemId: isWorkitemId ? model : model.workitemId
        });
      };
      this.workitemCache.setLocalWorkitemAsTerminated(
        isWorkitemId ? model : model.workitemId,
        onTimeout
      );
      this.eventsService.emitInternal(InternalEvents.WorkitemStateChangeNotification, {
        ...isWorkitemId ? { workitemId: model } : { workitem: model, workitemId: model.workitemId }
      });
    } catch (error) {
      this.logger.error("WorkitemCache - error setting local workitem as terminated", error);
    }
    try {
      const response = await axiosInstance.post(
        `/users/api/calls/${isWorkitemId ? model : model.workitemId}/hangup`
      );
      return response.data;
    } catch (error) {
      this.workitemCache.clearTerminationTimeout(isWorkitemId ? model : model.workitemId);
      this.workitemCache.deleteWorkitem(isWorkitemId ? model : model.workitemId);
      throw error;
    }
  }
  /**
   * This TypeScript function hangs up a call for a specific work item by making a
   * POST request to the specified endpoint.
   * @param {Workitem} model - The `model` parameter in the `hangUp` function is of
   * type `Workitem`. It seems to contain information related to a work item,
   * possibly including an `_id` property used to identify the work item.
   */
  async stopRecording(model) {
    this.logger.debug(
      `BaseWorkitemsService - stopRecording - stop recording workitem [${model.workitemId}]`
    );
    if (model.conversationId) {
      this.logger.info(
        `BaseWorkitemsService - stopRecording - stop recording for all workitems from conversationId [${model.conversationId}]`
      );
      return axiosInstance.delete("/users/api/calls/conference/all-recording", { data: model });
    }
    return axiosInstance.delete(`/users/api/calls/${model.workitemId}/record`, { data: model });
  }
  /**
   * The function `startRecording` logs an action and sends a POST request to start
   * recording for a specific work item.
   * @param {Workitem} model - The `model` parameter in the `startRecording`
   * function is of type `Workitem`.
   * @returns The `startRecording` function is returning a promise that resolves to
   * the result of the POST request made using `axiosInstance.post()`.
   */
  async startRecording(model) {
    this.logger.debug(
      `BaseWorkitemsService - startRecording - start recording workitem [${model.workitemId}]`
    );
    if (model.conversationId) {
      this.logger.info(
        `BaseWorkitemsService - startRecording - start recording for all workitems from conversationId [${model.conversationId}]`
      );
      return axiosInstance.post("/users/api/calls/conference/all-recording", { data: model });
    }
    return axiosInstance.post(`/users/api/calls/${model.workitemId}/record`);
  }
  async mute(model) {
    this.logger.debug(`BaseWorkitemsService - mute - mute workitem [${model.workitemId}]`);
    return axiosInstance.post(`/users/api/calls/${model.workitemId}/mute`);
  }
  unMute(model) {
    this.logger.debug(`BaseWorkitemsService - unMute - unmute workitem [${model.workitemId}]`);
    return axiosInstance.delete(`/users/api/calls/${model.workitemId}/mute`, { data: model });
  }
  /**
   * The function `voicemail` sends a voicemail message with a predefined message
   * to a specific user's call ID using Axios in TypeScript.
   * @param {Workitem} model - The `model` parameter in the `voicemail` function is
   * of type `Workitem`. It seems to represent an object or data structure that
   * contains information related to a work item. The function uses this `model`
   * object to extract the `_id` property and include it in the request to the
   * @returns The `axiosInstance.post` method is being returned, which sends a POST
   * request to `/users/api/calls/${model._id}/voicemail` with the `properties`
   * object as the request body.
   */
  async voicemail(model) {
    const properties = {
      message: "Please leave your message after the tone."
    };
    this.logger.debug(
      `BaseWorkitemsService - model - send workitem [${model.workitemId}] to voicemail`
    );
    return axiosInstance.post(`/users/api/calls/${model.workitemId}/voicemail`, properties);
  }
  /**
   * This TypeScript function transfers a work item to an external system using
   * axios for HTTP requests.
   * @param {Workitem} extendedWork - The `extendedWork` parameter in the
   * `transferToExternal` function is a boolean value that indicates whether the
   * work item should be transferred to an external system with extended work
   * information.
   * @param {Workitem} workItem - The `workItem` parameter in the
   * `transferToExternal` function is an object of type `Workitem`. It likely
   * contains information related to a specific work item or task that needs to be
   * transferred to an external system or service.
   * @param payload - The `payload` parameter in the `transferToExternal` function
   * contains the following properties:
   * @returns The `transferToExternal` function is returning a Promise that
   * resolves to the result of the `axiosInstance.post` call. This call is making a
   * POST request to the endpoint
   * `/users/api/calls/${workItem._id}/externaltransfer` with the provided `data`
   * object as the request body.
   */
  async transferToExternal({
    extendedWork,
    workitemId,
    ...payload
  }) {
    this.logger.debug(
      `BaseWorkitemsService - transferToExternal - transfer workitem [${workitemId}] to external`
    );
    const data = {
      ...payload,
      ...extendedWork ? { extendedWork: 1 } : {}
    };
    return axiosInstance.post(`/users/api/calls/${workitemId}/externaltransfer`, data);
  }
  /**
   * The function `transferToAgent` transfers a work item to a specific agent using
   * axios POST request.
   * @param {Workitem} workItem - The `workItem` parameter represents an object
   * that contains information about a specific work item. It likely includes
   * details such as the work item ID, status, and other relevant data related to
   * the work being processed.
   * @param data - The `data` parameter in the `transferToAgent` function contains
   * the following properties:
   * @returns The `transferToAgent` function is returning the result of the
   * `axiosInstance.post` call, which is a Promise. This Promise will resolve with
   * the response data from the POST request to the specified endpoint
   * `/users/api/calls/${workItem._id}/usertransfer/${data.userId}` with the
   * provided `data` object.
   */
  async transferToAgent({
    eventName,
    recording,
    survey,
    userId,
    workitemId
  }) {
    this.logger.debug(
      `BaseWorkitemsService - transferToExternal - transfer workitem [${workitemId}] to agent [${userId}]`
    );
    const payload = {
      eventName,
      recording,
      survey
    };
    return axiosInstance.post(`/users/api/calls/${workitemId}/usertransfer/${userId}`, payload);
  }
  isRingAllOnTransfer(ringAll) {
    return ringAll ?? this.stateService.getTenant()?.acdType === AcdTypes.SIMPLE;
  }
  /**
   * @deprecated transferToQueue() is deprecated, use transferToInbox() instead
   */
  transferToQueue({
    eventName,
    queueId,
    recording,
    ringAll,
    survey,
    workitemId
  }) {
    this.logger.warn(
      "BaseWorkitemsService - transferToQueue is deprecated and will be removed in a future version"
    );
    return this.transferToInbox({
      eventName,
      inboxId: queueId,
      recording,
      ringAll,
      survey,
      workitemId
    });
  }
  async transferToInbox({
    eventName,
    inboxId,
    recording,
    ringAll,
    survey,
    workitemId
  }) {
    this.logger.debug(
      `BaseWorkitemsService - transferToInbox - transfer workitem [${workitemId}] to inbox [${inboxId}]`
    );
    const payload = {
      eventName,
      queueId: inboxId,
      recording,
      ringAll: this.isRingAllOnTransfer(ringAll),
      survey
    };
    const response = await axiosInstance.post(
      `/users/api/calls/${workitemId}/queuetransfer/${inboxId}`,
      payload
    );
    return response.data;
  }
  reserveAgentInInbox({
    eventName,
    inboxId,
    recording,
    ringAll,
    surveyResult,
    workitemId
  }) {
    this.logger.debug(
      `BaseWorkitemsService - reserveAgentInInbox - transfer workitem [${workitemId}] and reserve an agent in inbox [${inboxId}]`
    );
    const payload = {
      eventName,
      recording,
      ringAll: this.isRingAllOnTransfer(ringAll),
      surveyResult
    };
    return axiosInstance.post(`/users/api/calls/${workitemId}/reserveagent/${inboxId}`, payload);
  }
  /**
   * The `warmTransfer` function in TypeScript initiates a warm transfer call with specified options.
   * @param {WarmTransferOptions}  - The `warmTransfer` function takes in an object with the following
   * properties as its parameter:
   * @param {string} dispositionId - The `dispositionId` parameter in the `warmTransfer` function is a
   * string value that represents the ID of the disposition associated with the warm transfer call.
   * @param {string} eventName - The `eventName` parameter in the `warmTransfer` function is a string
   * value that represents the name of the event associated with the warm transfer call.
   * @param {boolean} extendedWork - The `extendedWork` parameter in the `warmTransfer` function is a
   * boolean value that indicates whether the warm transfer call should include extended work information.
   * @param {boolean} recording - The `recording` parameter in the `warmTransfer` function is a boolean
   * value that indicates whether the warm transfer call should be recorded.
   * @param {string} surveyResult - The `survey` parameter in the `warmTransfer` function is a string value
   * that represents the survey result associated with the warm transfer call.
   * @returns The `warmTransfer` function is returning the result of a POST request made using Axios to
   * the endpoint '/users/api/calls/active/warmtransfer' with the payload data provided in the `payload`
   * object.
   */
  warmTransfer({
    dispositionId,
    eventName,
    extendedWork,
    recording,
    surveyResult,
    workitemIds
  }) {
    this.logger.debug(
      `BaseWorkitemsService - warmTransfer - warm transfer workitems [${workitemIds}]`
    );
    const payload = {
      dispositionId,
      eventName,
      recording,
      surveyResult,
      ...extendedWork ? { extendedWork: 1 } : {},
      ...workitemIds?.length ? { workitems: workitemIds } : null
    };
    if (workitemIds?.length) {
      return axiosInstance.post("/users/api/calls/warmtransfer", payload);
    } else {
      return axiosInstance.post("/users/api/calls/active/warmtransfer", payload);
    }
  }
  /**
   * The `voicemailPlayed` function in TypeScript logs the action and makes a POST request to mark a
   * workitem as read or unread based on the `played` parameter.
   * @param {Workitem} model - The `model` parameter in the `voicemailPlayed` function represents a
   * Workitem object. It is used to identify the specific work item for which the voicemail status is
   * being updated.
   * @param {boolean} played - The `played` parameter in the `voicemailPlayed` function is a boolean
   * value that indicates whether a voicemail has been played or not. If `played` is `true`, the function
   * will mark the voicemail as read by sending a POST request to `/users/api/workitems/${model._
   * @returns The `voicemailPlayed` function is returning a Promise. The Promise will resolve with the
   * result of the axios POST request being made based on the `played` parameter. If `played` is true, it
   * will post to mark the voicemail as read, otherwise it will post to mark the voicemail as unread.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  voicemailPlayed(model, played) {
    this.logger.debug(
      `BaseWorkitemsService - voicemailPlayed - workitem [${model.workitemId}] set played [${played}]`
    );
    if (played) {
      return axiosInstance.post(`/users/api/workitems/${model.workitemId}/markread`);
    }
    return axiosInstance.post(`/users/api/workitems/${model.workitemId}/markunread`);
  }
  /**
   * This TypeScript function handles marking a missed call as read or unread based on the 'played'
   * parameter.
   * @param {any} model - The `model` parameter in the `missedCallDialed` function is typically an
   * object that represents a missed call or a work item. It likely contains information such as the ID
   * of the work item, caller details, timestamp, and any other relevant data related to the missed
   * call.
   * @param {boolean} played - The `played` parameter in the `missedCallDialed` function is a boolean
   * value that indicates whether the missed call has been played or not. If `played` is `true`, it
   * means the missed call has been played, and if `played` is `false`, it means the
   * @returns A Promise is being returned. The Promise will resolve with the result of the
   * axiosInstance.post() call, which will either mark the work item as read or unread based on the
   * value of the 'played' parameter.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  missedCallDialed(model, played) {
    this.logger.debug(
      `BaseWorkitemsService - missedCallDialed - workitem [${model.workitemId}] set played [${played}]`
    );
    if (played) {
      return axiosInstance.post(`/users/api/workitems/${model.workitemId}/markread`);
    } else {
      return axiosInstance.post(`/users/api/workitems/${model.workitemId}/markunread`);
    }
  }
  patchWorkitem(workitem, { engagementData, message }) {
    const newWorkitem = { ...workitem };
    let messagesKey;
    if (message && validateSMSWorkitemType(workitem.type) && workitem.smsMessages) {
      messagesKey = "smsMessages";
    } else if (message && workitem.type === WorkitemTypes.Chat && workitem.chatMessages) {
      messagesKey = "chatMessages";
    }
    if (message && messagesKey) {
      const messages = newWorkitem[messagesKey];
      const clonedMessages = messages ? [...messages] : [];
      const existingMessageIndex = clonedMessages.findIndex(
        (element) => element.id && message.id && element.id === message.id
      );
      if (clonedMessages[existingMessageIndex]) {
        clonedMessages[existingMessageIndex] = {
          ...clonedMessages[existingMessageIndex],
          ...message
        };
      } else {
        clonedMessages.push(message);
      }
      newWorkitem[messagesKey] = clonedMessages;
    }
    if (engagementData) {
      const currentEngagementData = newWorkitem.engagementData;
      const clonedEngagementData = currentEngagementData ? [...currentEngagementData] : [];
      const existingEngagementDataIndex = clonedEngagementData.findIndex(
        (element) => element.messageId && engagementData.messageId && element.messageId === engagementData.messageId
      );
      if (clonedEngagementData[existingEngagementDataIndex]) {
        clonedEngagementData[existingEngagementDataIndex] = {
          ...clonedEngagementData[existingEngagementDataIndex],
          ...engagementData
        };
      } else {
        clonedEngagementData.push(engagementData);
      }
      newWorkitem.engagementData = clonedEngagementData;
    }
    return newWorkitem;
  }
  handleMessageNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.MessageNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      const { engagementData, message, workitemId } = event.getProperties();
      this.logger.debug("BaseWorkitemsService - handleMessageNotification", event);
      if (message && (message.textMsg === "${START_MONITORING}" || message.textMsg === "${STOP_MONITORING}")) {
        return;
      }
      this.eventsService.emitExternal(ExternalEvents.MessageNotification, event.data);
      try {
        const workitem2 = this.getWorkitem(workitemId);
        if (workitem2) {
          const newWorkitem = this.patchWorkitem(workitem2, { engagementData, message });
          this.upsertWorkItem(newWorkitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        }
      } catch (error) {
        Logger.error(error);
      }
      if (workitem) {
        const newWorkitem = this.patchWorkitem(workitem, { engagementData, message });
        this.workitemCache.upsertWorkitem(newWorkitem);
        this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
          workitem: this.workitemCache.applyWorkitemLocalOverwrite(newWorkitem),
          workitemId
        });
      }
      if (!workitem) {
        const message2 = event.data.message;
        const userMessages = this.stateService.getUserMessages();
        if (userMessages) {
          const newMessages = [...userMessages, message2];
          this.stateService.setUserMessages(newMessages);
          this.eventsService.emitExternal(ExternalEvents.MessageNotification, {
            message: message2,
            messageId: message2.id,
            workitemId
          });
        }
      }
    });
  }
  handleMessageStatusNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.MessageStatusNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleMessageStatusNotification", event);
      this.eventsService.emitExternal(ExternalEvents.MessageNotification, event.data);
      const { engagementData, message, workitemId } = event.getProperties();
      try {
        const workitem2 = this.getWorkitem(workitemId);
        if (workitem2) {
          const newWorkitem = this.patchWorkitem(workitem2, { engagementData, message });
          this.upsertWorkItem(newWorkitem);
          this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
            workitems: this.getWorkitems()
          });
        }
      } catch (error) {
        Logger.error(error);
      }
      if (workitem) {
        const newWorkitem = this.patchWorkitem(workitem, { engagementData, message });
        this.workitemCache.upsertWorkitem(newWorkitem);
        this.eventsService.emitExternal(ExternalEvents.WorkitemStateChangeNotification, {
          workitem: this.workitemCache.applyWorkitemLocalOverwrite(newWorkitem),
          workitemId
        });
      }
    });
  }
  handleWorkitemReadNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemReadNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemReadNotification", event);
      this.eventsService.emitExternal(ExternalEvents.WorkitemReadNotification, event.data);
    });
  }
  async fetchWorkitems(payload) {
    const data = await this.schemaTypeClient.search("workitem", payload);
    if (data.objects) {
      data.objects = data.objects.map(
        (workitem) => fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        })
      );
    }
    return data;
  }
  async fetchWorkitem(id2) {
    const response = await axiosInstance.get(`/users/api/workitems/${id2}`);
    return fixWorkitem(response.data, {
      baseUrl: axiosInstance.defaults.baseURL,
      token: this.stateService.getToken(),
      users: this.stateService.getUsers()
    });
  }
  /**
   * This function sends an email response for a specific work item using Axios in TypeScript.
   * @param {string} workitemId - The `workitemId` parameter is a string that represents the unique
   * identifier of a work item. It is used to identify the specific work item for which the email
   * response is being sent.
   * @param {SendEmailResponsePayload} properties - The `properties` parameter in the `sendEmailResponse`
   * function is of type `SendEmailResponsePayload`. This parameter likely contains the necessary data
   * and configuration for sending an email response related to a specific work item identified by the
   * `workitemId`. The structure and content of the `SendEmailResponsePayload
   * @returns The `sendEmailResponse` function is returning a Promise that resolves to a `Workitem`
   * object.
   */
  async sendEmailResponse(workitemId, properties) {
    this.logger.trace("BaseBaseWorkitemsService - sendEmailResponse");
    const response = await axiosInstance.post(
      `/users/api/workitems/${workitemId}/sendemailresponse`,
      properties
    );
    return response.data;
  }
  /**
   * Changes the priority of a work item given a value.
   * @param workItemId - The ID of the workitem.
   * @param priority - A number that goes from 1 to 5, a higher number means a higher priority..
   * @returns A Promise that resolves to the response from the server.
   * @throws If an error occurs during the request.
   */
  async changePriority(workItemId, priority) {
    this.logger.debug(
      `BaseBaseWorkitemsService - changePriority - setting workitem [${workItemId}] priority [${priority}]`
    );
    const response = await axiosInstance.post(
      `/workflows/api/workitems/${workItemId}/acd`,
      {
        priority
      }
    );
    return response.data;
  }
  upsertWorkItem(workitem) {
    const workitems = [...this.workitems];
    const index = workitems.findIndex((model) => model.workitemId === workitem.workitemId);
    const newWorkitem = fixWorkitem(workitem, {
      baseUrl: axiosInstance.defaults.baseURL,
      token: this.stateService.getToken(),
      users: this.stateService.getUsers()
    });
    if (index === -1) {
      workitems.push(newWorkitem);
    } else {
      workitems[index] = newWorkitem;
    }
    this.workitems = workitems;
    return newWorkitem;
  }
  removeWorkitem(workitemId) {
    if (!workitemId) {
      return;
    }
    this.workitems = this.workitems.filter((workItem) => workItem.workitemId !== workitemId);
  }
  getIndex(workitemId) {
    return this.workitems.findIndex((model) => model.workitemId === workitemId);
  }
  exist(workitemId) {
    const index = this.workitems.findIndex((model) => model.workitemId === workitemId);
    return index > -1;
  }
  async createEmailWorkitemAttachments({
    data,
    files,
    workitemId
  }) {
    this.logger.trace("BaseWorkitemsService - createEmailWorkitemAttachments");
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file_${index + 1}`, file);
    });
    formData.append("object", JSON.stringify(data));
    const response = await axiosInstance.post(
      `/users/api/workitems/${workitemId}/attachment`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    return response.data;
  }
  async deleteEmailWorkitemAttachment({
    attachmentId,
    workitemId
  }) {
    this.logger.trace("BaseWorkitemsService - deleteEmailWorkitemAttachment");
    const response = await axiosInstance.delete(
      `/users/api/workitems/${workitemId}/attachment/${attachmentId}`
    );
    return response.data;
  }
  /**
   * This TypeScript function retrieves a specific workitem by its ID if it exists,
   * otherwise it throws an error.
   * @param {string} workitemId - The `workitemId` parameter is a string that
   * represents the unique identifier of a work item that you want to retrieve.
   * @returns The `getWorkitem` function is returning a `Workitem` object. If the
   * workitem with the specified `workitemId` exists, it retrieves the workitem
   * from the list of workitems and returns it.
   */
  getWorkitem(workitemId) {
    const exist = this.exist(workitemId);
    if (exist) {
      return this.getWorkitems()[this.getIndex(workitemId)];
    }
    return void 0;
  }
  /**
   * This function returns an array of Workitem objects.
   * @returns An array of Workitem objects is being returned.
   */
  getWorkitems() {
    return this.workitems;
  }
  /**
   * @deprecated refreshWorkitems() will be removed in a future version, use fetchWorkitems() instead.
   */
  async refreshWorkitems() {
    this.logger.warn(
      "BaseBaseWorkitemsService - refreshWorkitems is deprecated and will be removed in a future version"
    );
    const { objects } = await this.fetchWorkitems();
    this.workitems = objects ?? [];
    this.eventsService.emitExternal(ExternalEvents.WorkitemsChangedNotification, {
      workitems: this.getWorkitems()
    });
    return this.workitems;
  }
  async createConference() {
    this.logger.trace("BaseWorkitemsService - createConference");
    const response = await axiosInstance.post("/users/api/calls/conferences", {
      eventName: "Conference All"
    });
    return response.data;
  }
  async createConferenceWithWorkitems(payload) {
    this.logger.debug(
      "BaseWorkitemsService - createConferenceWithWorkitems - invoked with payload:",
      payload
    );
    const response = await axiosInstance.post("/users/api/calls/conferenceall", {
      addMe: payload.addMe,
      eventName: "Conference All",
      workitems: payload.workitemIds
    });
    return response.data;
  }
  async addToConference(workitemId, options = {
    beep: true,
    music: true,
    musicURL: "http://twimlets.com/holdmusic?Bucket=com.twilio.music.classical",
    muted: false,
    record: false
  }) {
    this.logger.debug(
      `BaseWorkitemsService - addToConference - add workitem [${workitemId}] to conference`
    );
    const response = await axiosInstance.post(
      `/users/api/calls/${workitemId}/conference`,
      options
    );
    return response.data;
  }
  async removeFromConference({ action = "hold", workitemId }) {
    this.logger.debug(
      `BaseWorkitemsService - removeFromConference - remove workitem [${workitemId}] from conference and perform action [${action}]`
    );
    if (action === "active") {
      const response2 = await this.active(workitemId);
      return response2.data;
    }
    if (action === "hangup") {
      return this.hangUp(workitemId);
    }
    const response = await this.hold(workitemId);
    return response.data;
  }
  async getOrFetchWorkitem(id2) {
    let workitem = this.getWorkitemFn?.(id2);
    if (workitem) {
      return workitem;
    }
    workitem = this.workitemCache.getWorkitem(id2);
    if (workitem) {
      return workitem;
    }
    return this.fetchWorkitem(id2);
  }
  // workitemSwitchMap() must be an arrow function
  workitemSwitchMap = (source$) => {
    return source$.pipe(
      switchMap(async (event) => {
        let workitem = event.data.workitem;
        if (!workitem && event.data.workitemId) {
          try {
            workitem = await this.getOrFetchWorkitem(event.data.workitemId);
          } catch (error) {
            Logger.error(error);
          }
        }
        return {
          event,
          workitem
        };
      })
    );
  };
  /**
   * The dtmf function sends a DTMF digit to a specific call identified by workitemId and returns the
   * updated workitem data.
   * @param {string} workitemId - The `workitemId` parameter is a unique identifier for a specific work
   * item or call in the system. It is used to identify and perform actions on a specific work item or
   * call, such as sending DTMF tones in this case.
   * @param {string} digit - The `digit` parameter in the `dtmf` function is a string that represents the
   * DTMF (Dual-Tone Multi-Frequency) digit that you want to send during a call.
   * @returns The `dtmf` function is returning a `Promise` that resolves to a `Workitem` object.
   */
  async dtmf(workitemId, digit) {
    const url = `/users/api/calls/${workitemId}/dtmf/${encodeURIComponent(digit)}`;
    const { data } = await axiosInstance.post(url, {});
    return data;
  }
  buildSignedURL(payload) {
    const token = this.stateService.getToken();
    const baseURL = this.stateService.getBaseURL();
    if (!token || !baseURL) {
      throw new Error('"baseURL" and "token" are required to build the signed URL');
    }
    if (isBuildWorkitemSignedURLPayload(payload)) {
      const { fileName: fileName2, workitemId } = payload;
      return `${baseURL}/data/api/workitem/${workitemId}/signedurl?filename=${encodeURIComponent(
        fileName2
      )}&token=${token}`;
    }
    if (isBuildVoicemailSignedURLPayload(payload)) {
      const { fileName: fileName2, regionId = "us", workitemId } = payload;
      return `${baseURL}/users/api/workitems/${workitemId}/url?regionId=${regionId}&filename=${fileName2}&token=${token}`;
    }
    if (isBuildRecordingSignedURLPayload(payload)) {
      const { fileName: fileName2 } = payload;
      return `${baseURL}/analytics/api/types/recording/signedurl/${fileName2}?token=${token}`;
    }
    if (isBuildEmailSignedURLPayload(payload)) {
      const { fileName: fileName2, workitemId } = payload;
      return `${baseURL}/emails/api/workitems/${workitemId}/${encodeURIComponent(fileName2)}?token=${token}`;
    }
    if (isBuildTwitterSignedURLPayload(payload)) {
      const { brandSocialId, mediaURL } = payload;
      return `${baseURL}/chats/api/twitter/${brandSocialId}/authorize/image?url=${mediaURL}&token=${token}`;
    }
    const { fileName, messageId } = payload;
    return `${baseURL}/data/api/messages/${messageId}/signedurl?filename=${encodeURIComponent(
      fileName
    )}&token=${token}`;
  }
  handleWorkitemTransferNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemTransferNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemTransferNotification", event);
      if (workitem) {
        const data = {
          ...event.data,
          coldTransfer: typeof event.data.coldTransfer === "string" ? event.data.coldTransfer === "true" : event.data.coldTransfer,
          workitem: fixWorkitem(workitem, {
            baseUrl: axiosInstance.defaults.baseURL,
            token: this.stateService.getToken(),
            users: this.stateService.getUsers()
          })
        };
        this.eventsService.emitExternal(ExternalEvents.WorkitemTransferNotification, data);
      }
    });
  }
  handleExtensionWorkitemNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.ExtensionWorkitemNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleExtensionWorkitemNotification", event);
      if (workitem) {
        event.data.workitem = fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
        this.eventsService.emitExternal(ExternalEvents.ExtensionWorkitemNotification, event.data);
      }
    });
  }
  handleSupervisorNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SupervisorNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleSupervisorNotification", event);
      this.eventsService.emitExternal(ExternalEvents.SupervisorNotification, event.data);
    });
  }
  handleBackfillWorkitemsNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.BackfillWorkitemsNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleBackfillWorkitemsNotification", event);
      this.eventsService.emitExternal(ExternalEvents.BackfillWorkitemsNotification, event.data);
    });
  }
  handleWorkitemsAISummaryNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.WorkitemsAISummaryNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleWorkitemsAISummaryNotification", event);
      this.eventsService.emitExternal(ExternalEvents.WorkitemsAISummaryNotification, event.data);
    });
  }
  handleMonitorWorkitemNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.SupervisorNotification), this.workitemSwitchMap).subscribe(({ event, workitem }) => {
      this.logger.debug("BaseWorkitemsService - handleMonitorWorkitemNotification", event);
      if (workitem) {
        event.data.workitem = fixWorkitem(workitem, {
          baseUrl: axiosInstance.defaults.baseURL,
          token: this.stateService.getToken(),
          users: this.stateService.getUsers()
        });
        if (event.data.type == SupervisingStates.MonitorWorkitem) {
          this.eventsService.emitExternal(
            ExternalEvents.MonitorWorkitemNotification,
            event.data
          );
        }
      }
    });
  }
  handleMessageTypingNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.MessageTypingNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleMessageTypingNotification", event);
      this.eventsService.emitExternal(ExternalEvents.MessageTypingNotification, event.data);
    });
  }
  handleInformationNotification() {
    this.eventsService.internalEvents$.pipe(ofType(InternalEvents.InformationNotification)).subscribe((event) => {
      this.logger.debug("BaseWorkitemsService - handleInformationNotification", event);
      this.eventsService.emitExternal(ExternalEvents.InformationNotification, event.data);
    });
  }
  /**
   *
   * Save survey results for a ticket
   * @param payload - Required data to save survey results
   * @param payload.workitemId - The workitem ID
   * @param payload.ticketId - The ticket ID, setting this parameter makes the request go to `surveyResultWithTicketId` schema.
   * @param payload.data - The data associated with the survey results.
   * @param payload.data.currentSurveyId - The current survey ID, there should be another entry in data with this value for the actual survey results.
   * @example { workitemId: '0000-0000', data: {currentSurveyId: '00ID', 00ID: { ...surveyResults }} }
   *
   * @returns A Promise that resolves to an empty object `{}`
   */
  async saveSurveyResult(payload) {
    let url = this.schemaTypeClient.getLinkURI("user", "surveyResult", {
      workitemId: payload.workitemId
    });
    if (payload.ticketId) {
      url = this.schemaTypeClient.getLinkURI("user", "surveyResultWithTicketId", {
        ticketId: payload.ticketId,
        workitemId: payload.workitemId
      });
    }
    const result = await axiosInstance.post(url, payload.data);
    return result.data;
  }
  /**
   * Fetch transcripts related to a workitem.
   *
   * @param payload - Required data to fetch transcripts
   * @param payload.workitemId - The workitem ID
   */
  async fetchTranscripts(payload) {
    this.logger.debug("BaseWorkitemsService - fetchTranscripts - invoked with payload:", payload);
    const response = await axiosInstance.get(
      `/analytics/api/types/${payload.workitemId}/transcripts`
    );
    return response.data;
  }
  async assignContact({ contact, workitemId }) {
    await axiosInstance.post(`/users/api/workitems/${workitemId}/contacts/${contact.id}`, contact);
  }
};

// src/internal/services/social.ts
var BaseSocialService = class {
  logger;
  constructor({ loggerService }) {
    this.logger = loggerService;
  }
  async reply(payload) {
    this.logger.trace("SocialService - reply");
    await axiosInstance.post("/reply/api/action", payload);
    return;
  }
  async uploadAttachments({
    files,
    workitemId
  }) {
    this.logger.trace("SocialService - uploadAttachments");
    const formData = new FormData();
    files.forEach((file, index) => {
      formData.append(`file${index + 1}`, file);
    });
    const response = await axiosInstance.post(
      `/reply/api/action/${workitemId}/attachments`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    return response.data;
  }
};

// src/internal/services/asyncStorage.ts
var BaseAsyncStorageService = class {
};

// src/internal/nextiva.ts
import { isAxiosError as isAxiosError5 } from "axios";

// src/utilities/simplify360Config.ts
var PROD_SIMPLIFY360_CONFIG = {
  cdnUrl: "https://d3po7etsbw5eiv.cloudfront.net",
  key: "Njg5YzhkMzU3N2ZjOTgxYTIyMmNmMzRhfG5leHRjb3Jw"
};
var DEV_SIMPLIFY360_CONFIG = {
  cdnUrl: "https://d23pcq1pxuveon.cloudfront.net",
  key: "Njc4OTE1YzFmMDY1NTU0OTVhMDliYWFmfGRvZ2Zvb2RkZW1v"
};
var SIMPLIFY360_CONFIG_BY_BASE_URL = {
  "https://app.nextiva.io": PROD_SIMPLIFY360_CONFIG,
  "https://demo.dev.nextiva.io": DEV_SIMPLIFY360_CONFIG,
  "https://madrid.dev.nextiva.io": DEV_SIMPLIFY360_CONFIG,
  "https://rc.dev.nextiva.io": DEV_SIMPLIFY360_CONFIG
};
var DEFAULT_SIMPLIFY360_CONFIG = DEV_SIMPLIFY360_CONFIG;
var resolveSimplify360Config = (baseURL) => {
  const normalized = (baseURL ?? "").replace(/\/+$/, "");
  return SIMPLIFY360_CONFIG_BY_BASE_URL[normalized] ?? DEFAULT_SIMPLIFY360_CONFIG;
};

// src/internal/nextiva.ts
import { asValue as asValue2 } from "awilix";
var BaseNextiva = class {
  coreSDKVersion = "0.3.65";
  audioQualityService;
  dataService;
  datadogService;
  phoneStatesService;
  provisioningService;
  statusService;
  eventsService;
  translatorService;
  stateService;
  dispositionService;
  acdService;
  statisticsService;
  userSocketClient;
  searchService;
  outboundModeService;
  /**
   * @deprecated campaignService is deprecated
   */
  campaignService;
  agentAssistService;
  proactiveAgentAssistService;
  dataIngestionService;
  relatedArticleService;
  contactService;
  /**
   * @deprecated functionsService is deprecated
   */
  functionsService;
  tokenService;
  resourceManager;
  recordingsService;
  myUserSettingsService;
  languageService;
  videoService;
  integrationsService;
  workitemCache;
  entitlementsService;
  loggerService;
  axios = axiosInstance;
  isPersisterEnabled;
  isPersisterEncrypted;
  isConversationCacheEnabled;
  isCopilotCacheEnabled;
  isTicketsCacheEnabled;
  isKeepAliveEnabled;
  /**
   * The constructor function initializes various services and sets configuration
   * parameters based on the provided input in a TypeScript class.
   * @param {Config}  - The constructor function you provided takes in a `Config`
   * object with the following parameters:
   */
  constructor(options) {
    const {
      baseURL,
      cacheSetup = {
        conversations: false,
        copilot: false,
        tickets: false
      },
      debug = false,
      keepAlive = false,
      language = "en",
      logLevel,
      nextivaPlatform,
      persister = {
        enabled: false,
        encrypted: false
      },
      platform,
      translator
    } = options;
    this.isConversationCacheEnabled = cacheSetup.conversations ?? false;
    this.isCopilotCacheEnabled = cacheSetup.copilot ?? false;
    this.isTicketsCacheEnabled = cacheSetup.tickets ?? false;
    registerDependencies();
    registerBaseDependencies();
    dependencyInjectionContainer.register({
      translator: asValue2(translator)
    });
    this.loggerService = dependencyInjectionContainer.resolve("loggerService");
    if (logLevel || logLevel === void 0 && debug) {
      this.loggerService.setLevel(logLevel ?? "debug");
    }
    this.loggerService.trace("BaseNextiva - constructor");
    this.loggerService.debug(
      `BaseNextiva - version [${"0.3.65"}] instantiated with options`,
      options
    );
    this.isPersisterEnabled = persister.enabled ?? false;
    this.isPersisterEncrypted = persister.encrypted ?? false;
    this.isKeepAliveEnabled = keepAlive;
    configureAxios({ baseURL, language });
    configureS360Axios();
    if (nextivaPlatform) {
      upsertDefaultRequestHeader("Nextiva-Platform", nextivaPlatform);
    }
    this.stateService = dependencyInjectionContainer.resolve("stateService");
    this.stateService.setPlatform(platform);
    this.stateService.setLanguage(language);
    this.stateService.setBaseURL(baseURL);
    this.setClientTracing(debug);
    this.userSocketClient = dependencyInjectionContainer.resolve("userSocketClient");
    this.translatorService = dependencyInjectionContainer.resolve("translatorService");
    this.audioQualityService = dependencyInjectionContainer.resolve("audioQualityService");
    this.dataService = dependencyInjectionContainer.resolve("dataService");
    this.phoneStatesService = dependencyInjectionContainer.resolve("phoneStateService");
    this.provisioningService = dependencyInjectionContainer.resolve("provisioningService");
    this.statusService = dependencyInjectionContainer.resolve("statusService");
    this.eventsService = dependencyInjectionContainer.resolve("eventsService");
    this.dispositionService = dependencyInjectionContainer.resolve("dispositionService");
    this.acdService = dependencyInjectionContainer.resolve("acdService");
    this.statisticsService = dependencyInjectionContainer.resolve("statisticsService");
    this.searchService = dependencyInjectionContainer.resolve("searchService");
    this.outboundModeService = dependencyInjectionContainer.resolve("outboundModeService");
    this.campaignService = dependencyInjectionContainer.resolve("campaignService");
    this.agentAssistService = dependencyInjectionContainer.resolve("agentAssistService");
    this.proactiveAgentAssistService = dependencyInjectionContainer.resolve("proactiveAgentAssistService");
    this.dataIngestionService = dependencyInjectionContainer.resolve("dataIngestionService");
    this.relatedArticleService = dependencyInjectionContainer.resolve("relatedArticlesService");
    this.contactService = dependencyInjectionContainer.resolve("contactService");
    this.functionsService = dependencyInjectionContainer.resolve("functionsService");
    this.resourceManager = dependencyInjectionContainer.resolve("resourceManager");
    this.tokenService = dependencyInjectionContainer.resolve("tokenService");
    this.recordingsService = dependencyInjectionContainer.resolve("recordingsService");
    this.myUserSettingsService = dependencyInjectionContainer.resolve("myUserSettingsService");
    this.languageService = dependencyInjectionContainer.resolve("languageService");
    this.videoService = dependencyInjectionContainer.resolve("videoService");
    this.integrationsService = dependencyInjectionContainer.resolve("integrationsService");
    this.datadogService = dependencyInjectionContainer.resolve("datadogService");
    this.workitemCache = dependencyInjectionContainer.resolve("workitemCache");
    this.entitlementsService = dependencyInjectionContainer.resolve("entitlementsService");
    dependencyInjectionContainer.resolve("workitemsService");
    void this.dataService.loadProviderData();
  }
  setBaseURL(baseURL) {
    this.stateService.setBaseURL(baseURL);
    const language = this.stateService.getLanguage();
    configureAxios({ baseURL, language });
  }
  changeConversationCacheEnabled(status) {
    this.isConversationCacheEnabled = status;
  }
  get checkConversationCacheEnabled() {
    return this.isConversationCacheEnabled;
  }
  changeCopilotCacheEnabled(status) {
    this.isCopilotCacheEnabled = status;
  }
  get checkCopilotCacheEnabled() {
    return this.isCopilotCacheEnabled;
  }
  changeTicketsCacheEnabled(status) {
    this.isTicketsCacheEnabled = status;
  }
  get checkTicketsCacheEnabled() {
    return this.isTicketsCacheEnabled;
  }
  /**
   * The function `login` logs the username and then calls the `login` method of
   * the `userService` with the provided username and password.
   * @param {string} username - The `username` parameter is a string that
   * represents the username of the user trying to log in.
   * @param {string} password - The `password` parameter in the `login` function
   * is a string type, which is used to store the password input provided by the
   * user during the login process.
   * @returns The `login` method is returning the result of calling the `login`
   * method of the `userService` with the provided `username` and `password`
   * parameters.
   */
  async login(username, password) {
    return this.getUserService().login(username, password);
  }
  /**
   * The `init` function in TypeScript initializes the Nextiva module and calls the
   * `init` function of the userService.
   * @returns The `init` function is returning the result of calling the `init`
   * function of the `userService`.
   * The `init` function is called to initialize the Nextiva NCX and the `userService`.     *
   */
  async init(options = {
    isLoadMandatoryDataAllowed: true,
    isTelephonyInitAllowed: true,
    isTokenRefreshAllowed: true,
    isWebRTCAllowed: true,
    isWebSocketAllowed: true
  }) {
    const t1 = Date.now();
    this.loggerService.trace("BaseNextiva - init");
    this.loggerService.debug("BaseNextiva - init was invoked with options: ", options);
    const {
      device,
      isLoadMandatoryDataAllowed = true,
      isTelephonyInitAllowed = true,
      isTokenRefreshAllowed = true,
      isWebRTCAllowed = true,
      isWebSocketAllowed = true,
      session: sessionConfig,
      shouldWidgetInit = true,
      state: sdkState
    } = options;
    this.stateService.setWebRTCAllowed(isWebRTCAllowed);
    let isTokenInit = false;
    let currentStep = {
      status: {
        isFailure: false,
        isTokenInit,
        shouldLogout: false
      },
      step: "start"
    };
    const initStatusData = {
      currentStep,
      steps: [currentStep]
    };
    try {
      this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
      if (sessionConfig?.token) {
        upsertDefaultRequestHeader("Authorization", sessionConfig.token);
        this.stateService.setToken(sessionConfig.token);
      }
      if (sessionConfig?.deviceId) {
        upsertDefaultRequestHeader("Deviceid", sessionConfig.deviceId);
      }
      if (sessionConfig?.baseURL) {
        axiosInstance.defaults.baseURL = sessionConfig.baseURL;
        this.stateService.setBaseURL(sessionConfig.baseURL);
      }
      if (device?.token) {
        this.stateService.setDeviceToken(device.token);
      }
      const platform = this.stateService.getPlatform();
      let session;
      let telephonyDevice;
      this.loggerService.debug(
        "BaseNextiva - init - Evaluating SDK state to determine session initialization strategy",
        sdkState
      );
      if (sdkState?.session && sdkState.user) {
        session = sdkState.session;
        if (sdkState.device) {
          telephonyDevice = sdkState.device;
          this.stateService.setDevice(telephonyDevice);
        }
        this.stateService.setSession(sdkState.session);
        this.eventsService.emitExternal(
          ExternalEvents.SessionStateUpdateNotification,
          sdkState.session
        );
        try {
          const localDevices = await dependencyInjectionContainer.resolve("localStorageService").getObjectValue("user.settings.devices");
          this.getEventService().emitExternal(
            ExternalEvents.InitRetrieveLocalStorageDevices,
            localDevices
          );
          if (localDevices) {
            currentStep = {
              status: {
                isFailure: false,
                isTokenInit,
                shouldLogout: false
              },
              step: "fetchLocalDevices"
            };
            initStatusData.currentStep = currentStep;
            initStatusData.steps.push(currentStep);
            this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
            sdkState.user.settings.devices = {
              ...sdkState.user.settings.devices,
              ...localDevices
            };
            this.getEventService().emitExternal(ExternalEvents.InitRetrieveLocalStorageDevicesSuccess);
          }
        } catch (error) {
          this.loggerService.error(
            "Error fetching local devices from localStorage during init",
            error
          );
          currentStep = {
            status: {
              isFailure: true,
              isTokenInit,
              shouldLogout: false
            },
            step: "fetchLocalDevices"
          };
          initStatusData.currentStep = currentStep;
          initStatusData.steps.push(currentStep);
          this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
          this.getEventService().emitExternal(ExternalEvents.InitRetrieveLocalStorageDevicesError);
        } finally {
          this.loggerService.debug(
            "BaseNextiva - init - setting user in state service and query client",
            sdkState.user
          );
          queryClient.setQueryData(["static", "user"], sdkState.user);
        }
      } else {
        let sessionPromise;
        let isTokenRefreshed = false;
        if (platform === "web" && !this.stateService.getToken()) {
          try {
            this.loggerService.info(
              "BaseNextiva - init - refreshing token during cookie based authentication"
            );
            await this.tokenService.refreshToken();
            isTokenRefreshed = true;
          } catch (error) {
            Logger.error("Token refresh error during init", error);
          }
        }
        if (!sessionConfig?.isSSO && (sessionConfig?.token || isTokenRefreshed)) {
          this.loggerService.debug("BaseNextiva - init - fetching session");
          sessionPromise = this.getUserService().fetchSession(sessionConfig?.deviceId, {
            appVersionCode: device?.appVersionCode,
            appleServicesEnvironment: device?.appleServicesEnvironment,
            deviceToken: device?.token,
            platform,
            pushKitToken: device?.pushKitToken
          });
          isTokenInit = true;
        } else {
          this.loggerService.debug("BaseNextiva - init - creating session");
          sessionPromise = this.getUserService().initSession({
            appVersionCode: device?.appVersionCode,
            appleServicesEnvironment: device?.appleServicesEnvironment,
            deviceToken: device?.token,
            platform,
            pushKitToken: device?.pushKitToken
          });
        }
        const data = await sessionPromise;
        currentStep = {
          status: {
            isFailure: false,
            isTokenInit,
            shouldLogout: false
          },
          step: "fetchSession"
        };
        initStatusData.currentStep = currentStep;
        initStatusData.steps.push(currentStep);
        session = data.session;
        if (this.isPersisterEnabled && !this.stateService.isSysAdmin()) {
          const persisterClient = dependencyInjectionContainer.resolve("persisterClient");
          const queryPersister = persisterClient.createQueryPersister(
            session.userId,
            this.isPersisterEncrypted
          );
          const persister = queryPersister.persisterFn;
          const defaultOptions2 = queryClient.getDefaultOptions();
          queryClient.setDefaultOptions({
            ...defaultOptions2,
            queries: {
              ...defaultOptions2.queries,
              persister
            }
          });
          await queryPersister.restoreQueries(queryClient);
        }
        telephonyDevice = data.device;
        this.getEventService().emitExternal(ExternalEvents.InitResolveSession, session);
        this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
      }
      if (isLoadMandatoryDataAllowed) {
        await this.dataService.loadMandatoryData();
        currentStep = {
          status: {
            isFailure: false,
            isTokenInit,
            shouldLogout: false
          },
          step: "loadMandatoryData"
        };
        initStatusData.currentStep = currentStep;
        initStatusData.steps.push(currentStep);
        this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
        this.getEventService().emitExternal(ExternalEvents.InitDataDogServiceLoadMandatoryData);
      }
      const user = this.stateService.getUser();
      if (user?.userId) {
        await this.datadogService?.setUser({
          email: user.username,
          id: user.userId,
          name: user.name ? user.name : user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : user.username,
          tenantId: user.tenantId
        });
        this.getEventService().emitExternal(ExternalEvents.InitDataDogServiceSetUser, {
          email: user.username,
          id: user.userId,
          name: user.name,
          tenantId: user.tenantId
        });
      }
      const userSocketPromise = isWebSocketAllowed ? this.userSocketClient.connect().catch((error) => {
        Logger.error("UserSocketClient - connect error", error);
        this.stateService.setUserSocketState(StompSocketState.CLOSED);
      }) : Promise.resolve();
      let selectedTelephony;
      if (!isWebRTCAllowed) {
        this.loggerService.warn("BaseNextiva - init - skipping WebRTC initialization");
      }
      const telephony = telephonyDevice?.telephony ?? session.telephony;
      if (telephony?.type === TelephonyTypes.WebRTC && isWebRTCAllowed) {
        if (telephony.webRTCProvider === WebRTCProviders.Twilio) {
          selectedTelephony = "twilio";
        }
        if (telephony.webRTCProvider === WebRTCProviders.Thrio || telephony.webRTCProvider === WebRTCProviders.Nextiva) {
          selectedTelephony = "freeswitch";
        }
      } else if (telephony?.type === TelephonyTypes.PSTN) {
        selectedTelephony = "pstn";
      }
      this.loggerService.debug(
        "BaseNextiva - init - change telephony implementation",
        queryClient.getQueryData(["static", "user"])
      );
      const changeTelephonyPromise = selectedTelephony ? this.getTelephonyService().changeTelephony(selectedTelephony, { isTelephonyInitAllowed }) : Promise.resolve();
      const autoLoginToAcdPromise = isLoadMandatoryDataAllowed ? this.getUserService().autoLoginToAcd() : Promise.resolve();
      const fetchWidgetsPromise = isLoadMandatoryDataAllowed && !shouldWidgetInit ? this.dataService.fetchWidgets() : Promise.resolve();
      const userEntitlementsPromise = isLoadMandatoryDataAllowed ? this.getEntitlementsService().fetchUserEntitlements() : Promise.resolve();
      const tenantEntitlementsPromise = isLoadMandatoryDataAllowed ? this.getEntitlementsService().fetchTenantEntitlements() : Promise.resolve();
      const triggerAllUserMessagesPromise = this.stateService.getDomainEnvironment() === "ncc" && isLoadMandatoryDataAllowed ? this.getUserService().triggerAllUserMessages() : Promise.resolve();
      if (isTokenRefreshAllowed) {
        if (this.tokenService.isTokenExpiringSoon()) {
          this.getEventService().emitExternal(ExternalEvents.InitRefreshToken);
          await this.tokenService.refreshToken();
          currentStep = {
            status: {
              isFailure: false,
              isTokenInit,
              shouldLogout: false
            },
            step: "refreshTokenStarted"
          };
          initStatusData.currentStep = currentStep;
          initStatusData.steps.push(currentStep);
          this.getEventService().emitExternal(ExternalEvents.InitRefreshTokenSuccess);
        }
        setTimeout(() => {
          void this.tokenService.startTokenRefreshCycle();
          currentStep = {
            status: {
              isFailure: false,
              isTokenInit,
              shouldLogout: false
            },
            step: "refreshTokenCycleStarted"
          };
          initStatusData.currentStep = currentStep;
          initStatusData.steps.push(currentStep);
          this.getEventService().emitExternal(ExternalEvents.InitRefreshTokenCycleStarted, session);
        }, TOKEN_REFRESH_INTERVAL);
      }
      await Promise.all([
        userSocketPromise,
        changeTelephonyPromise.catch((error) => {
          this.loggerService.error("Error changing telephony implementation", error);
        }),
        autoLoginToAcdPromise,
        userEntitlementsPromise.catch(() => {
          Logger.error("Error fetching user entitlements");
        }),
        tenantEntitlementsPromise.catch(() => {
          Logger.error("Error fetching tenant entitlements");
        }),
        fetchWidgetsPromise,
        triggerAllUserMessagesPromise
      ]);
      this.workitemCache.start();
      currentStep = {
        status: {
          isFailure: false,
          isTokenInit,
          shouldLogout: false
        },
        step: "initSuccess"
      };
      initStatusData.currentStep = currentStep;
      initStatusData.steps.push(currentStep);
      this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
      this.getEventService().emitExternal(ExternalEvents.SessionChangeNotification, { session });
      const t2 = Date.now();
      Logger.log("Sdk init took", t2 - t1);
      if (this.stateService.getDomainEnvironment() === "ncx" && this.checkConversationCacheEnabled) {
        const conversationFeedLimits = this.stateService.getConversationsCacheLimit();
        let cursor = -1;
        queryClient.getQueriesData({}).forEach(([queryKey, data]) => {
          if (Array.isArray(queryKey) && queryKey.includes("push-feed")) {
            data?.engagementData.forEach((engagement) => {
              if (Number.isFinite(engagement.createdAt)) {
                cursor = Math.max(cursor, engagement.createdAt);
              }
            });
          }
        });
        this.loggerService.debug("BaseNextiva - init - cursor", cursor);
        this.getConversationService().fetchFeed({
          cursor: cursor === -1 ? void 0 : cursor,
          fetch: "newer",
          includeWorkitems: true,
          limit: conversationFeedLimits.conversations,
          workitemsLimit: conversationFeedLimits.workitems
        }).catch((error) => {
          Logger.error("ConversationService - trigger initial feed on init fail: ", error);
        });
      }
      this.loggerService.info(`BaseNextiva - init resolved successfully in [${t2 - t1}] ms`);
    } catch (error) {
      this.loggerService.error("BaseNextiva - error", error);
      currentStep = {
        status: {
          isFailure: true,
          isTokenInit,
          shouldLogout: false
        },
        step: "initError"
      };
      if (error instanceof Error && error.message.includes("Network Error") && this.stateService.getToken() && (this.tokenService.getTokenExpiration() ?? 0) < Date.now()) {
        currentStep.status.error = error.message;
        throw error;
      }
      const platform = this.getStateService().getPlatform();
      if (platform && platform !== "android" && platform !== "ios") {
        if (error instanceof Error) {
          currentStep.status.error = error.message;
        }
        currentStep.status.shouldLogout = true;
        await this.getUserService().logout(true).catch((logoutError) => {
          Logger.error("Nextiva - init - logout error", logoutError);
        });
      }
      if (error instanceof Error) {
        currentStep.status.error = error.message;
      }
      if (isAxiosError5(error) && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      (error.response?.data?.errorCode === 403020 || error.response?.status === 403)) {
        currentStep.status.shouldLogout = true;
        await this.getUserService().logout(true).catch((logoutError) => {
          Logger.error("Nextiva - init - logout error", logoutError);
        });
      }
      if ((this.tokenService.getTokenExpiration() ?? 0) > Date.now()) {
        currentStep.status.shouldLogout = true;
        if (this.getUserService().isloggedIn()) {
          await this.getUserService().logout(true).catch((logoutError) => {
            Logger.error("Nextiva - init - logout error", logoutError);
          });
        }
      }
      initStatusData.currentStep = currentStep;
      initStatusData.steps.push(currentStep);
      this.getEventService().emitExternal(ExternalEvents.InitStatusNotification, initStatusData);
      throw error;
    }
    if (this.isKeepAliveEnabled && this.stateService.getTenant()?.enableKeepAlive) {
      this.getUserService().startKeepAlive();
    }
  }
  /**
   * Initializes the telephony implementation based on current user session settings.
   *
   * If the SDK instance was initialized without WebRTC allowed, this function will not initialize WebRTC telephony even if the user session settings specify it, and will log a warning instead.
   *
   * This function can be used to initialize telephony after the SDK instance was initialized, for example in cases where WebRTC was not allowed during initialization but needs to be initialized later.
   */
  async initializeTelephony() {
    const isTelephonyInitialized = this.stateService.isTelephonyInitialized();
    if (isTelephonyInitialized) {
      this.loggerService.debug(
        "BaseNextiva - initializeTelephony - telephony implementation is already initialized, skipping"
      );
      return;
    }
    const isWebRTCAllowed = this.stateService.isWebRTCAllowed();
    const telephonyDevice = this.stateService.getDevice();
    const session = this.stateService.getSession();
    let selectedTelephony;
    if (!isWebRTCAllowed) {
      this.loggerService.warn(
        "BaseNextiva - initializeTelephony - WebRTC not allowed, skipping WebRTC initialization"
      );
    }
    const telephony = telephonyDevice?.telephony ?? session?.telephony;
    if (telephony?.type === TelephonyTypes.WebRTC && isWebRTCAllowed) {
      if (telephony.webRTCProvider === WebRTCProviders.Twilio) {
        selectedTelephony = "twilio";
      }
      if (telephony.webRTCProvider === WebRTCProviders.Thrio || telephony.webRTCProvider === WebRTCProviders.Nextiva) {
        selectedTelephony = "freeswitch";
      }
    } else if (telephony?.type === TelephonyTypes.PSTN) {
      selectedTelephony = "pstn";
    }
    this.loggerService.debug(
      "BaseNextiva - initializeTelephony - change telephony implementation",
      queryClient.getQueryData(["static", "user"])
    );
    const changeTelephonyPromise = selectedTelephony ? this.getTelephonyService().changeTelephony(selectedTelephony, {
      isTelephonyInitAllowed: true
    }) : Promise.resolve();
    try {
      await changeTelephonyPromise;
    } catch (error) {
      this.loggerService.error(
        "BaseNextiva - initializeTelephony - Error changing telephony implementation",
        error
      );
      throw error;
    }
  }
  /**
   * The function `updateLanguage` updates the current language in the
   * application data and loads provider data using DataService.
   * @param {string} language - The `language` parameter in the `updateLanguage`
   * function is a string that represents the new language to be set in the
   * application data.
   */
  updateLanguage(language) {
    this.loggerService.debug(
      `BaseNextiva - updateLanguage was invoked with language [${language}]`
    );
    this.stateService.setLanguage(language);
    void this.dataService.loadProviderData();
  }
  /**
   * The `forgetPassword` function in TypeScript is an asynchronous method that
   * sends a password reset request to a provider using the provided email
   * address.
   * @param {string} email - The `forgetPassword` function is an asynchronous
   * function that takes an email address as a parameter. The function first logs
   * a message indicating that the forgetPassword function is being called with
   * the provided email address. It then checks if the email address is valid
   * using the `Util.isValidEmail` function. If the
   */
  async forgetPassword(email) {
    try {
      this.loggerService.debug(`BaseNextiva - forgetPassword was invoked with email [${email}]`);
      if (!isValidEmail(email.trim())) {
        this.loggerService.error(`BaseNextiva - forgetPassword - [${email}] is not a valid email`);
        throw new Error(Errors.InvalidEmailAddress.name);
      }
      await axiosInstance.post(`/provider/password/reset/${email}`, {});
    } catch (error) {
      this.loggerService.error(`Nextiva - forgetPassword - failed with error`, error);
      throw error;
    }
  }
  /**
   * Completes a password reset using the token from the email reset link.
   * @param {string} password - The new password to set for the user.
   * @param {string} token - The password reset token.
   */
  async resetPassword(password, token) {
    try {
      this.loggerService.debug("BaseNextiva - resetPassword was invoked");
      await axiosInstance.patch(
        "/provider/api/types/user/password",
        {
          password
        },
        {
          headers: {
            Authorization: token
          }
        }
      );
    } catch (error) {
      this.loggerService.error(`Nextiva - resetPassword - failed with error`, error);
      throw error;
    }
  }
  /**
   * The function `setClientTracing` sets the client tracing option and updates
   * the data accordingly.
   * @param {boolean} allowClientTracing - The `allowClientTracing` parameter is
   * a boolean value that determines whether client tracing is allowed or not.
   * When set to `true`, client tracing is enabled, and when set to `false`,
   * client tracing is disabled.
   */
  setClientTracing(allowClientTracing) {
    Logger.setTracing(allowClientTracing);
    this.stateService.setClientTracing(allowClientTracing);
  }
  /**
   * The function hasClientTracing checks if client tracing is allowed and
   * returns a boolean value.
   * @returns The method `hasClientTracing` is returning the value of
   * `this.allowClientTracing`.
   */
  hasClientTracing() {
    return this.stateService.hasClientTracing();
  }
  /**
   *
   * @param username - The login username
   * @returns A list of SSO providers identified by `name` with a `redirectUrl`
   */
  async fetchSSOProviders(username) {
    try {
      const response = await axiosInstance.post("/provider/login-route", {
        username
      });
      return response.data;
    } catch (error) {
      Logger.error("Nextiva - fetchSSOProviders - error", error);
      throw error;
    }
  }
  getUserService() {
    return dependencyInjectionContainer.resolve("userService");
  }
  getWorkitemsService() {
    return dependencyInjectionContainer.resolve("workitemsService");
  }
  getSocialService() {
    return dependencyInjectionContainer.resolve("socialService");
  }
  getTelephonyService() {
    return dependencyInjectionContainer.resolve("telephonyService");
  }
  getTicketService() {
    return dependencyInjectionContainer.resolve("ticketService");
  }
  getOutboundListService() {
    return dependencyInjectionContainer.resolve("outboundListService");
  }
  getConversationService() {
    return dependencyInjectionContainer.resolve("conversationService");
  }
  getCopilotService() {
    return dependencyInjectionContainer.resolve("copilotService");
  }
  getChatService() {
    return dependencyInjectionContainer.resolve("chatService");
  }
  getSchemaTypeClient() {
    return dependencyInjectionContainer.resolve("schemaTypeClient");
  }
  /**
   * The function getAudioQualityService() returns the AudioQualityService
   * instance.
   * @returns The `AudioQualityService` instance is being returned.
   */
  getAudioQualityService() {
    return this.audioQualityService;
  }
  /**
   * The function `getDataService` returns the `DataService` object.
   * @returns The `getDataService()` method is returning an instance of the
   * `DataService` class.
   */
  getDataService() {
    return this.dataService;
  }
  /**
   * The function getRelatedArticlesService() returns the RelatedArticlesService
   * instance.
   * @returns The `RelatedArticlesService` instance is being returned.
   */
  getRelatedArticlesService() {
    return this.relatedArticleService;
  }
  /**
   * The function getPhoneStatesService() returns the PhoneStatesService
   * instance.
   * @returns An instance of the `PhoneStatesService` class is being returned.
   */
  getPhoneStatesService() {
    return this.phoneStatesService;
  }
  /**
   * The function `getProvisioningService()` returns the ProvisioningService
   * instance.
   * @returns The `ProvisioningService` instance.
   */
  getProvisioningService() {
    return this.provisioningService;
  }
  /**
   * The function `getStatusService` returns the `StatusService` instance.
   * @returns The `getStatusService()` method is returning an instance of the
   * `StatusService` class.
   */
  getStatusService() {
    return this.statusService;
  }
  /**
   * The function getTranslatorService() returns the TranslatorService instance.
   * @returns The `TranslatorService` instance is being returned.
   */
  getTranslatorService() {
    return this.translatorService;
  }
  getStateService() {
    return this.stateService;
  }
  /**
   * Returns the Simplify360 config ({ cdnUrl, key }) for the active
   * environment, derived from the SDK's current base URL.
   *
   * Clients should call this instead of hardcoding the environment-to-CDN/key
   * mapping, so new environments and rotated configs ship via the SDK rather
   * than a client release.
   *
   * @returns The Simplify360 config for the active environment.
   */
  getSimplify360Config() {
    return resolveSimplify360Config(this.stateService.getBaseURL());
  }
  /**
   * The function getMyUserSettingsService() returns the MyUserSettingsService instance.
   * @returns The `MyUserSettingsService` instance is being returned.
   */
  getMyUserSettingsService() {
    return this.myUserSettingsService;
  }
  getDispositionService() {
    return this.dispositionService;
  }
  getACDService() {
    return this.acdService;
  }
  getStatisticsService() {
    return this.statisticsService;
  }
  getSearchService() {
    return this.searchService;
  }
  getAgentAssistService() {
    return this.agentAssistService;
  }
  getProactiveAgentAssistService() {
    return this.proactiveAgentAssistService;
  }
  getDataIngestionService() {
    return this.dataIngestionService;
  }
  getOutboundModeService() {
    return this.outboundModeService;
  }
  /**
   * @deprecated getCampaignService is deprecated
   */
  getCampaignService() {
    this.loggerService.warn("BaseNextiva - getCampaignService is deprecated");
    return this.campaignService;
  }
  getContactService() {
    return this.contactService;
  }
  /**
   * @deprecated getFunctionsService is deprecated
   */
  getFunctionsService() {
    this.loggerService.warn("BaseNextiva - getFunctionsService is deprecated");
    return this.functionsService;
  }
  getVideoService() {
    return this.videoService;
  }
  /**
   * The `getUser` function returns the user data obtained from the
   * `dataService`.
   * @returns The `getUser()` method is being called on the `dataService` object
   * and its return value is being returned by the `getUser()` method of the
   * current object.
   */
  getUser() {
    return this.stateService.getUser();
  }
  /**
   * The `getUserSettings` function returns the user settings using data service in
   * TypeScript.
   * @returns The `getUserSettings` function is returning the user settings data
   * obtained from the `dataService`.
   */
  getUserSettings() {
    return this.stateService.getUserSettings();
  }
  /**
   * The `getUserProfile` function returns the user profile data obtained from
   * the data service.
   * @returns The `getUserProfile` function is returning the user profile data
   * obtained from the `dataService`.
   */
  getUserProfile() {
    return this.stateService.getUserProfile();
  }
  /**
   *
   * The function `getSchemaType` retrieves a schema type using the `dataService`
   * service.
   * @param {string} schemaType - The `schemaType` parameter in the
   * `getSchemaType` function is a string that represents the type of schema
   * being requested. It is used as an input to retrieve the corresponding schema
   * type from the `dataService`.
   * @returns The `getSchemaType` function is returning the result of calling the
   * `getSchemaType` method of the `dataService` object with the `schemaType`
   * parameter.
   * @deprecated Use sdk.getSchemaTypeClient()
   */
  getSchemaType(schemaType) {
    return this.dataService.getSchemaType(schemaType);
  }
  /**
   * The function `getAvatarUrl` retrieves the avatar URL for a user based on
   * certain conditions and returns the complete URL using Axios.
   * @returns The `getAvatarUrl` function returns the URL for the user's avatar
   * image if all necessary data is available and the download URL is
   * successfully retrieved. If any required data is missing or if the download
   * URL is not available, the function returns `null`.
   * @deprecated use sdk.getUserService().buildAvatarSignedURL()
   */
  getAvatarUrl() {
    const user = this.stateService.getUser();
    if (!user) {
      return null;
    }
    const hasAvatar = Boolean(user.avatar);
    if (!hasAvatar) {
      return null;
    }
    const id2 = user.userId;
    const language = this.stateService.getLanguage();
    const token = this.stateService.getToken();
    const time = user.modifiedAt;
    if (!id2 || !language || !token || !time) {
      return null;
    }
    const downloadUrl = this.dataService.getSchemaType("user")?.getDownloadUrl("avatar", id2, language, token, time);
    if (!downloadUrl) {
      return null;
    }
    return `${axiosInstance.defaults.baseURL}${downloadUrl}`;
  }
  async _sendTestNotification(token, title, body, data, ios) {
    try {
      await axiosInstance.post(`/users/api/firebase${ios ? "ios" : ""}`, {
        body,
        data,
        registrationToken: token,
        title
      });
    } catch (error) {
      if (isAxiosError5(error)) {
        Logger.error(error.toJSON());
      }
    }
  }
  getEventService() {
    return this.eventsService;
  }
  getRecordingsService() {
    return this.recordingsService;
  }
  getEntitlementsService() {
    return this.entitlementsService;
  }
  get events$() {
    return this.eventsService.externalEvents$;
  }
  /**
   * The function `initWithSSOToken` initializes a session using an Okta SSO token and tenant ID.
   * @param {string} ssoToken - The `ssoToken` parameter is a string that represents the single sign-on
   * token used for authentication with Okta. It is typically generated by the identity provider (Okta)
   * and passed to the application for authentication purposes.
   * @param {string} tenantId - The `tenantId` parameter typically refers to a unique identifier for a
   * tenant or organization within a multi-tenant system. It helps differentiate between different
   * entities using the same system. In the context of your `initWithSSOToken` function, the `tenantId` is
   * used to retrieve specific information related to
   * @returns The `initWithSSOToken` method is returning a Promise that resolves to void.
   */
  // eslint-disable-next-line @typescript-eslint/require-await
  async initWithSSOToken(_payload) {
    throw new Error("Unsupported in this version due to deviceId");
  }
  getLanguageService() {
    return this.languageService;
  }
  getIntegrationsService() {
    return this.integrationsService;
  }
  getDeviceManagementService() {
    return dependencyInjectionContainer.resolve("deviceManagement");
  }
  getWidgetService() {
    return dependencyInjectionContainer.resolve("widgetService");
  }
  getLoggerService() {
    return dependencyInjectionContainer.resolve("loggerService");
  }
  cleanup() {
    return this.resourceManager.cleanup();
  }
};

// node_modules/@stomp/stompjs/esm6/byte.js
var BYTE = {
  // LINEFEED byte (octet 10)
  LF: "\n",
  // NULL byte (octet 0)
  NULL: "\0"
};

// node_modules/@stomp/stompjs/esm6/frame-impl.js
var FrameImpl = class _FrameImpl {
  /**
   * Frame constructor. `command`, `headers` and `body` are available as properties.
   *
   * @internal
   */
  constructor(params) {
    const { command, headers, body, binaryBody, escapeHeaderValues, skipContentLengthHeader } = params;
    this.command = command;
    this.headers = Object.assign({}, headers || {});
    if (binaryBody) {
      this._binaryBody = binaryBody;
      this.isBinaryBody = true;
    } else {
      this._body = body || "";
      this.isBinaryBody = false;
    }
    this.escapeHeaderValues = escapeHeaderValues || false;
    this.skipContentLengthHeader = skipContentLengthHeader || false;
  }
  /**
   * body of the frame
   */
  get body() {
    if (!this._body && this.isBinaryBody) {
      this._body = new TextDecoder().decode(this._binaryBody);
    }
    return this._body || "";
  }
  /**
   * body as Uint8Array
   */
  get binaryBody() {
    if (!this._binaryBody && !this.isBinaryBody) {
      this._binaryBody = new TextEncoder().encode(this._body);
    }
    return this._binaryBody;
  }
  /**
   * deserialize a STOMP Frame from raw data.
   *
   * @internal
   */
  static fromRawFrame(rawFrame, escapeHeaderValues) {
    const headers = {};
    const trim = (str) => str.replace(/^\s+|\s+$/g, "");
    for (const header of rawFrame.headers.reverse()) {
      const idx = header.indexOf(":");
      const key = trim(header[0]);
      let value = trim(header[1]);
      if (escapeHeaderValues && rawFrame.command !== "CONNECT" && rawFrame.command !== "CONNECTED") {
        value = _FrameImpl.hdrValueUnEscape(value);
      }
      headers[key] = value;
    }
    return new _FrameImpl({
      command: rawFrame.command,
      headers,
      binaryBody: rawFrame.binaryBody,
      escapeHeaderValues
    });
  }
  /**
   * @internal
   */
  toString() {
    return this.serializeCmdAndHeaders();
  }
  /**
   * serialize this Frame in a format suitable to be passed to WebSocket.
   * If the body is string the output will be string.
   * If the body is binary (i.e. of type Unit8Array) it will be serialized to ArrayBuffer.
   *
   * @internal
   */
  serialize() {
    const cmdAndHeaders = this.serializeCmdAndHeaders();
    if (this.isBinaryBody) {
      return _FrameImpl.toUnit8Array(cmdAndHeaders, this._binaryBody).buffer;
    } else {
      return cmdAndHeaders + this._body + BYTE.NULL;
    }
  }
  serializeCmdAndHeaders() {
    const lines = [this.command];
    if (this.skipContentLengthHeader) {
      delete this.headers["content-length"];
    }
    for (const name of Object.keys(this.headers || {})) {
      const value = this.headers[name];
      if (this.escapeHeaderValues && this.command !== "CONNECT" && this.command !== "CONNECTED") {
        lines.push(`${name}:${_FrameImpl.hdrValueEscape(`${value}`)}`);
      } else {
        lines.push(`${name}:${value}`);
      }
    }
    if (this.isBinaryBody || !this.isBodyEmpty() && !this.skipContentLengthHeader) {
      lines.push(`content-length:${this.bodyLength()}`);
    }
    return lines.join(BYTE.LF) + BYTE.LF + BYTE.LF;
  }
  isBodyEmpty() {
    return this.bodyLength() === 0;
  }
  bodyLength() {
    const binaryBody = this.binaryBody;
    return binaryBody ? binaryBody.length : 0;
  }
  /**
   * Compute the size of a UTF-8 string by counting its number of bytes
   * (and not the number of characters composing the string)
   */
  static sizeOfUTF8(s) {
    return s ? new TextEncoder().encode(s).length : 0;
  }
  static toUnit8Array(cmdAndHeaders, binaryBody) {
    const uint8CmdAndHeaders = new TextEncoder().encode(cmdAndHeaders);
    const nullTerminator = new Uint8Array([0]);
    const uint8Frame = new Uint8Array(uint8CmdAndHeaders.length + binaryBody.length + nullTerminator.length);
    uint8Frame.set(uint8CmdAndHeaders);
    uint8Frame.set(binaryBody, uint8CmdAndHeaders.length);
    uint8Frame.set(nullTerminator, uint8CmdAndHeaders.length + binaryBody.length);
    return uint8Frame;
  }
  /**
   * Serialize a STOMP frame as per STOMP standards, suitable to be sent to the STOMP broker.
   *
   * @internal
   */
  static marshall(params) {
    const frame = new _FrameImpl(params);
    return frame.serialize();
  }
  /**
   *  Escape header values
   */
  static hdrValueEscape(str) {
    return str.replace(/\\/g, "\\\\").replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/:/g, "\\c");
  }
  /**
   * UnEscape header values
   */
  static hdrValueUnEscape(str) {
    return str.replace(/\\r/g, "\r").replace(/\\n/g, "\n").replace(/\\c/g, ":").replace(/\\\\/g, "\\");
  }
};

// node_modules/@stomp/stompjs/esm6/parser.js
var NULL = 0;
var LF = 10;
var CR = 13;
var COLON = 58;
var Parser = class {
  constructor(onFrame, onIncomingPing) {
    this.onFrame = onFrame;
    this.onIncomingPing = onIncomingPing;
    this._encoder = new TextEncoder();
    this._decoder = new TextDecoder();
    this._token = [];
    this._initState();
  }
  parseChunk(segment, appendMissingNULLonIncoming = false) {
    let chunk;
    if (typeof segment === "string") {
      chunk = this._encoder.encode(segment);
    } else {
      chunk = new Uint8Array(segment);
    }
    if (appendMissingNULLonIncoming && chunk[chunk.length - 1] !== 0) {
      const chunkWithNull = new Uint8Array(chunk.length + 1);
      chunkWithNull.set(chunk, 0);
      chunkWithNull[chunk.length] = 0;
      chunk = chunkWithNull;
    }
    for (let i = 0; i < chunk.length; i++) {
      const byte = chunk[i];
      this._onByte(byte);
    }
  }
  // The following implements a simple Rec Descent Parser.
  // The grammar is simple and just one byte tells what should be the next state
  _collectFrame(byte) {
    if (byte === NULL) {
      return;
    }
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this.onIncomingPing();
      return;
    }
    this._onByte = this._collectCommand;
    this._reinjectByte(byte);
  }
  _collectCommand(byte) {
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this._results.command = this._consumeTokenAsUTF8();
      this._onByte = this._collectHeaders;
      return;
    }
    this._consumeByte(byte);
  }
  _collectHeaders(byte) {
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this._setupCollectBody();
      return;
    }
    this._onByte = this._collectHeaderKey;
    this._reinjectByte(byte);
  }
  _reinjectByte(byte) {
    this._onByte(byte);
  }
  _collectHeaderKey(byte) {
    if (byte === COLON) {
      this._headerKey = this._consumeTokenAsUTF8();
      this._onByte = this._collectHeaderValue;
      return;
    }
    this._consumeByte(byte);
  }
  _collectHeaderValue(byte) {
    if (byte === CR) {
      return;
    }
    if (byte === LF) {
      this._results.headers.push([
        this._headerKey,
        this._consumeTokenAsUTF8()
      ]);
      this._headerKey = void 0;
      this._onByte = this._collectHeaders;
      return;
    }
    this._consumeByte(byte);
  }
  _setupCollectBody() {
    const contentLengthHeader = this._results.headers.filter((header) => {
      return header[0] === "content-length";
    })[0];
    if (contentLengthHeader) {
      this._bodyBytesRemaining = parseInt(contentLengthHeader[1], 10);
      this._onByte = this._collectBodyFixedSize;
    } else {
      this._onByte = this._collectBodyNullTerminated;
    }
  }
  _collectBodyNullTerminated(byte) {
    if (byte === NULL) {
      this._retrievedBody();
      return;
    }
    this._consumeByte(byte);
  }
  _collectBodyFixedSize(byte) {
    if (this._bodyBytesRemaining-- === 0) {
      this._retrievedBody();
      return;
    }
    this._consumeByte(byte);
  }
  _retrievedBody() {
    this._results.binaryBody = this._consumeTokenAsRaw();
    try {
      this.onFrame(this._results);
    } catch (e) {
      console.log(`Ignoring an exception thrown by a frame handler. Original exception: `, e);
    }
    this._initState();
  }
  // Rec Descent Parser helpers
  _consumeByte(byte) {
    this._token.push(byte);
  }
  _consumeTokenAsUTF8() {
    return this._decoder.decode(this._consumeTokenAsRaw());
  }
  _consumeTokenAsRaw() {
    const rawResult = new Uint8Array(this._token);
    this._token = [];
    return rawResult;
  }
  _initState() {
    this._results = {
      command: void 0,
      headers: [],
      binaryBody: void 0
    };
    this._token = [];
    this._headerKey = void 0;
    this._onByte = this._collectFrame;
  }
};

// node_modules/@stomp/stompjs/esm6/types.js
var StompSocketState;
(function(StompSocketState2) {
  StompSocketState2[StompSocketState2["CONNECTING"] = 0] = "CONNECTING";
  StompSocketState2[StompSocketState2["OPEN"] = 1] = "OPEN";
  StompSocketState2[StompSocketState2["CLOSING"] = 2] = "CLOSING";
  StompSocketState2[StompSocketState2["CLOSED"] = 3] = "CLOSED";
})(StompSocketState = StompSocketState || (StompSocketState = {}));
var ActivationState;
(function(ActivationState2) {
  ActivationState2[ActivationState2["ACTIVE"] = 0] = "ACTIVE";
  ActivationState2[ActivationState2["DEACTIVATING"] = 1] = "DEACTIVATING";
  ActivationState2[ActivationState2["INACTIVE"] = 2] = "INACTIVE";
})(ActivationState = ActivationState || (ActivationState = {}));

// node_modules/@stomp/stompjs/esm6/versions.js
var Versions = class {
  /**
   * Takes an array of versions, typical elements '1.2', '1.1', or '1.0'
   *
   * You will be creating an instance of this class if you want to override
   * supported versions to be declared during STOMP handshake.
   */
  constructor(versions) {
    this.versions = versions;
  }
  /**
   * Used as part of CONNECT STOMP Frame
   */
  supportedVersions() {
    return this.versions.join(",");
  }
  /**
   * Used while creating a WebSocket
   */
  protocolVersions() {
    return this.versions.map((x) => `v${x.replace(".", "")}.stomp`);
  }
};
Versions.V1_0 = "1.0";
Versions.V1_1 = "1.1";
Versions.V1_2 = "1.2";
Versions.default = new Versions([
  Versions.V1_2,
  Versions.V1_1,
  Versions.V1_0
]);

// node_modules/@stomp/stompjs/esm6/augment-websocket.js
function augmentWebsocket(webSocket, debug) {
  webSocket.terminate = function() {
    const noOp = () => {
    };
    this.onerror = noOp;
    this.onmessage = noOp;
    this.onopen = noOp;
    const ts = /* @__PURE__ */ new Date();
    const id2 = Math.random().toString().substring(2, 8);
    const origOnClose = this.onclose;
    this.onclose = (closeEvent) => {
      const delay = (/* @__PURE__ */ new Date()).getTime() - ts.getTime();
      debug(`Discarded socket (#${id2})  closed after ${delay}ms, with code/reason: ${closeEvent.code}/${closeEvent.reason}`);
    };
    this.close();
    origOnClose?.call(webSocket, {
      code: 4001,
      reason: `Quick discarding socket (#${id2}) without waiting for the shutdown sequence.`,
      wasClean: false
    });
  };
}

// node_modules/@stomp/stompjs/esm6/stomp-handler.js
var StompHandler = class {
  constructor(_client, _webSocket, config) {
    this._client = _client;
    this._webSocket = _webSocket;
    this._connected = false;
    this._serverFrameHandlers = {
      // [CONNECTED Frame](https://stomp.github.com/stomp-specification-1.2.html#CONNECTED_Frame)
      CONNECTED: (frame) => {
        this.debug(`connected to server ${frame.headers.server}`);
        this._connected = true;
        this._connectedVersion = frame.headers.version;
        if (this._connectedVersion === Versions.V1_2) {
          this._escapeHeaderValues = true;
        }
        this._setupHeartbeat(frame.headers);
        this.onConnect(frame);
      },
      // [MESSAGE Frame](https://stomp.github.com/stomp-specification-1.2.html#MESSAGE)
      MESSAGE: (frame) => {
        const subscription = frame.headers.subscription;
        const onReceive = this._subscriptions[subscription] || this.onUnhandledMessage;
        const message = frame;
        const client = this;
        const messageId = this._connectedVersion === Versions.V1_2 ? message.headers.ack : message.headers["message-id"];
        message.ack = (headers = {}) => {
          return client.ack(messageId, subscription, headers);
        };
        message.nack = (headers = {}) => {
          return client.nack(messageId, subscription, headers);
        };
        onReceive(message);
      },
      // [RECEIPT Frame](https://stomp.github.com/stomp-specification-1.2.html#RECEIPT)
      RECEIPT: (frame) => {
        const callback = this._receiptWatchers[frame.headers["receipt-id"]];
        if (callback) {
          callback(frame);
          delete this._receiptWatchers[frame.headers["receipt-id"]];
        } else {
          this.onUnhandledReceipt(frame);
        }
      },
      // [ERROR Frame](https://stomp.github.com/stomp-specification-1.2.html#ERROR)
      ERROR: (frame) => {
        this.onStompError(frame);
      }
    };
    this._counter = 0;
    this._subscriptions = {};
    this._receiptWatchers = {};
    this._partialData = "";
    this._escapeHeaderValues = false;
    this._lastServerActivityTS = Date.now();
    this.debug = config.debug;
    this.stompVersions = config.stompVersions;
    this.connectHeaders = config.connectHeaders;
    this.disconnectHeaders = config.disconnectHeaders;
    this.heartbeatIncoming = config.heartbeatIncoming;
    this.heartbeatOutgoing = config.heartbeatOutgoing;
    this.splitLargeFrames = config.splitLargeFrames;
    this.maxWebSocketChunkSize = config.maxWebSocketChunkSize;
    this.forceBinaryWSFrames = config.forceBinaryWSFrames;
    this.logRawCommunication = config.logRawCommunication;
    this.appendMissingNULLonIncoming = config.appendMissingNULLonIncoming;
    this.discardWebsocketOnCommFailure = config.discardWebsocketOnCommFailure;
    this.onConnect = config.onConnect;
    this.onDisconnect = config.onDisconnect;
    this.onStompError = config.onStompError;
    this.onWebSocketClose = config.onWebSocketClose;
    this.onWebSocketError = config.onWebSocketError;
    this.onUnhandledMessage = config.onUnhandledMessage;
    this.onUnhandledReceipt = config.onUnhandledReceipt;
    this.onUnhandledFrame = config.onUnhandledFrame;
  }
  get connectedVersion() {
    return this._connectedVersion;
  }
  get connected() {
    return this._connected;
  }
  start() {
    const parser = new Parser(
      // On Frame
      (rawFrame) => {
        const frame = FrameImpl.fromRawFrame(rawFrame, this._escapeHeaderValues);
        if (!this.logRawCommunication) {
          this.debug(`<<< ${frame}`);
        }
        const serverFrameHandler = this._serverFrameHandlers[frame.command] || this.onUnhandledFrame;
        serverFrameHandler(frame);
      },
      // On Incoming Ping
      () => {
        this.debug("<<< PONG");
      }
    );
    this._webSocket.onmessage = (evt) => {
      this.debug("Received data");
      this._lastServerActivityTS = Date.now();
      if (this.logRawCommunication) {
        const rawChunkAsString = evt.data instanceof ArrayBuffer ? new TextDecoder().decode(evt.data) : evt.data;
        this.debug(`<<< ${rawChunkAsString}`);
      }
      parser.parseChunk(evt.data, this.appendMissingNULLonIncoming);
    };
    this._webSocket.onclose = (closeEvent) => {
      this.debug(`Connection closed to ${this._webSocket.url}`);
      this._cleanUp();
      this.onWebSocketClose(closeEvent);
    };
    this._webSocket.onerror = (errorEvent) => {
      this.onWebSocketError(errorEvent);
    };
    this._webSocket.onopen = () => {
      const connectHeaders = Object.assign({}, this.connectHeaders);
      this.debug("Web Socket Opened...");
      connectHeaders["accept-version"] = this.stompVersions.supportedVersions();
      connectHeaders["heart-beat"] = [
        this.heartbeatOutgoing,
        this.heartbeatIncoming
      ].join(",");
      this._transmit({ command: "CONNECT", headers: connectHeaders });
    };
  }
  _setupHeartbeat(headers) {
    if (headers.version !== Versions.V1_1 && headers.version !== Versions.V1_2) {
      return;
    }
    if (!headers["heart-beat"]) {
      return;
    }
    const [serverOutgoing, serverIncoming] = headers["heart-beat"].split(",").map((v) => parseInt(v, 10));
    if (this.heartbeatOutgoing !== 0 && serverIncoming !== 0) {
      const ttl = Math.max(this.heartbeatOutgoing, serverIncoming);
      this.debug(`send PING every ${ttl}ms`);
      this._pinger = setInterval(() => {
        if (this._webSocket.readyState === StompSocketState.OPEN) {
          this._webSocket.send(BYTE.LF);
          this.debug(">>> PING");
        }
      }, ttl);
    }
    if (this.heartbeatIncoming !== 0 && serverOutgoing !== 0) {
      const ttl = Math.max(this.heartbeatIncoming, serverOutgoing);
      this.debug(`check PONG every ${ttl}ms`);
      this._ponger = setInterval(() => {
        const delta = Date.now() - this._lastServerActivityTS;
        if (delta > ttl * 2) {
          this.debug(`did not receive server activity for the last ${delta}ms`);
          this._closeOrDiscardWebsocket();
        }
      }, ttl);
    }
  }
  _closeOrDiscardWebsocket() {
    if (this.discardWebsocketOnCommFailure) {
      this.debug("Discarding websocket, the underlying socket may linger for a while");
      this.discardWebsocket();
    } else {
      this.debug("Issuing close on the websocket");
      this._closeWebsocket();
    }
  }
  forceDisconnect() {
    if (this._webSocket) {
      if (this._webSocket.readyState === StompSocketState.CONNECTING || this._webSocket.readyState === StompSocketState.OPEN) {
        this._closeOrDiscardWebsocket();
      }
    }
  }
  _closeWebsocket() {
    this._webSocket.onmessage = () => {
    };
    this._webSocket.close();
  }
  discardWebsocket() {
    if (typeof this._webSocket.terminate !== "function") {
      augmentWebsocket(this._webSocket, (msg) => this.debug(msg));
    }
    this._webSocket.terminate();
  }
  _transmit(params) {
    const { command, headers, body, binaryBody, skipContentLengthHeader } = params;
    const frame = new FrameImpl({
      command,
      headers,
      body,
      binaryBody,
      escapeHeaderValues: this._escapeHeaderValues,
      skipContentLengthHeader
    });
    let rawChunk = frame.serialize();
    if (this.logRawCommunication) {
      this.debug(`>>> ${rawChunk}`);
    } else {
      this.debug(`>>> ${frame}`);
    }
    if (this.forceBinaryWSFrames && typeof rawChunk === "string") {
      rawChunk = new TextEncoder().encode(rawChunk);
    }
    if (typeof rawChunk !== "string" || !this.splitLargeFrames) {
      this._webSocket.send(rawChunk);
    } else {
      let out = rawChunk;
      while (out.length > 0) {
        const chunk = out.substring(0, this.maxWebSocketChunkSize);
        out = out.substring(this.maxWebSocketChunkSize);
        this._webSocket.send(chunk);
        this.debug(`chunk sent = ${chunk.length}, remaining = ${out.length}`);
      }
    }
  }
  dispose() {
    if (this.connected) {
      try {
        const disconnectHeaders = Object.assign({}, this.disconnectHeaders);
        if (!disconnectHeaders.receipt) {
          disconnectHeaders.receipt = `close-${this._counter++}`;
        }
        this.watchForReceipt(disconnectHeaders.receipt, (frame) => {
          this._closeWebsocket();
          this._cleanUp();
          this.onDisconnect(frame);
        });
        this._transmit({ command: "DISCONNECT", headers: disconnectHeaders });
      } catch (error) {
        this.debug(`Ignoring error during disconnect ${error}`);
      }
    } else {
      if (this._webSocket.readyState === StompSocketState.CONNECTING || this._webSocket.readyState === StompSocketState.OPEN) {
        this._closeWebsocket();
      }
    }
  }
  _cleanUp() {
    this._connected = false;
    if (this._pinger) {
      clearInterval(this._pinger);
      this._pinger = void 0;
    }
    if (this._ponger) {
      clearInterval(this._ponger);
      this._ponger = void 0;
    }
  }
  publish(params) {
    const { destination, headers, body, binaryBody, skipContentLengthHeader } = params;
    const hdrs = Object.assign({ destination }, headers);
    this._transmit({
      command: "SEND",
      headers: hdrs,
      body,
      binaryBody,
      skipContentLengthHeader
    });
  }
  watchForReceipt(receiptId, callback) {
    this._receiptWatchers[receiptId] = callback;
  }
  subscribe(destination, callback, headers = {}) {
    headers = Object.assign({}, headers);
    if (!headers.id) {
      headers.id = `sub-${this._counter++}`;
    }
    headers.destination = destination;
    this._subscriptions[headers.id] = callback;
    this._transmit({ command: "SUBSCRIBE", headers });
    const client = this;
    return {
      id: headers.id,
      unsubscribe(hdrs) {
        return client.unsubscribe(headers.id, hdrs);
      }
    };
  }
  unsubscribe(id2, headers = {}) {
    headers = Object.assign({}, headers);
    delete this._subscriptions[id2];
    headers.id = id2;
    this._transmit({ command: "UNSUBSCRIBE", headers });
  }
  begin(transactionId) {
    const txId = transactionId || `tx-${this._counter++}`;
    this._transmit({
      command: "BEGIN",
      headers: {
        transaction: txId
      }
    });
    const client = this;
    return {
      id: txId,
      commit() {
        client.commit(txId);
      },
      abort() {
        client.abort(txId);
      }
    };
  }
  commit(transactionId) {
    this._transmit({
      command: "COMMIT",
      headers: {
        transaction: transactionId
      }
    });
  }
  abort(transactionId) {
    this._transmit({
      command: "ABORT",
      headers: {
        transaction: transactionId
      }
    });
  }
  ack(messageId, subscriptionId, headers = {}) {
    headers = Object.assign({}, headers);
    if (this._connectedVersion === Versions.V1_2) {
      headers.id = messageId;
    } else {
      headers["message-id"] = messageId;
    }
    headers.subscription = subscriptionId;
    this._transmit({ command: "ACK", headers });
  }
  nack(messageId, subscriptionId, headers = {}) {
    headers = Object.assign({}, headers);
    if (this._connectedVersion === Versions.V1_2) {
      headers.id = messageId;
    } else {
      headers["message-id"] = messageId;
    }
    headers.subscription = subscriptionId;
    return this._transmit({ command: "NACK", headers });
  }
};

// node_modules/@stomp/stompjs/esm6/client.js
var Client = class {
  /**
   * Create an instance.
   */
  constructor(conf = {}) {
    this.stompVersions = Versions.default;
    this.connectionTimeout = 0;
    this.reconnectDelay = 5e3;
    this.heartbeatIncoming = 1e4;
    this.heartbeatOutgoing = 1e4;
    this.splitLargeFrames = false;
    this.maxWebSocketChunkSize = 8 * 1024;
    this.forceBinaryWSFrames = false;
    this.appendMissingNULLonIncoming = false;
    this.discardWebsocketOnCommFailure = false;
    this.state = ActivationState.INACTIVE;
    const noOp = () => {
    };
    this.debug = noOp;
    this.beforeConnect = noOp;
    this.onConnect = noOp;
    this.onDisconnect = noOp;
    this.onUnhandledMessage = noOp;
    this.onUnhandledReceipt = noOp;
    this.onUnhandledFrame = noOp;
    this.onStompError = noOp;
    this.onWebSocketClose = noOp;
    this.onWebSocketError = noOp;
    this.logRawCommunication = false;
    this.onChangeState = noOp;
    this.connectHeaders = {};
    this._disconnectHeaders = {};
    this.configure(conf);
  }
  /**
   * Underlying WebSocket instance, READONLY.
   */
  get webSocket() {
    return this._stompHandler?._webSocket;
  }
  /**
   * Disconnection headers.
   */
  get disconnectHeaders() {
    return this._disconnectHeaders;
  }
  set disconnectHeaders(value) {
    this._disconnectHeaders = value;
    if (this._stompHandler) {
      this._stompHandler.disconnectHeaders = this._disconnectHeaders;
    }
  }
  /**
   * `true` if there is an active connection to STOMP Broker
   */
  get connected() {
    return !!this._stompHandler && this._stompHandler.connected;
  }
  /**
   * version of STOMP protocol negotiated with the server, READONLY
   */
  get connectedVersion() {
    return this._stompHandler ? this._stompHandler.connectedVersion : void 0;
  }
  /**
   * if the client is active (connected or going to reconnect)
   */
  get active() {
    return this.state === ActivationState.ACTIVE;
  }
  _changeState(state) {
    this.state = state;
    this.onChangeState(state);
  }
  /**
   * Update configuration.
   */
  configure(conf) {
    Object.assign(this, conf);
  }
  /**
   * Initiate the connection with the broker.
   * If the connection breaks, as per [Client#reconnectDelay]{@link Client#reconnectDelay},
   * it will keep trying to reconnect.
   *
   * Call [Client#deactivate]{@link Client#deactivate} to disconnect and stop reconnection attempts.
   */
  activate() {
    const _activate = () => {
      if (this.active) {
        this.debug("Already ACTIVE, ignoring request to activate");
        return;
      }
      this._changeState(ActivationState.ACTIVE);
      this._connect();
    };
    if (this.state === ActivationState.DEACTIVATING) {
      this.debug("Waiting for deactivation to finish before activating");
      this.deactivate().then(() => {
        _activate();
      });
    } else {
      _activate();
    }
  }
  async _connect() {
    await this.beforeConnect();
    if (this._stompHandler) {
      this.debug("There is already a stompHandler, skipping the call to connect");
      return;
    }
    if (!this.active) {
      this.debug("Client has been marked inactive, will not attempt to connect");
      return;
    }
    if (this.connectionTimeout > 0) {
      if (this._connectionWatcher) {
        clearTimeout(this._connectionWatcher);
      }
      this._connectionWatcher = setTimeout(() => {
        if (this.connected) {
          return;
        }
        this.debug(`Connection not established in ${this.connectionTimeout}ms, closing socket`);
        this.forceDisconnect();
      }, this.connectionTimeout);
    }
    this.debug("Opening Web Socket...");
    const webSocket = this._createWebSocket();
    this._stompHandler = new StompHandler(this, webSocket, {
      debug: this.debug,
      stompVersions: this.stompVersions,
      connectHeaders: this.connectHeaders,
      disconnectHeaders: this._disconnectHeaders,
      heartbeatIncoming: this.heartbeatIncoming,
      heartbeatOutgoing: this.heartbeatOutgoing,
      splitLargeFrames: this.splitLargeFrames,
      maxWebSocketChunkSize: this.maxWebSocketChunkSize,
      forceBinaryWSFrames: this.forceBinaryWSFrames,
      logRawCommunication: this.logRawCommunication,
      appendMissingNULLonIncoming: this.appendMissingNULLonIncoming,
      discardWebsocketOnCommFailure: this.discardWebsocketOnCommFailure,
      onConnect: (frame) => {
        if (this._connectionWatcher) {
          clearTimeout(this._connectionWatcher);
          this._connectionWatcher = void 0;
        }
        if (!this.active) {
          this.debug("STOMP got connected while deactivate was issued, will disconnect now");
          this._disposeStompHandler();
          return;
        }
        this.onConnect(frame);
      },
      onDisconnect: (frame) => {
        this.onDisconnect(frame);
      },
      onStompError: (frame) => {
        this.onStompError(frame);
      },
      onWebSocketClose: (evt) => {
        this._stompHandler = void 0;
        if (this.state === ActivationState.DEACTIVATING) {
          this._changeState(ActivationState.INACTIVE);
        }
        this.onWebSocketClose(evt);
        if (this.active) {
          this._schedule_reconnect();
        }
      },
      onWebSocketError: (evt) => {
        this.onWebSocketError(evt);
      },
      onUnhandledMessage: (message) => {
        this.onUnhandledMessage(message);
      },
      onUnhandledReceipt: (frame) => {
        this.onUnhandledReceipt(frame);
      },
      onUnhandledFrame: (frame) => {
        this.onUnhandledFrame(frame);
      }
    });
    this._stompHandler.start();
  }
  _createWebSocket() {
    let webSocket;
    if (this.webSocketFactory) {
      webSocket = this.webSocketFactory();
    } else if (this.brokerURL) {
      webSocket = new WebSocket(this.brokerURL, this.stompVersions.protocolVersions());
    } else {
      throw new Error("Either brokerURL or webSocketFactory must be provided");
    }
    webSocket.binaryType = "arraybuffer";
    return webSocket;
  }
  _schedule_reconnect() {
    if (this.reconnectDelay > 0) {
      this.debug(`STOMP: scheduling reconnection in ${this.reconnectDelay}ms`);
      this._reconnector = setTimeout(() => {
        this._connect();
      }, this.reconnectDelay);
    }
  }
  /**
   * Disconnect if connected and stop auto reconnect loop.
   * Appropriate callbacks will be invoked if there is an underlying STOMP connection.
   *
   * This call is async. It will resolve immediately if there is no underlying active websocket,
   * otherwise, it will resolve after the underlying websocket is properly disposed of.
   *
   * It is not an error to invoke this method more than once.
   * Each of those would resolve on completion of deactivation.
   *
   * To reactivate, you can call [Client#activate]{@link Client#activate}.
   *
   * Experimental: pass `force: true` to immediately discard the underlying connection.
   * This mode will skip both the STOMP and the Websocket shutdown sequences.
   * In some cases, browsers take a long time in the Websocket shutdown
   * if the underlying connection had gone stale.
   * Using this mode can speed up.
   * When this mode is used, the actual Websocket may linger for a while
   * and the broker may not realize that the connection is no longer in use.
   *
   * It is possible to invoke this method initially without the `force` option
   * and subsequently, say after a wait, with the `force` option.
   */
  async deactivate(options = {}) {
    const force = options.force || false;
    const needToDispose = this.active;
    let retPromise;
    if (this.state === ActivationState.INACTIVE) {
      this.debug(`Already INACTIVE, nothing more to do`);
      return Promise.resolve();
    }
    this._changeState(ActivationState.DEACTIVATING);
    if (this._reconnector) {
      clearTimeout(this._reconnector);
      this._reconnector = void 0;
    }
    if (this._stompHandler && // @ts-ignore - if there is a _stompHandler, there is the webSocket
    this.webSocket.readyState !== StompSocketState.CLOSED) {
      const origOnWebSocketClose = this._stompHandler.onWebSocketClose;
      retPromise = new Promise((resolve, reject) => {
        this._stompHandler.onWebSocketClose = (evt) => {
          origOnWebSocketClose(evt);
          resolve();
        };
      });
    } else {
      this._changeState(ActivationState.INACTIVE);
      return Promise.resolve();
    }
    if (force) {
      this._stompHandler?.discardWebsocket();
    } else if (needToDispose) {
      this._disposeStompHandler();
    }
    return retPromise;
  }
  /**
   * Force disconnect if there is an active connection by directly closing the underlying WebSocket.
   * This is different from a normal disconnect where a DISCONNECT sequence is carried out with the broker.
   * After forcing disconnect, automatic reconnect will be attempted.
   * To stop further reconnects call [Client#deactivate]{@link Client#deactivate} as well.
   */
  forceDisconnect() {
    if (this._stompHandler) {
      this._stompHandler.forceDisconnect();
    }
  }
  _disposeStompHandler() {
    if (this._stompHandler) {
      this._stompHandler.dispose();
    }
  }
  /**
   * Send a message to a named destination. Refer to your STOMP broker documentation for types
   * and naming of destinations.
   *
   * STOMP protocol specifies and suggests some headers and also allows broker-specific headers.
   *
   * `body` must be String.
   * You will need to covert the payload to string in case it is not string (e.g. JSON).
   *
   * To send a binary message body, use `binaryBody` parameter. It should be a
   * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
   * Sometimes brokers may not support binary frames out of the box.
   * Please check your broker documentation.
   *
   * `content-length` header is automatically added to the STOMP Frame sent to the broker.
   * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
   * For binary messages, `content-length` header is always added.
   *
   * Caution: The broker will, most likely, report an error and disconnect
   * if the message body has NULL octet(s) and `content-length` header is missing.
   *
   * ```javascript
   *        client.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
   *
   *        // Only destination is mandatory parameter
   *        client.publish({destination: "/queue/test", body: "Hello, STOMP"});
   *
   *        // Skip content-length header in the frame to the broker
   *        client.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
   *
   *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
   *        // setting content-type header is not mandatory, however a good practice
   *        client.publish({destination: '/topic/special', binaryBody: binaryData,
   *                         headers: {'content-type': 'application/octet-stream'}});
   * ```
   */
  publish(params) {
    this._checkConnection();
    this._stompHandler.publish(params);
  }
  _checkConnection() {
    if (!this.connected) {
      throw new TypeError("There is no underlying STOMP connection");
    }
  }
  /**
   * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
   * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
   * The value (say receipt-id) for this header needs to be unique for each use.
   * Typically, a sequence, a UUID, a random number or a combination may be used.
   *
   * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
   * The operation needs to be matched based on the value of the receipt-id.
   *
   * This method allows watching for a receipt and invoking the callback
   *  when the corresponding receipt has been received.
   *
   * The actual {@link IFrame} will be passed as parameter to the callback.
   *
   * Example:
   * ```javascript
   *        // Subscribing with acknowledgement
   *        let receiptId = randomText();
   *
   *        client.watchForReceipt(receiptId, function() {
   *          // Will be called after server acknowledges
   *        });
   *
   *        client.subscribe(TEST.destination, onMessage, {receipt: receiptId});
   *
   *
   *        // Publishing with acknowledgement
   *        receiptId = randomText();
   *
   *        client.watchForReceipt(receiptId, function() {
   *          // Will be called after server acknowledges
   *        });
   *        client.publish({destination: TEST.destination, headers: {receipt: receiptId}, body: msg});
   * ```
   */
  watchForReceipt(receiptId, callback) {
    this._checkConnection();
    this._stompHandler.watchForReceipt(receiptId, callback);
  }
  /**
   * Subscribe to a STOMP Broker location. The callback will be invoked for each
   * received message with the {@link IMessage} as argument.
   *
   * Note: The library will generate a unique ID if there is none provided in the headers.
   *       To use your own ID, pass it using the `headers` argument.
   *
   * ```javascript
   *        callback = function(message) {
   *        // called when the client receives a STOMP message from the server
   *          if (message.body) {
   *            alert("got message with body " + message.body)
   *          } else {
   *            alert("got empty message");
   *          }
   *        });
   *
   *        var subscription = client.subscribe("/queue/test", callback);
   *
   *        // Explicit subscription id
   *        var mySubId = 'my-subscription-id-001';
   *        var subscription = client.subscribe(destination, callback, { id: mySubId });
   * ```
   */
  subscribe(destination, callback, headers = {}) {
    this._checkConnection();
    return this._stompHandler.subscribe(destination, callback, headers);
  }
  /**
   * It is preferable to unsubscribe from a subscription by calling
   * `unsubscribe()` directly on {@link StompSubscription} returned by `client.subscribe()`:
   *
   * ```javascript
   *        var subscription = client.subscribe(destination, onmessage);
   *        // ...
   *        subscription.unsubscribe();
   * ```
   *
   * See: https://stomp.github.com/stomp-specification-1.2.html#UNSUBSCRIBE UNSUBSCRIBE Frame
   */
  unsubscribe(id2, headers = {}) {
    this._checkConnection();
    this._stompHandler.unsubscribe(id2, headers);
  }
  /**
   * Start a transaction, the returned {@link ITransaction} has methods - [commit]{@link ITransaction#commit}
   * and [abort]{@link ITransaction#abort}.
   *
   * `transactionId` is optional, if not passed the library will generate it internally.
   */
  begin(transactionId) {
    this._checkConnection();
    return this._stompHandler.begin(transactionId);
  }
  /**
   * Commit a transaction.
   *
   * It is preferable to commit a transaction by calling [commit]{@link ITransaction#commit} directly on
   * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
   *
   * ```javascript
   *        var tx = client.begin(txId);
   *        //...
   *        tx.commit();
   * ```
   */
  commit(transactionId) {
    this._checkConnection();
    this._stompHandler.commit(transactionId);
  }
  /**
   * Abort a transaction.
   * It is preferable to abort a transaction by calling [abort]{@link ITransaction#abort} directly on
   * {@link ITransaction} returned by [client.begin]{@link Client#begin}.
   *
   * ```javascript
   *        var tx = client.begin(txId);
   *        //...
   *        tx.abort();
   * ```
   */
  abort(transactionId) {
    this._checkConnection();
    this._stompHandler.abort(transactionId);
  }
  /**
   * ACK a message. It is preferable to acknowledge a message by calling [ack]{@link IMessage#ack} directly
   * on the {@link IMessage} handled by a subscription callback:
   *
   * ```javascript
   *        var callback = function (message) {
   *          // process the message
   *          // acknowledge it
   *          message.ack();
   *        };
   *        client.subscribe(destination, callback, {'ack': 'client'});
   * ```
   */
  ack(messageId, subscriptionId, headers = {}) {
    this._checkConnection();
    this._stompHandler.ack(messageId, subscriptionId, headers);
  }
  /**
   * NACK a message. It is preferable to acknowledge a message by calling [nack]{@link IMessage#nack} directly
   * on the {@link IMessage} handled by a subscription callback:
   *
   * ```javascript
   *        var callback = function (message) {
   *          // process the message
   *          // an error occurs, nack it
   *          message.nack();
   *        };
   *        client.subscribe(destination, callback, {'ack': 'client'});
   * ```
   */
  nack(messageId, subscriptionId, headers = {}) {
    this._checkConnection();
    this._stompHandler.nack(messageId, subscriptionId, headers);
  }
};

// src/utilities/socket.ts
var Socket = class {
  stompClient;
  subscription;
  callback;
  onSocketStatusChange;
  id;
  getToken;
  webSocketURL;
  subscriptionURL;
  datadogService = dependencyInjectionContainer.resolve("datadogService");
  logger = dependencyInjectionContainer.resolve("loggerService");
  constructor({
    callback,
    getToken,
    id: id2,
    onSocketStatusChange,
    subscriptionURL,
    webSocketURL
  }) {
    this.logger.debug(`Socket was instantiated with options: `, {
      id: id2,
      subscriptionURL,
      webSocketURL
    });
    this.id = id2;
    this.getToken = getToken;
    this.webSocketURL = webSocketURL;
    this.subscriptionURL = subscriptionURL;
    this.callback = callback;
    this.onSocketStatusChange = onSocketStatusChange ?? (() => {
    });
  }
  connect() {
    this.logger.trace("Socket - connect");
    const config = {
      appendMissingNULLonIncoming: true,
      brokerURL: this.webSocketURL,
      connectHeaders: {},
      discardWebsocketOnCommFailure: true,
      forceBinaryWSFrames: true,
      heartbeatIncoming: 1e4,
      heartbeatOutgoing: 0,
      logRawCommunication: true,
      maxWebSocketChunkSize: 8 * 1024 * 1024,
      reconnectDelay: 1e3
    };
    this.stompClient = new Client(config);
    this.stompClient.onConnect = (frame) => {
      this.logger.trace(`Socket - onConnect`, frame);
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = void 0;
      }
      this.subscription = this.stompClient?.subscribe(
        this.subscriptionURL,
        (message) => {
          try {
            const body = JSON.parse(message.body);
            this.callback(body);
          } catch (error) {
            console.error(error);
          }
        },
        { id: this.id }
      );
      this.onSocketStatusChange(StompSocketState.OPEN);
      this.datadogService?.addAction("EventRelaySocketConnect", {
        frame,
        id: this.id,
        subscriptionURL: this.subscriptionURL,
        webSocketURL: this.webSocketURL
      });
      this.send("/public/token", null, "");
      this.callback({
        date: (/* @__PURE__ */ new Date()).getTime(),
        name: InternalEvents.SocketConnectedNotification,
        workitemId: this.id
      });
    };
    this.stompClient.onDisconnect = (frame) => {
      this.logger.error(`Socket - onDisconnect - stompClientState [${this.stompClient?.state}]`);
      this.datadogService?.addAction("EventRelaySocketDisconnect", {
        frame,
        id: this.id,
        stompClientState: this.stompClient?.state,
        subscriptionURL: this.subscriptionURL,
        webSocketURL: this.webSocketURL
      });
      this.callback({
        date: (/* @__PURE__ */ new Date()).getTime(),
        name: InternalEvents.SocketDisconnectedNotification,
        workitemId: this.id
      });
    };
    this.stompClient.onWebSocketClose = () => {
      this.logger.info(`Socket - onWebSocketClose - stompClientState [${this.stompClient?.state}]`);
      this.datadogService?.addAction("EventRelaySocketClose", {
        id: this.id,
        stompClientState: this.stompClient?.state,
        subscriptionURL: this.subscriptionURL,
        webSocketURL: this.webSocketURL
      });
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }
      this.onSocketStatusChange(StompSocketState.CLOSED);
      this.callback({
        date: (/* @__PURE__ */ new Date()).getTime(),
        name: InternalEvents.SocketClosedNotification,
        workitemId: this.id
      });
    };
    this.stompClient.onWebSocketError = () => {
      this.logger.error(
        `Socket - onWebSocketError - stompClientState [${this.stompClient?.state}]`
      );
      this.datadogService?.addAction("EventRelaySocketError", {
        id: this.id,
        stompClientState: this.stompClient?.state,
        subscriptionURL: this.subscriptionURL,
        webSocketURL: this.webSocketURL
      });
      this.callback({
        date: (/* @__PURE__ */ new Date()).getTime(),
        name: InternalEvents.SocketErrordNotification,
        workitemId: this.id
      });
    };
    this.stompClient.onChangeState = (state) => {
      this.logger.info(`Socket - onChangeState - ActivationState changed to [${state}]`);
      this.callback({
        date: (/* @__PURE__ */ new Date()).getTime(),
        name: InternalEvents.SocketStateChangedNotification,
        workitemId: this.id
      });
    };
    this.stompClient.onStompError = (frame) => {
      this.logger.error(`Socket - onStompError`, frame);
      this.datadogService?.addAction("EventRelayStompError", {
        frame,
        id: this.id,
        stompClientState: this.stompClient?.state,
        subscriptionURL: this.subscriptionURL,
        webSocketURL: this.webSocketURL
      });
      this.callback({
        date: (/* @__PURE__ */ new Date()).getTime(),
        name: InternalEvents.SocketErrordNotification,
        workitemId: this.id
      });
    };
    this.stompClient.activate();
  }
  /**
   * Disconnects the socket connection.
   *
   * @remarks
   * This method logs a message, unsubscribes from any active subscriptions, and deactivates the STOMP client.
   *
   * @returns A promise that resolves once the disconnection is complete.
   */
  async disconnect() {
    this.logger.trace("Socket - disconnect");
    if (!this.stompClient) {
      return;
    }
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    await this.stompClient.deactivate();
  }
  send(destination, headers, message) {
    if (!this.stompClient) {
      return;
    }
    this.logger.debug(`Socket - sending ${this.id} to ${destination} message ${message}`);
    const _headers = {
      Authorization: this.getToken(),
      ...headers
    };
    this.stompClient.publish({
      body: message || "empty",
      destination,
      headers: _headers
    });
  }
  /**
   * Sends binary data to the specified destination.
   * @param destination - The destination to send the data to.
   * @param data - The binary data to send.
   */
  sendBinary(destination, data) {
    if (!this.stompClient) {
      return;
    }
    this.stompClient.publish({
      binaryBody: data,
      body: "{}",
      destination,
      headers: {
        Authorization: this.getToken(),
        "content-type": "application/octet-stream"
      }
    });
  }
};

// src/utilities/util.ts
var id = (/* @__PURE__ */ new Date()).getTime();
var isValidEmail = (email) => {
  const pattern = new RegExp(
    // eslint-disable-next-line regexp/no-unused-capturing-group
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/i
  );
  return pattern.test(email);
};
var generateNewId = () => {
  const increment = Math.floor(Math.random() * 16777216).toString(16);
  const pid = Math.floor(Math.random() * 65536).toString(16);
  const machine = Math.floor(Math.random() * 16777216).toString(16);
  const timestamp = Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3).toString(16);
  return "00000000".slice(0, Math.max(0, 8 - timestamp.length)) + timestamp + "000000".slice(0, Math.max(0, 6 - machine.length)) + machine + "0000".slice(0, Math.max(0, 4 - pid.length)) + pid + "000000".slice(0, Math.max(0, 6 - increment.length)) + increment;
};
var getUniqueId = () => {
  return ++id;
};
var getUniqueIdAsString = () => {
  return `refId${getUniqueId()}`;
};
var formatDuration = (seconds) => {
  if (seconds <= 0) return "just now";
  const units = [
    { label: "d", value: 86400 },
    { label: "h", value: 3600 },
    { label: "m", value: 60 },
    { label: "s", value: 1 }
  ];
  const parts = [];
  for (const unit of units) {
    const amount = Math.floor(seconds / unit.value);
    if (amount > 0) {
      parts.push(`${amount}${unit.label}`);
      seconds -= amount * unit.value;
    }
  }
  return parts.join(" ");
};
var sortObject = (array, ascending, getter) => {
  array.sort((a, b) => {
    if (getter(a) < getter(b)) {
      return -1 * ascending;
    }
    if (getter(a) > getter(b)) {
      return 1 * ascending;
    }
    return 0;
  });
};
var adjustComponent = (field) => {
  if (!field.type) {
    return "";
  }
  if (["percentage"].includes(field.type)) {
    return "progress";
  }
  if (["int", "long", "objectId", "string"].includes(field.type)) {
    return "string";
  }
  return field.type;
};
var pick = (obj, keys) => {
  return keys.reduce((acc, key) => {
    if (obj && obj[key] !== void 0) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
};
var freezeItem = (item) => {
  const newItem = Object.freeze(item);
  return newItem;
};

// src/utilities/rxjs-operators.ts
import { Observable } from "rxjs";
function ofType(eventTypes) {
  return function(source) {
    return new Observable((subscriber) => {
      source.subscribe({
        complete() {
          subscriber.complete();
        },
        error(error) {
          subscriber.error(error);
        },
        next(value) {
          if (!(value instanceof NotificationEvent)) {
            return;
          }
          const events = typeof eventTypes === "string" ? [eventTypes] : eventTypes;
          if (events.some((eventType) => value.getType() === eventType)) {
            subscriber.next(value);
          }
        }
      });
    });
  };
}
function ofExternalType(eventTypes) {
  return ofType(eventTypes);
}

// src/utilities/clone-deep.ts
function cloneDeep(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// src/utilities/stats/parser.ts
var getIsAudio = (reportItem) => {
  const mediaType = reportItem["mediaType"] || reportItem["kind"];
  if (!["audio", "video"].includes(mediaType)) {
    const { id: reportId } = reportItem;
    if (!reportId) {
      return false;
    }
    if (JSON.stringify(reportId).includes("Video")) {
      return false;
    }
    if (JSON.stringify(reportId).includes("Audio")) {
      return true;
    }
    return false;
  }
  return mediaType === "audio";
};
var allowedReportTypes = /* @__PURE__ */ new Set([
  "candidate-pair",
  "inbound-rtp",
  "outbound-rtp",
  "remote-outbound-rtp",
  "remote-inbound-rtp",
  "track",
  "transport",
  "codec"
]);
var prepareConnectionStats = (candidatePair, stats) => {
  if (!candidatePair || !stats) {
    return {};
  }
  const connectionStats = { ...candidatePair };
  if (connectionStats["remoteCandidateId"]) {
    const candidate = stats.get(
      connectionStats["remoteCandidateId"]
    );
    connectionStats["remote"] = { ...candidate };
  }
  if (connectionStats["localCandidateId"]) {
    const candidate = stats.get(
      connectionStats["localCandidateId"]
    );
    connectionStats["local"] = { ...candidate };
  }
  return connectionStats;
};
var mapConnectionStatsIfNecessary = (mappedStats, statsItem, stats) => {
  if (!!mappedStats.connection.id || !statsItem["transportId"]) {
    return;
  }
  const transportStats = stats.get(statsItem["transportId"]);
  if (transportStats?.["selectedCandidatePairId"]) {
    const candidatePair = stats.get(transportStats["selectedCandidatePairId"]);
    mappedStats.connection = prepareConnectionStats(candidatePair, stats);
  }
};
var updateMappedStatsWithReportItemData = (statsItem, mappedStats, stats) => {
  const type = statsItem["type"];
  if (type === "candidate-pair" && statsItem["state"] === "succeeded" && statsItem["nominated"]) {
    mappedStats.connection = prepareConnectionStats(statsItem, stats);
    return;
  }
  const isAudio = getIsAudio(statsItem);
  if (!isAudio) {
    return;
  }
  if (type === "outbound-rtp") {
    const trackInfo = stats.get(statsItem["trackId"]) || stats.get(statsItem["mediaSourceId"]) || stats.get(statsItem["trackIdentifier"]) || null;
    const statsToAdd = {
      ...statsItem,
      track: { ...trackInfo }
    };
    mappedStats.audio.outbound.push(statsToAdd);
    return;
  }
  if (type === "inbound-rtp") {
    const trackInfo = stats.get(statsItem["trackId"]) || stats.get(statsItem["mediaSourceId"]) || stats.get(statsItem["trackIdentifier"]) || null;
    mapConnectionStatsIfNecessary(mappedStats, statsItem, stats);
    const statsToAdd = {
      ...statsItem,
      track: { ...trackInfo }
    };
    mappedStats.audio.inbound.push(statsToAdd);
    if (statsItem["codecId"]) {
      const codecItem = stats.get(statsItem["codecId"]);
      mappedStats.codec = codecItem["mimeType"];
    }
    return;
  }
  if (type === "remote-outbound-rtp") {
    mappedStats.remote.audio.outbound.push({
      ...statsItem
    });
    return;
  }
  if (type === "remote-inbound-rtp") {
    mapConnectionStatsIfNecessary(mappedStats, statsItem, stats);
    mappedStats.remote.audio.inbound.push({
      ...statsItem
    });
  }
};
var mapReportsStats = (rtcStats) => {
  const mappedStats = {
    audio: {
      inbound: [],
      outbound: []
    },
    codec: "",
    connection: {},
    remote: {
      audio: {
        inbound: [],
        outbound: []
      }
    }
  };
  rtcStats.forEach((reportItem) => {
    if (!allowedReportTypes.has(reportItem["type"])) {
      return;
    }
    updateMappedStatsWithReportItemData(reportItem, mappedStats, rtcStats);
  });
  return mappedStats;
};
var checkIsConnectionClosed = (c) => {
  if (!c.iceConnectionState || !c.connectionState) {
    return false;
  }
  return c.iceConnectionState === "closed" || c.connectionState === "closed";
};
var parseRtcPeerConnectionStats = async (rtcPeerConnection) => {
  if (checkIsConnectionClosed(rtcPeerConnection)) {
    return void 0;
  }
  try {
    const allStats = await rtcPeerConnection.getStats();
    return mapReportsStats(allStats);
  } catch (error) {
    return void 0;
  }
};
var parseTwilioRTCReportStats = async (twilioRtcStatsGetter) => {
  const mappedStats = {
    availableIncomingBitrate: 0,
    availableOutgoingBitrate: 0,
    codec: "",
    currentRoundTripTime: 0,
    localAudioLevel: 0,
    localJitter: 0,
    localPacketsLost: 0,
    localTimestamp: 0,
    packetsReceived: 0,
    packetsSent: 0,
    remoteAudioLevel: 0,
    remoteJitter: 0,
    remotePacketsLost: 0,
    remoteTimestamp: 0,
    totalRoundTripTime: 0
  };
  try {
    const reports = await twilioRtcStatsGetter.getStats();
    if (reports.length <= 0) {
      return void 0;
    }
    const stats = reports[0];
    stats.localAudioTrackStats.forEach((track) => {
      if (mappedStats.codec === "") {
        mappedStats.codec = track.codec;
      }
      mappedStats.localAudioLevel += track.audioLevel;
      mappedStats.localJitter += track.jitter;
      mappedStats.localPacketsLost += track.packetsLost;
      mappedStats.packetsSent += track.packetsSent;
      mappedStats.localTimestamp += track.timestamp;
    });
    mappedStats.localAudioLevel /= stats.localAudioTrackStats.length;
    mappedStats.localJitter /= stats.localAudioTrackStats.length;
    mappedStats.localPacketsLost /= stats.localAudioTrackStats.length;
    mappedStats.localTimestamp /= stats.localAudioTrackStats.length;
    mappedStats.packetsSent /= stats.localAudioTrackStats.length;
    stats.remoteAudioTrackStats.forEach((track) => {
      if (mappedStats.codec === "") {
        mappedStats.codec = track.codec;
      }
      mappedStats.remoteAudioLevel += track.audioLevel;
      mappedStats.remoteJitter += track.jitter;
      mappedStats.remotePacketsLost += track.packetsLost;
      mappedStats.packetsReceived += track.packetsReceived;
      mappedStats.remoteTimestamp += track.timestamp;
    });
    mappedStats.remoteAudioLevel /= stats.remoteAudioTrackStats.length;
    mappedStats.remoteJitter /= stats.remoteAudioTrackStats.length;
    mappedStats.remotePacketsLost /= stats.remoteAudioTrackStats.length;
    mappedStats.packetsReceived /= stats.remoteAudioTrackStats.length;
    mappedStats.remoteTimestamp /= stats.remoteAudioTrackStats.length;
    stats.iceCandidatePairStats.forEach((pair) => {
      if (pair.activeCandidatePair) {
        mappedStats.availableIncomingBitrate = pair.availableIncomingBitrate;
        mappedStats.availableOutgoingBitrate = pair.availableOutgoingBitrate;
        mappedStats.currentRoundTripTime = pair.currentRoundTripTime;
        mappedStats.totalRoundTripTime = pair.totalRoundTripTime;
      }
    });
    return mappedStats;
  } catch (error) {
    return void 0;
  }
};

// src/utilities/stats/quality.ts
var RO = 93.2;
var calculateRFactor = (effectiveLatency, packetLoss) => {
  let rFactor;
  if (effectiveLatency < 160) {
    rFactor = RO - effectiveLatency / 40;
  } else {
    rFactor = RO - (effectiveLatency - 120) / 10;
  }
  rFactor -= packetLoss * 2.5;
  return rFactor > 0 ? rFactor : 0;
};
var calculateMOS = ({
  jitter,
  packetLoss,
  rtt
}) => {
  const effectiveLatency = rtt + jitter * 2 + 10;
  const rFactor = calculateRFactor(effectiveLatency, packetLoss);
  return 1 + 0.035 * rFactor + 7e-6 * rFactor * (rFactor - 60) * (100 - rFactor);
};
var calculateTwilioQualityMetrics = (data, previousStats) => {
  if (!previousStats) {
    return void 0;
  }
  if (!data.packetsReceived || !data.packetsSent) {
    return void 0;
  }
  const {
    availableIncomingBitrate: incomingBitrate,
    availableOutgoingBitrate: outgoingBitrate,
    currentRoundTripTime,
    localAudioLevel,
    localJitter: jitter,
    localPacketsLost: totalLocalPacketsLost,
    localTimestamp: timestamp,
    packetsReceived: totalPacketsReceived,
    packetsSent: totalPacketsSent,
    remoteAudioLevel,
    remotePacketsLost: totalRemotePacketsLost
  } = data;
  const totalBytesReceived = currentRoundTripTime / 1e3 * incomingBitrate / 8;
  const totalBytesSent = currentRoundTripTime / 1e3 * outgoingBitrate / 8;
  const totalPacketsLost = totalLocalPacketsLost + totalRemotePacketsLost;
  const {
    availableIncomingBitrate: previousIncomingBitrate,
    availableOutgoingBitrate: previousOutgoingBitrate,
    currentRoundTripTime: previousRoundTripTime,
    localPacketsLost: previousTotalLocalPacketsLost,
    packetsReceived: previousTotalPacketsReceived,
    packetsSent: previousTotalPacketsSent,
    remotePacketsLost: previousTotalRemotePacketsLost
  } = previousStats;
  const previousTotalBytesReceived = previousRoundTripTime / 1e3 * previousIncomingBitrate / 8;
  const previousTotalBytesSent = previousRoundTripTime / 1e3 * previousOutgoingBitrate / 8;
  const previousTotalPacketsLost = previousTotalLocalPacketsLost + previousTotalRemotePacketsLost;
  const rttMs = currentRoundTripTime;
  const deltaBytesReceived = totalBytesReceived - previousTotalBytesReceived;
  const deltaBytesSent = totalBytesSent - previousTotalBytesSent;
  const deltaPacketsSent = totalPacketsSent - previousTotalPacketsSent;
  const deltaPacketsReceived = totalPacketsReceived - previousTotalPacketsReceived;
  const deltaPacketsLost = totalPacketsLost - previousTotalPacketsLost;
  const packetLoss = deltaPacketsReceived && deltaPacketsLost ? deltaPacketsLost / (deltaPacketsReceived + deltaPacketsLost) * 100 : 0;
  const totalPacketLoss = totalPacketsReceived && totalPacketsLost ? totalPacketsLost / (totalPacketsReceived + totalPacketsLost) * 100 : 0;
  const mos = calculateMOS({ jitter, packetLoss, rtt: rttMs });
  return {
    audioInputLevel: localAudioLevel,
    audioOutputLevel: remoteAudioLevel,
    bitrateIncoming: incomingBitrate,
    bitrateOutgoing: outgoingBitrate,
    bytesReceived: deltaBytesReceived,
    bytesSent: deltaBytesSent,
    codecName: data.codec,
    jitter,
    mos,
    packetsLost: deltaPacketsLost,
    packetsLostFraction: packetLoss,
    packetsReceived: deltaPacketsReceived,
    packetsSent: deltaPacketsSent,
    rtt: rttMs,
    timestamp,
    totals: {
      bytesReceived: totalBytesReceived,
      bytesSent: totalBytesSent,
      packetsLost: totalPacketsLost,
      packetsLostFraction: totalPacketLoss,
      packetsReceived: totalPacketsReceived,
      packetsSent: totalPacketsSent
    }
  };
};
var calculateQualityMetrics = (data, previousStats) => {
  if (!data.audio.inbound.length || !data.audio.outbound.length) {
    return void 0;
  }
  if (!previousStats) {
    return void 0;
  }
  if (!previousStats.audio.inbound.length || !previousStats.audio.outbound.length) {
    return void 0;
  }
  const inboundStats = data.audio.inbound[0];
  const outboundStats = data.audio.outbound[0];
  const previousInboundStats = previousStats.audio.inbound[0];
  const previousOutboundStats = previousStats.audio.outbound[0];
  const hasRemoteStats = (
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- defensive check for optional remote stats
    (data.remote?.audio?.inbound?.length ?? 0) > 0 && // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition -- defensive check for optional remote stats
    (previousStats.remote?.audio?.inbound?.length ?? 0) > 0
  );
  const totalBytesReceived = inboundStats?.bytesReceived ?? 0;
  const jitter = inboundStats?.jitter ?? 0;
  const totalLocalPacketsLost = inboundStats?.packetsLost ?? 0;
  const totalPacketsReceived = inboundStats?.packetsReceived ?? 0;
  const timestamp = inboundStats?.timestamp ?? Date.now();
  const totalBytesSent = outboundStats?.bytesSent ?? 0;
  const totalPacketsSent = outboundStats?.packetsSent ?? 0;
  const totalRemotePacketsLost = hasRemoteStats ? data.remote.audio.inbound[0]?.packetsLost ?? 0 : 0;
  const totalPacketsLost = totalLocalPacketsLost + totalRemotePacketsLost;
  const previousTotalBytesReceived = previousInboundStats?.bytesReceived ?? 0;
  const previousTotalLocalPacketsLost = previousInboundStats?.packetsLost ?? 0;
  const previousTotalPacketsReceived = previousInboundStats?.packetsReceived ?? 0;
  const previousTimestamp = previousInboundStats?.timestamp ?? Date.now();
  const previousTotalBytesSent = previousOutboundStats?.bytesSent ?? 0;
  const previousTotalPacketsSent = previousOutboundStats?.packetsSent ?? 0;
  const previousTotalRemotePacketsLost = hasRemoteStats ? previousStats.remote.audio.inbound[0]?.packetsLost ?? 0 : 0;
  const previousTotalPacketsLost = previousTotalLocalPacketsLost + previousTotalRemotePacketsLost;
  const rttMs = hasRemoteStats ? 1e3 * data.connection.currentRoundTripTime || (data.remote.audio.inbound[0]?.roundTripTime ?? 0) : 0;
  const deltaBytesReceived = totalBytesReceived - previousTotalBytesReceived;
  const deltaBytesSent = totalBytesSent - previousTotalBytesSent;
  const deltaPacketsSent = totalPacketsSent - previousTotalPacketsSent;
  const deltaPacketsReceived = totalPacketsReceived - previousTotalPacketsReceived;
  const deltaPacketsLost = totalPacketsLost - previousTotalPacketsLost;
  const packetLoss = deltaPacketsReceived && deltaPacketsLost ? deltaPacketsLost / (deltaPacketsReceived + deltaPacketsLost) * 100 : 0;
  const totalPacketLoss = totalPacketsReceived && totalPacketsLost ? totalPacketsLost / (totalPacketsReceived + totalPacketsLost) * 100 : 0;
  const mos = calculateMOS({ jitter, packetLoss, rtt: rttMs });
  const deltaTime = (timestamp - previousTimestamp) / 1e3;
  const bitrateIncoming = 8 * deltaBytesReceived / deltaTime;
  const bitrateOutgoing = 8 * deltaBytesSent / deltaTime;
  return {
    audioInputLevel: data.audio.outbound[0]?.track?.audioLevel ?? 0,
    audioOutputLevel: data.audio.inbound[0]?.audioLevel ?? 0,
    bitrateIncoming,
    bitrateOutgoing,
    bytesReceived: deltaBytesReceived,
    bytesSent: deltaBytesSent,
    codecName: data.codec,
    jitter,
    mos,
    packetsLost: deltaPacketsLost,
    packetsLostFraction: packetLoss,
    packetsReceived: deltaPacketsReceived,
    packetsSent: deltaPacketsSent,
    rtt: rttMs,
    timestamp,
    totals: {
      bytesReceived: totalBytesReceived,
      bytesSent: totalBytesSent,
      packetsLost: totalPacketsLost,
      packetsLostFraction: totalPacketLoss,
      packetsReceived: totalPacketsReceived,
      packetsSent: totalPacketsSent
    }
  };
};

// src/utilities/equal-set.ts
var equalSet = (a, b) => a.size === b.size && Array.from(a).every((value) => b.has(value));

// src/utilities/stats/rtc-quality-monitor.ts
var WARNING_NAMES = {
  QualitySample: "sample",
  QualityWarningCleared: "warning-cleared",
  QualityWarningHighJitter: "high-jitter",
  QualityWarningHighPacketLoss: "high-packet-loss",
  QualityWarningHighRTT: "high-rtt",
  QualityWarningLowMos: "low-mos"
};
var WARNING_CONFIG = {
  clearAlarmWhen: 1,
  interval: 1e3,
  max: {
    jitter: { value: 30, warningName: WARNING_NAMES.QualityWarningHighJitter },
    packetsLostFraction: { value: 1, warningName: WARNING_NAMES.QualityWarningHighPacketLoss },
    rtt: { value: 400, warningName: WARNING_NAMES.QualityWarningHighRTT }
  },
  min: {
    mos: { value: 3, warningName: WARNING_NAMES.QualityWarningLowMos }
  },
  raiseAlarmWhen: 3
};
var RTCCallQualityMonitor = class {
  previousRTCStatsParsed;
  previousTwilioRTCStatsParsed;
  qualityMetricsInterval;
  datadogInterval;
  initialDelayTimeout;
  rtcStatsGetter;
  twilioRTCStatsGetter;
  samplePool;
  audioQualityServiceInstance;
  eventsService;
  activeAlarms;
  datadogService;
  logger = dependencyInjectionContainer.resolve("loggerService");
  constructor(rtcStatsGetter, twilioRTCStatsGetter) {
    this.rtcStatsGetter = rtcStatsGetter;
    this.twilioRTCStatsGetter = twilioRTCStatsGetter;
    this.samplePool = [];
    this.eventsService = dependencyInjectionContainer.resolve("eventsService");
    this.audioQualityServiceInstance = dependencyInjectionContainer.resolve("audioQualityService");
    this.datadogService = dependencyInjectionContainer.resolve("datadogService");
    this.activeAlarms = /* @__PURE__ */ new Set();
  }
  /**
   * Starts the quality metrics interval, populate the sample pool
   * and evaluate the quality of the call
   *
   * Includes an initial delay to allow the connection to stabilize before
   * starting aggressive stats collection, reducing noise from transitional states.
   */
  startQualityMetricsMonitor(callId) {
    this.previousTwilioRTCStatsParsed = void 0;
    this.previousRTCStatsParsed = void 0;
    const INITIAL_DELAY = 2e3;
    const NORMAL_INTERVAL = WARNING_CONFIG.interval;
    this.initialDelayTimeout = setTimeout(() => {
      this.qualityMetricsInterval = setInterval(() => {
        if (!this.rtcStatsGetter && !this.twilioRTCStatsGetter) {
          this.stopMonitor();
          this.logger.error("RTCCallQualityMonitor - No StatsGetter provided");
          return;
        }
        if (this.rtcStatsGetter) {
          const connectionState = this.rtcStatsGetter.connectionState;
          if (connectionState === "closed" || connectionState === "failed") {
            this.stopMonitor();
            this.logger.debug(
              `RTCCallQualityMonitor - Stopping monitor, connection state: ${connectionState}`
            );
            return;
          }
          if (connectionState === "new" || connectionState === "connecting") {
            this.logger.debug(
              `RTCCallQualityMonitor - Skipping stats collection during connection setup, state: ${connectionState}`
            );
            return;
          }
          if (connectionState !== "connected") {
            this.logger.debug(
              `RTCCallQualityMonitor - Skipping stats collection, state: ${connectionState}`
            );
            return;
          }
        }
        let qualityMetricsPromise;
        if (this.twilioRTCStatsGetter) {
          qualityMetricsPromise = this.generateTwilioCallQualityStats();
        } else if (this.rtcStatsGetter) {
          qualityMetricsPromise = this.generateCallQualityStats();
        } else {
          this.stopMonitor();
          this.logger.error("RTCCallQualityMonitor - No StatsGetter provided");
          return;
        }
        qualityMetricsPromise.then(async (callQualityStats) => {
          if (callQualityStats.qualityMetrics) {
            this.samplePool.unshift(callQualityStats.qualityMetrics);
            this.samplePool = this.samplePool.slice(0, 5);
          }
          if (this.samplePool.length === 5) {
            await this.verifySampleQuality().then(() => {
            });
          }
        }).catch((error) => {
          this.logger.error("RTCCallQualityMonitor - error in quality metrics monitor", error);
        });
      }, NORMAL_INTERVAL);
      this.datadogInterval = setInterval(() => {
        const sample = this.samplePool[0];
        if (sample) {
          this.datadogService?.addAction("AudioQualitySample", { ...sample, callId });
        }
      }, 15e3);
      this.logger.debug(
        `RTCCallQualityMonitor - Started quality metrics collection after ${INITIAL_DELAY}ms stabilization delay`
      );
    }, INITIAL_DELAY);
  }
  /**
   * Stops the quality metrics interval if running and discards the collected samples
   */
  stopMonitor() {
    this.activeAlarms.clear();
    this.samplePool = [];
    if (this.initialDelayTimeout !== void 0) {
      clearTimeout(this.initialDelayTimeout);
    }
    if (this.qualityMetricsInterval !== void 0) {
      clearInterval(this.qualityMetricsInterval);
    }
    if (this.datadogInterval !== void 0) {
      clearInterval(this.datadogInterval);
    }
    const warnings = {
      highJitter: false,
      highPacketLoss: false,
      highRtt: false,
      lowMos: false
    };
    this.eventsService.emitExternal(ExternalEvents.QualityWarningsChangedNotification, warnings);
  }
  async generateCallQualityStats() {
    const callQualityStats = {
      qualityMetrics: void 0,
      stats: void 0
    };
    if (!this.rtcStatsGetter) {
      return callQualityStats;
    }
    try {
      callQualityStats.stats = await parseRtcPeerConnectionStats(this.rtcStatsGetter);
      if (callQualityStats.stats && !!this.previousRTCStatsParsed) {
        callQualityStats.qualityMetrics = calculateQualityMetrics(
          callQualityStats.stats,
          this.previousRTCStatsParsed
        );
      }
      this.previousRTCStatsParsed = callQualityStats.stats;
      return callQualityStats;
    } catch (error) {
      this.logger.error("RTCCallQualityMonitor caught:", error);
      return callQualityStats;
    }
  }
  async generateTwilioCallQualityStats() {
    const callQualityStats = {
      qualityMetrics: void 0,
      stats: void 0
    };
    if (!this.twilioRTCStatsGetter) {
      return callQualityStats;
    }
    try {
      callQualityStats.stats = await parseTwilioRTCReportStats(this.twilioRTCStatsGetter);
      if (callQualityStats.stats && !!this.previousTwilioRTCStatsParsed) {
        callQualityStats.qualityMetrics = calculateTwilioQualityMetrics(
          callQualityStats.stats,
          this.previousTwilioRTCStatsParsed
        );
      }
      this.previousTwilioRTCStatsParsed = callQualityStats.stats;
      return callQualityStats;
    } catch (error) {
      this.logger.error("RTCCallQualityMonitor caught:", error);
      return callQualityStats;
    }
  }
  async verifySampleQuality() {
    const warningCount = {
      jitter: 0,
      mos: 0,
      packetsLostFraction: 0,
      rtt: 0
    };
    const currentSamplePool = this.samplePool.slice();
    currentSamplePool.forEach((sample) => {
      for (const stat of Object.keys(WARNING_CONFIG.max)) {
        if (sample[stat] >= WARNING_CONFIG.max[stat].value) {
          this.logger.warn(
            `RTCQualityMonitor warning: '${stat}' is above the maximum threshold with value ${sample[stat]}`
          );
          warningCount[stat]++;
        }
      }
      for (const stat of Object.keys(WARNING_CONFIG.min)) {
        if (sample[stat] <= WARNING_CONFIG.min[stat].value) {
          this.logger.warn(
            `RTCQualityMonitor warning: '${stat}' is below the minimum threshold with value ${sample[stat]}`
          );
          warningCount[stat]++;
        }
      }
    });
    const previousActiveAlarms = new Set(this.activeAlarms);
    Object.entries(warningCount).forEach(([stat, count]) => {
      const threshold = {
        ...stat in WARNING_CONFIG.max ? { name: "max", value: WARNING_CONFIG.max[stat].value } : {
          name: "min",
          value: WARNING_CONFIG.min[stat].value
        }
      };
      const warningName = threshold.name === "max" ? WARNING_CONFIG.max[stat].warningName : WARNING_CONFIG.min[stat].warningName;
      if (count >= WARNING_CONFIG.raiseAlarmWhen && !this.activeAlarms.has(warningName)) {
        this.logger.warn(`RTCCallQualityMonitor - Warning: '${warningName}' alarm raised`);
        this.activeAlarms.add(warningName);
      } else if (count <= WARNING_CONFIG.clearAlarmWhen && this.activeAlarms.has(warningName)) {
        this.activeAlarms.delete(warningName);
      }
    });
    if (!equalSet(previousActiveAlarms, this.activeAlarms)) {
      const message = {
        highJitter: this.activeAlarms.has(WARNING_NAMES.QualityWarningHighJitter),
        highPacketLoss: this.activeAlarms.has(WARNING_NAMES.QualityWarningHighPacketLoss),
        highRtt: this.activeAlarms.has(WARNING_NAMES.QualityWarningHighRTT),
        lowMos: this.activeAlarms.has(WARNING_NAMES.QualityWarningLowMos)
      };
      this.eventsService.emitExternal(ExternalEvents.QualityWarningsChangedNotification, message);
      try {
        await this.audioQualityServiceInstance.sendCurrentWarnings(message);
      } catch (error) {
        this.logger.error("RTCCallQualityMonitor - error reporting warnings");
      }
    }
  }
};

// src/utilities/stats/twilio-stats-compilation.ts
var DEFAULT_WARNINGS = {
  ["high-jitter"]: false,
  ["high-packet-loss"]: false,
  ["high-rtt"]: false,
  ["low-mos"]: false
};
var TwilioStatsCompilation = class {
  warnings;
  audioQualityServiceInstance;
  logger = dependencyInjectionContainer.resolve("loggerService");
  constructor() {
    this.audioQualityServiceInstance = dependencyInjectionContainer.resolve("audioQualityService");
    this.warnings = { ...DEFAULT_WARNINGS };
  }
  /**
   * Report to the `TwilioStatsCompilation` that a new warning has been raised
   * @param warningName one of `high-jitter`, `high-packet-loss`, `high-rtt`, `low-mos`
   */
  handleWebRTCWarning(warningName) {
    if (Object.keys(this.warnings).includes(warningName) && !this.warnings[warningName]) {
      this.warnings[warningName] = true;
      this.sendWarnings().catch(() => {
      });
    }
  }
  /**
   * Report to the `TwilioStatsCompilation` that a previously reported warning has been cleared
   * @param warningName one of `high-jitter`, `high-packet-loss`, `high-rtt`, `low-mos`
   */
  handleWebRTCWarningCleared(warningName) {
    if (Object.keys(this.warnings).includes(warningName) && this.warnings[warningName]) {
      this.warnings[warningName] = false;
      this.sendWarnings().catch(() => {
      });
    }
  }
  async sendWarnings() {
    const warningMessage = {
      highJitter: this.warnings["high-jitter"],
      highPacketLoss: this.warnings["high-packet-loss"],
      highRtt: this.warnings["high-rtt"],
      lowMos: this.warnings["low-mos"]
    };
    try {
      await this.audioQualityServiceInstance.sendCurrentWarnings(warningMessage);
    } catch (error) {
      this.logger.error("TwilioStatsCompilation - sendWarnings - error", error);
    }
  }
};

// src/utilities/stats/speedTester.ts
var TEST_KB = 1024 * 256;
var SpeedTester = class {
  testSize = TEST_KB;
  uploadTime;
  downloadTime;
  currentSpeedTestCallback;
  clear() {
    if (this.currentSpeedTestCallback !== void 0) {
      this.currentSpeedTestCallback(null, new Error("Speed Test cancelled"));
    }
    this.currentSpeedTestCallback = void 0;
    this.downloadTime = void 0;
    this.uploadTime = void 0;
  }
  speedTest(socket) {
    return new Promise((resolve, reject) => {
      const bytes = this.testSize;
      socket.send("#SPU " + String(bytes));
      const loops = bytes / 1024;
      const rem = bytes % 1024;
      const data = new Array(1024).join(".");
      for (let i = 0; i < loops; i++) {
        socket.send("#SPB " + data);
      }
      if (rem) {
        socket.send("#SPB " + data);
      }
      socket.send("#SPE");
      this.currentSpeedTestCallback = (payload, error) => {
        if (error) {
          reject(error);
        } else {
          resolve(payload);
        }
      };
    });
  }
  reportSpeedTestEnd() {
    if (this.downloadTime && this.uploadTime && this.currentSpeedTestCallback) {
      const uploadTime = this.uploadTime;
      const downloadTime = this.downloadTime;
      const uploadKbps = Number((this.testSize * 8 / (uploadTime / 1e3) / 1024).toFixed(0));
      const downloadKbps = Number((this.testSize * 8 / (downloadTime / 1e3) / 1024).toFixed(0));
      const cb = this.currentSpeedTestCallback;
      this.currentSpeedTestCallback = void 0;
      this.downloadTime = void 0;
      this.uploadTime = void 0;
      cb({
        downloadKbps,
        downloadTime,
        uploadKbps,
        uploadTime
      });
    }
  }
  /**
   * Returns if the message was handled by this message handler.
   *
   * @param messageEvent Websocket Message during speedtest
   * @returns
   */
  handleOnMessage(messageEvent) {
    if (this.currentSpeedTestCallback !== void 0 && messageEvent.data && messageEvent.data.length) {
      const strMsg = messageEvent.data;
      if (strMsg.startsWith("#") && strMsg[1] == "S" && strMsg[2] == "P") {
        if (strMsg[3] == "U") {
          this.uploadTime = parseInt(strMsg.slice(4));
        } else if (strMsg[3] == "D") {
          this.downloadTime = parseInt(strMsg.slice(4));
          this.reportSpeedTestEnd();
        }
        return true;
      }
    }
    return false;
  }
};

// src/utilities/fcmEvents.ts
var FCMNoDataFetch = [
  InternalEvents.WorkitemSummaryNotification,
  InternalEvents.WorkitemRemovedNotification
];
var FCMEmitNotifications = [
  InternalEvents.MuteStateNotification,
  InternalEvents.PhoneStateNotification,
  InternalEvents.WallboardNotification,
  InternalEvents.LogoutNotification,
  InternalEvents.ChangeStatusNotification
];
var FCMSupportedWorkitemEvents = [
  ...FCMNoDataFetch,
  InternalEvents.CallExternalTransferNotification,
  InternalEvents.ExtensionWorkitemNotification,
  InternalEvents.WorkitemStateChangeNotification,
  InternalEvents.WorkitemConversationMessageNotification,
  InternalEvents.MessageNotification,
  InternalEvents.MessageStatusNotification,
  InternalEvents.WorkitemTerminatedNotification,
  InternalEvents.WorkitemDirectConnectNotification,
  InternalEvents.NewTicketNotification,
  InternalEvents.UpdateTicketNotification,
  InternalEvents.WorkitemPredictiveNotification,
  InternalEvents.WorkitemTransferNotification
];
var FCMSupportedOfferEvents = [
  InternalEvents.OfferRejectedNotification,
  InternalEvents.OfferTerminatedByHangupNotification,
  InternalEvents.OfferAcceptedNotification,
  InternalEvents.OfferExpiredNotification
];
var SupportedFCMEvents = [
  ...FCMEmitNotifications,
  ...FCMSupportedWorkitemEvents,
  ...FCMSupportedOfferEvents
];

// src/utilities/sseClient.ts
import { Observable as Observable2 } from "rxjs";
function parseSseChunk(chunk, buffer) {
  const events = [];
  const lines = chunk.split(/\r?\n/);
  for (const line of lines) {
    if (line === "") {
      if (buffer.data.length > 0 || buffer.event !== "message") {
        events.push({
          data: buffer.data.join("\n"),
          event: buffer.event,
          ...buffer.id !== void 0 && { id: buffer.id },
          ...buffer.retry !== void 0 && { retry: buffer.retry }
        });
      }
      buffer.data = [];
      buffer.event = "message";
      buffer.id = void 0;
      buffer.retry = void 0;
      continue;
    }
    if (line.startsWith(":")) {
      continue;
    }
    const colonIndex = line.indexOf(":");
    let field;
    let value;
    if (colonIndex === -1) {
      field = line;
      value = "";
    } else {
      field = line.slice(0, colonIndex);
      value = line[colonIndex + 1] === " " ? line.slice(colonIndex + 2) : line.slice(colonIndex + 1);
    }
    switch (field) {
      case "data":
        buffer.data.push(value);
        break;
      case "event":
        buffer.event = value;
        break;
      case "id":
        buffer.id = value;
        break;
      case "retry": {
        const retryMs = parseInt(value, 10);
        if (!isNaN(retryMs)) {
          buffer.retry = retryMs;
        }
        break;
      }
    }
  }
  return events;
}
function createSseStream(path, options = {}) {
  return new Observable2((subscriber) => {
    const internalAbort = new AbortController();
    let externalAbortHandler;
    if (options.signal) {
      if (options.signal.aborted) {
        subscriber.complete();
        return;
      }
      externalAbortHandler = () => {
        internalAbort.abort();
      };
      options.signal.addEventListener("abort", externalAbortHandler, { once: true });
    }
    const run = async () => {
      const response = await axiosInstance(path, {
        adapter: "fetch",
        headers: {
          Accept: "text/event-stream",
          ...options.headers
        },
        method: "GET",
        params: options.params,
        responseType: "stream",
        signal: internalAbort.signal
      });
      const body = response.data;
      if (!body || typeof body.getReader !== "function") {
        throw new Error("SSE response has no readable stream body");
      }
      const reader = body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = "";
      const eventBuffer = {
        data: [],
        event: "message",
        id: void 0,
        retry: void 0
      };
      try {
        for (; ; ) {
          const { done, value } = await reader.read();
          if (done) {
            textBuffer += decoder.decode();
            if (textBuffer.length > 0 || eventBuffer.data.length > 0) {
              const finalChunk = textBuffer + "\n";
              const events2 = parseSseChunk(finalChunk, eventBuffer);
              for (const event of events2) {
                subscriber.next(event);
              }
            }
            subscriber.complete();
            return;
          }
          textBuffer += decoder.decode(value, { stream: true });
          let boundaryEnd = -1;
          const lfBoundary = textBuffer.lastIndexOf("\n\n");
          const crlfBoundary = textBuffer.lastIndexOf("\r\n\r\n");
          if (lfBoundary !== -1) {
            boundaryEnd = lfBoundary + 2;
          }
          if (crlfBoundary !== -1) {
            const crlfEnd = crlfBoundary + 4;
            if (crlfEnd > boundaryEnd) {
              boundaryEnd = crlfEnd;
            }
          }
          if (boundaryEnd === -1) {
            continue;
          }
          const completePart = textBuffer.slice(0, boundaryEnd);
          textBuffer = textBuffer.slice(boundaryEnd);
          const events = parseSseChunk(completePart, eventBuffer);
          for (const event of events) {
            subscriber.next(event);
          }
        }
      } finally {
        reader.releaseLock();
      }
    };
    run().catch((error) => {
      if (error instanceof DOMException && error.name === "AbortError") {
        subscriber.complete();
        return;
      }
      if (error instanceof Error && "code" in error && error.code === "ERR_CANCELED") {
        subscriber.complete();
        return;
      }
      subscriber.error(error);
    });
    return () => {
      internalAbort.abort();
      if (externalAbortHandler && options.signal) {
        options.signal.removeEventListener("abort", externalAbortHandler);
      }
    };
  });
}

// src/types/user.ts
var isFreeswitchWebRTCTelephonyConfig = (config) => {
  return config.type === "WEBRTC" && (config.webRTCProvider === "thrio" || config.webRTCProvider === "nextiva");
};

// src/types/conversation.ts
var ConversationFilterTabTypes = {
  ALL: "ALL",
  ARCHIVED: "ARCHIVED",
  CALLS: "CALLS",
  CALLS_AND_TEXTS: "CALLS_AND_TEXTS",
  CHANNELS: "CHANNELS",
  DRAFTS: "DRAFTS",
  EXTERNAL: "EXTERNAL",
  INCOMING_CALLS: "INCOMING_CALLS",
  INTERNAL: "INTERNAL",
  MENTIONS: "MENTIONS",
  MISSED_CALLS: "MISSED_CALLS",
  OUTGOING_CALLS: "OUTGOING_CALLS",
  TEXTS: "TEXTS",
  UNREAD: "UNREAD",
  VOICEMAILS: "VOICEMAILS"
};
var ConversationParticipantTypes = {
  BUSINESS_CONTACT: "business_contact",
  PLATFORM_USER: "platform_user",
  QUEUE: "queue"
};
var ConversationStatuses = {
  ARCHIVED: "ARCHIVED",
  DELETED: "DELETED",
  UNARCHIVED: "UNARCHIVED"
};
var FetchFeedFilters = {
  ALL: "all",
  ARCHIVED: "archived",
  BLOCKED: "blocked",
  CALLS: "calls",
  CALLS_AND_TEXTS: "calls_and_texts",
  CHANNELS: "channels",
  DRAFTS: "drafts",
  EMAIL: "email",
  EXTERNAL: "external",
  INCOMING_CALLS: "incoming_calls",
  INTERNAL: "internal",
  LIVE_CHAT: "live_chat",
  MENTIONS: "mentions",
  MISSED_CALLS: "missed_calls",
  OUTGOING_CALLS: "outgoing_calls",
  PHONE: "phone",
  SMS: "sms",
  TEXTS: "texts",
  UNREAD: "unread",
  VOICEMAILS: "voicemails"
};

// src/types/schemaType.ts
var isDateTimeField = (field) => {
  return field.type === "dateTime";
};
var isPhoneField = (field) => {
  return field.type === "phone";
};
var isSliderField = (field) => {
  return field.type === "slider";
};
var isFromField = (field) => {
  return field.subType === "from";
};
var isEmailField = (field) => {
  return field.type === "email";
};
var isEmailAddressField = (field) => {
  return field.type === "emailAddress";
};
var isIntegerField = (field) => {
  return field.type === "int";
};
var isAvatarField = (field) => {
  return field.type === "avatar";
};
var isQueryField = (field) => {
  return field.type === "query";
};
var isPickListField = (field) => {
  return field.type === "picklist";
};
var isTimezoneField = (field) => {
  return field.type === "timezone";
};
var isPasswordField = (field) => {
  return field.type === "password";
};
var isTextareaField = (field) => {
  return field.type === "textarea";
};
var isStringField = (field) => {
  return field.type === "string";
};
var isBooleanField = (field) => {
  return field.type === "boolean";
};
var isJSONObjectField = (field) => {
  return field.type === "jsonObject";
};

// src/types/schemaLayout.ts
var isSchemaLayoutPanelData = (value) => {
  return value.type === "data";
};
var isSchemaLayoutPanelForm = (value) => {
  return value.type === "form";
};

// src/types/video.ts
var ContextTypes = {
  NONE: "NONE",
  PERSONAL_INBOX: "PERSONAL_INBOX",
  SHARED_INBOX: "SHARED_INBOX"
};
var ParticipantRoles = {
  BOT: "BOT",
  GUEST: "GUEST",
  HOST: "HOST",
  REGULAR: "REGULAR"
};
var ParticipantStatuses = {
  ADDED: "ADDED",
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
  INVITED: "INVITED",
  MISSED_MEETING: "MISSED_MEETING",
  REMOVED: "REMOVED",
  TERMINATED: "TERMINATED"
};
var MeetingStatuses = {
  ACTIVE: "ACTIVE",
  CANCELLED: "CANCELLED",
  CLOSING: "CLOSING",
  COMPLETED: "COMPLETED",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED"
};
var MeetingTypes = {
  INSTANT: "INSTANT",
  OPEN: "OPEN",
  SCHEDULED: "SCHEDULED"
};
var ParticipantResponseActions = {
  ACCEPTED: "ACCEPTED",
  DECLINED: "DECLINED",
  NO_RESPONSE: "NO_RESPONSE"
};
var VideoMeetingSourceEvents = {
  OutboundVideoMeetingChatTranscriptionReady: "OutboundVideoMeetingChatTranscriptionReady",
  OutboundVideoMeetingCreated: "OutboundVideoMeetingCreated",
  OutboundVideoMeetingDeleted: "OutboundVideoMeetingDeleted",
  OutboundVideoMeetingDisposed: "OutboundVideoMeetingDisposed",
  OutboundVideoMeetingEnded: "OutboundVideoMeetingEnded",
  OutboundVideoMeetingForceDisposeEvent: "OutboundVideoMeetingForceDisposeEvent",
  OutboundVideoMeetingParticipantAdded: "OutboundVideoMeetingParticipantAdded",
  OutboundVideoMeetingParticipantDeclined: "OutboundVideoMeetingParticipantDeclined",
  OutboundVideoMeetingParticipantDismissMeetingEvent: "OutboundVideoMeetingParticipantDismissMeetingEvent",
  OutboundVideoMeetingParticipantMissed: "OutboundVideoMeetingParticipantMissed",
  OutboundVideoMeetingParticipantOnHoldEvent: "OutboundVideoMeetingParticipantOnHoldEvent",
  OutboundVideoMeetingParticipantRemoved: "OutboundVideoMeetingParticipantRemoved",
  OutboundVideoMeetingParticipantResumeEvent: "OutboundVideoMeetingParticipantResumeEvent",
  OutboundVideoMeetingRecordingReady: "OutboundVideoMeetingRecordingReady",
  OutboundVideoMeetingRecordingStarted: "OutboundVideoMeetingRecordingStarted",
  OutboundVideoMeetingRecordingStopped: "OutboundVideoMeetingRecordingStopped",
  OutboundVideoMeetingStarted: "OutboundVideoMeetingStarted",
  OutboundVideoMeetingUpdated: "OutboundVideoMeetingUpdated"
};
var CalendarSystems = {
  GOOGLE: "GOOGLE",
  MS_OUTLOOK: "MS_OUTLOOK",
  NONE: "NONE"
};

// src/utilities/formatPhoneNumber.ts
import parsePhoneNumberFromString, { parsePhoneNumberWithError } from "libphonenumber-js";
var formatPhoneNumberEx = (phoneNumber, countryCode = "US") => {
  const phoneNumberInstance = parsePhoneNumberFromString(phoneNumber, countryCode);
  if (phoneNumberInstance?.isValid()) {
    return phoneNumberInstance.format("E.164");
  }
  return null;
};
var formatPhoneNumber = (phoneNumber, format = "INTERNATIONAL") => {
  try {
    phoneNumber = `+${phoneNumber.replaceAll(/\D/g, "")}`;
    const phoneNumberInstance = parsePhoneNumberWithError(phoneNumber);
    return phoneNumberInstance.format(format);
  } catch (error) {
    return null;
  }
};
var parsePhoneNumber = (phoneNumber) => {
  try {
    phoneNumber = `+${phoneNumber.replaceAll(/\D/g, "")}`;
    const phoneNumberInstance = parsePhoneNumberWithError(phoneNumber);
    return {
      country: phoneNumberInstance.country,
      countryCallingCode: phoneNumberInstance.countryCallingCode,
      nationalNumber: phoneNumberInstance.nationalNumber,
      number: phoneNumberInstance.number
    };
  } catch (error) {
    return null;
  }
};

// src/utilities/isValidPhoneNumber.ts
import { parsePhoneNumberFromString as parsePhoneNumberFromString2 } from "libphonenumber-js";
var isValidPhoneNumber = (value) => {
  try {
    const phoneNumber = parsePhoneNumberFromString2(value);
    return phoneNumber ? phoneNumber.isValid() : false;
  } catch (error) {
    return false;
  }
};

// src/utilities/queries/getStaticUserQueryOptions.ts
var getStaticUserQueryOptions = () => {
  return {
    queryFn: async ({ client, queryKey }) => {
      const stateService = dependencyInjectionContainer.resolve("stateService");
      const schemaTypeClient = dependencyInjectionContainer.resolve("schemaTypeClient");
      const localStorageService = dependencyInjectionContainer.resolve("localStorageService");
      const loggerService = dependencyInjectionContainer.resolve("loggerService");
      const queryData = client.getQueryData(queryKey);
      const userId = stateService.getUserId();
      let localDevices;
      try {
        localDevices = await localStorageService.getObjectValue(
          "user.settings.devices"
        );
      } catch (error) {
        loggerService.warn("Could not retrieve preferred user devices from local storage:", error);
      }
      if (queryData) {
        const response = {
          ...queryData,
          settings: {
            ...queryData.settings,
            devices: {
              ...queryData.settings.devices ?? {},
              ...localDevices ?? {}
            }
          }
        };
        return response;
      } else if (userId) {
        const uri = schemaTypeClient.getLinkURI("user", "retrieve", { id: userId });
        const response = await axiosInstance.get(uri);
        response.data.settings = {
          ...response.data.settings,
          devices: {
            ...response.data.settings.devices ?? {},
            ...localDevices ?? {}
          }
        };
        return response.data;
      }
      return void 0;
    },
    queryKey: ["static", "user"]
  };
};

// src/utilities/queries/getCopilotSessionsQueryOptions.ts
function getCopilotSessionsQueryOptions() {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log("getCopilotSessionsQueryOptions", "Query invoked", {
        hasData: !!queryData,
        sessionCount: queryData?.sessions.length ?? 0
      });
      if (!queryData || queryData.sessions.length === 0) {
        const copilotService = dependencyInjectionContainer.resolve("copilotService");
        copilotService.fetchSessions({ limit: 20 }).catch((error) => {
          Logger.error("getCopilotSessionsQueryOptions - Error fetching sessions", error);
        });
      }
      return queryData ?? {
        hasMore: true,
        nextCursor: null,
        sessions: [],
        totalCount: 0
      };
    },
    queryKey: ["copilot", "sessions"]
  };
}
function getCopilotSessionFromCache(sessionId) {
  const data = queryClient.getQueryData(["copilot", "sessions"]);
  return data?.sessions.find((s) => s.sessionId === sessionId);
}

// src/utilities/queries/getCopilotSessionQueryOptions.ts
function getCopilotSessionQueryOptions({ sessionId }) {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log("getCopilotSessionQueryOptions", "Query invoked", {
        hasData: !!queryData,
        messageCount: queryData?.messages.length ?? 0,
        sessionId
      });
      if (!queryData || queryData.messages.length === 0) {
        const copilotService = dependencyInjectionContainer.resolve("copilotService");
        copilotService.fetchSession({ sessionId }).catch((error) => {
          Logger.error("getCopilotSessionQueryOptions - Error fetching session metadata", error);
        });
        copilotService.fetchSessionMessages({ limit: 50, sessionId }).catch((error) => {
          Logger.error("getCopilotSessionQueryOptions - Error fetching session messages", error);
        });
      }
      return queryData ?? {
        hasMore: true,
        messages: [],
        nextCursor: null,
        sessionId,
        title: ""
      };
    },
    queryKey: ["copilot", "session", sessionId]
  };
}
function getCopilotMessageFromCache(sessionId, messageId) {
  const data = queryClient.getQueryData([
    "copilot",
    "session",
    sessionId
  ]);
  return data?.messages.find((m) => m.messageId === messageId);
}

// src/utilities/queries/getTicketDetailQueryOptions.ts
function getTicketDetailQueryOptions({
  ticketId
}) {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log("getTicketDetailQueryOptions", "Query invoked", {
        hasData: !!queryData?.ticket,
        ticketId
      });
      return queryData ?? { ticket: null };
    },
    queryKey: ["tickets", "detail", ticketId]
  };
}

// src/utilities/queries/getTicketLinkedWorkitemsQueryOptions.ts
function getTicketLinkedWorkitemsQueryOptions({
  filter: filter3,
  ticketId
}) {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log("getTicketLinkedWorkitemsQueryOptions", "Query invoked", {
        hasData: !!queryData,
        ticketId,
        workitemCount: queryData?.workitems.length ?? 0
      });
      return queryData ?? {
        hasMore: true,
        nextCursor: null,
        workitems: []
      };
    },
    queryKey: ["tickets", "workitems", ticketId, filter3 ?? []]
  };
}

// src/utilities/queries/getTicketNotesQueryOptions.ts
function getTicketNotesQueryOptions({
  ticketId
}) {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log("getTicketNotesQueryOptions", "Query invoked", {
        hasData: !!queryData,
        noteCount: queryData?.notes.length ?? 0,
        ticketId
      });
      return queryData ?? { notes: [], total: 0 };
    },
    queryKey: ["tickets", "notes", ticketId]
  };
}

// src/utilities/queries/getTicketsQueryOptions.ts
function getTicketsQueryOptions(filters) {
  return {
    queryFn: ({ client, queryKey }) => {
      const queryData = client.getQueryData(queryKey);
      Logger.log("getTicketsQueryOptions", "Query invoked", {
        hasData: !!queryData,
        ticketCount: queryData?.tickets.length ?? 0
      });
      return queryData ?? {
        hasMore: true,
        nextCursor: null,
        tickets: []
      };
    },
    queryKey: ["tickets", "search", filters ?? {}]
  };
}

// src/utilities/queries/getUnreadCountQueryOptions.ts
function getUnreadCountQueryOptions() {
  return {
    queryFn: async () => {
      const schemaTypeClient = dependencyInjectionContainer.resolve("schemaTypeClient");
      const returnData = await schemaTypeClient.request(
        "engagementdata",
        "fetchConversationSummaryV2",
        {
          headers: {
            "Nextiva-Platform": "next2"
          }
        }
      );
      return {
        ...returnData[0]
      };
    },
    queryKey: ["unread-conversation-messages-count"]
  };
}
export {
  ACDService,
  AIEmployeeService,
  AbstractTelephony,
  AcdTypes,
  AgentAssistService,
  AudioQualityService,
  BaseAsyncStorageService,
  BaseChatService,
  BaseConversationService,
  BaseCopilotService,
  BaseDatadogService,
  BaseLocalStorageService,
  BaseNextiva,
  BaseOutboundListService,
  BaseSchemaTypeClient,
  BaseSocialService,
  BaseTelephonyEventsService,
  BaseTelephonyService,
  BaseTicketService,
  BaseUserService,
  BaseWorkitemsService,
  CACHE_BUSTER_VERSION,
  CHANNEL_FILTER_TO_CHANNEL_TYPE,
  CHAT_MSG_SOURCE,
  CalendarSystems,
  CallbackTypes,
  CampaignService,
  ChannelTypes,
  ChatMessageStates,
  ChatStatuses,
  ChatTypes,
  ContactService,
  ContextTypes,
  ConversationFilterTabTypes,
  ConversationParticipantTypes,
  ConversationSources,
  ConversationStatuses,
  ConversationTypes,
  DEFAULT_CONVERSATION_TIMELINE_LIMIT,
  DataIngestionService,
  DataService,
  DialTypes,
  DispositionActions,
  DispositionService,
  DuplicateStrategies,
  EntitlementsService,
  Errors,
  ExternalEvents as EventTypes,
  EventsService,
  FCMEmitNotifications,
  FCMNoDataFetch,
  FCMSupportedOfferEvents,
  FCMSupportedWorkitemEvents,
  FetchFeedFilters,
  FileStates,
  FunctionsService,
  Helper,
  HelperCampaign,
  HelperCampaignGoal,
  HelperContact,
  HelperDefault,
  HelperHome,
  HelperLayout,
  HelperTenant,
  HelperType,
  HelperUser,
  HelperUserClientSetting,
  HelperUserProfile,
  HelperWorkitem,
  Info,
  IntegrationsService,
  InternalEvents as InternalEventTypes,
  InternalStateManagementService,
  Logger,
  LoggerService,
  MY_INBOX_ID,
  MediaTypes,
  MeetingStatuses,
  MeetingTypes,
  MyUserSettingsService,
  NotificationEvent,
  OutboundChannelCategories,
  OutboundModeService,
  OutboundModes,
  PERMISSIONS,
  PSTN,
  ParticipantResponseActions,
  ParticipantRoles,
  ParticipantStatuses,
  PersisterClient,
  PhoneStates,
  PhoneStatesService,
  ProactiveAgentAssistService,
  ProvisioningService,
  RTCCallQualityMonitor,
  RangeTypes,
  RecordingsService,
  RelatedArticlesService,
  ResourceManager,
  SchemaType,
  SearchService,
  StompSocketState as SocketState,
  SpeedTester,
  StateService,
  StatisticTypes,
  StatisticsService,
  StatusService,
  StatusTypes,
  StatusTypesToLabel,
  SupervisingStates,
  SupportedFCMEvents,
  TOKEN_REFRESH_INTERVAL,
  TelephonyTypes,
  TimeEventTypes,
  TransferTypes,
  TranslatorService,
  TwilioStatsCompilation,
  UserHistorySortTypes,
  VideoMeetingSourceEvents,
  VideoService,
  WORKITEM_RECORDING_OPTIONS,
  WORKITEM_TYPE,
  WebRTCProviders,
  WidgetService,
  WidgetTypes,
  WorkItemPriorities,
  WorkitemActions,
  WorkitemCache,
  WorkitemConversationTypes,
  WorkitemStates,
  WorkitemTypes,
  areFeedFiltersEqual,
  createSseStream,
  defaultOptions,
  dependencyInjectionContainer,
  filterLatestNItems,
  fixEngagementDataItem,
  fixWorkitem,
  formatDuration,
  formatPhoneNumber,
  formatPhoneNumberEx,
  getAIEmployeesQueryOptions,
  getCompanyDirectoryQueryOptions,
  getConversationIdByQueueIdQueryOptions,
  getConversationTimelineQueryOptions,
  getConversationWorkitemsMultiScopeQueryOptions,
  getConversationWorkitemsQueryOptions,
  getConversationsQueryOptions,
  getCopilotMessageFromCache,
  getCopilotSessionFromCache,
  getCopilotSessionQueryOptions,
  getCopilotSessionsQueryOptions,
  getStaticDataQueryOptions,
  getStaticUserQueryOptions,
  getTicketDetailQueryOptions,
  getTicketLinkedWorkitemsQueryOptions,
  getTicketNotesQueryOptions,
  getTicketsQueryOptions,
  getUnreadCountQueryOptions,
  getWorkitemFromConversationsCache,
  isAvatarField,
  isBooleanField,
  isBuildEmailSignedURLPayload,
  isBuildRecordingSignedURLPayload,
  isBuildTwitterSignedURLPayload,
  isBuildVoicemailSignedURLPayload,
  isBuildWorkitemSignedURLPayload,
  isDateTimeField,
  isEmailAddressField,
  isEmailField,
  isFetchFeedPayloadEqual,
  isFreeswitchWebRTCTelephonyConfig,
  isFromField,
  isIntegerField,
  isJSONObjectField,
  isNCXObjectTypeContact,
  isPasswordField,
  isPhoneField,
  isPickListField,
  isQueryField,
  isSchemaLayoutPanelData,
  isSchemaLayoutPanelForm,
  isSliderField,
  isStringField,
  isTextareaField,
  isTimezoneField,
  isValidPhoneNumber,
  normalizeFeedFilter,
  normalizeUserQueues,
  ofExternalType as ofType,
  parsePhoneNumber,
  queryClient,
  registerBaseDependencies,
  registerDependencies,
  sortItems,
  validateCallWorkitemType,
  validateSMSWorkitemType
};
//# sourceMappingURL=index.js.map