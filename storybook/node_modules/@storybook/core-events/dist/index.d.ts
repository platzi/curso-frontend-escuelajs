declare enum events {
    CHANNEL_CREATED = "channelCreated",
    GET_CURRENT_STORY = "getCurrentStory",
    SET_CURRENT_STORY = "setCurrentStory",
    GET_STORIES = "getStories",
    SET_STORIES = "setStories",
    STORIES_CONFIGURED = "storiesConfigured",
    SELECT_STORY = "selectStory",
    PREVIEW_KEYDOWN = "previewKeydown",
    STORY_ADDED = "storyAdded",
    STORY_CHANGED = "storyChanged",
    STORY_UNCHANGED = "storyUnchanged",
    FORCE_RE_RENDER = "forceReRender",
    REGISTER_SUBSCRIPTION = "registerSubscription",
    STORY_INIT = "storyInit",
    STORY_RENDER = "storyRender",
    STORY_RENDERED = "storyRendered",
    STORY_MISSING = "storyMissing",
    STORY_ERRORED = "storyErrored",
    STORY_THREW_EXCEPTION = "storyThrewException"
}
export default events;
export declare const CHANNEL_CREATED: events;
export declare const GET_CURRENT_STORY: events;
export declare const SET_CURRENT_STORY: events;
export declare const GET_STORIES: events;
export declare const SET_STORIES: events;
export declare const STORIES_CONFIGURED: events;
export declare const SELECT_STORY: events;
export declare const PREVIEW_KEYDOWN: events;
export declare const FORCE_RE_RENDER: events;
export declare const REGISTER_SUBSCRIPTION: events;
export declare const STORY_INIT: events;
export declare const STORY_ADDED: events;
export declare const STORY_RENDER: events;
export declare const STORY_RENDERED: events;
export declare const STORY_MISSING: events;
export declare const STORY_ERRORED: events;
export declare const STORY_CHANGED: events;
export declare const STORY_THREW_EXCEPTION: events;
