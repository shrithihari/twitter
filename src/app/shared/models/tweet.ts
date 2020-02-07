

export interface Url {
    display_url: string;
    expanded_url: string;
    indices: number[];
    url: string;
}

export interface UserMention {
    id: number;
    id_str: string;
    indices: number[];
    name: string;
    screen_name: string;
}

export interface Entities {
    urls: Url[];
    user_mentions: UserMention[];
}

export interface Metadata {
    iso_language_code: string;
    result_type: string;
}

export interface Large {
    h: number;
    resize: string;
    w: number;
}

export interface Medium2 {
    h: number;
    resize: string;
    w: number;
}

export interface Small {
    h: number;
    resize: string;
    w: number;
}

export interface Thumb {
    h: number;
    resize: string;
    w: number;
}

export interface Sizes {
    large: Large;
    medium: Medium2;
    small: Small;
    thumb: Thumb;
}

export interface Medium {
    display_url: string;
    expanded_url: string;
    id: number;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    sizes: Sizes;
    type: string;
    url: string;
}

export interface Url2 {
    display_url: string;
    expanded_url: string;
    indices: number[];
    url: string;
}

export interface Entities2 {
    media: Medium[];
    urls: Url2[];
}

export interface Large2 {
    h: number;
    resize: string;
    w: number;
}

export interface Medium4 {
    h: number;
    resize: string;
    w: number;
}

export interface Small2 {
    h: number;
    resize: string;
    w: number;
}

export interface Thumb2 {
    h: number;
    resize: string;
    w: number;
}

export interface Sizes2 {
    large: Large2;
    medium: Medium4;
    small: Small2;
    thumb: Thumb2;
}

export interface Medium3 {
    display_url: string;
    expanded_url: string;
    id: any;
    id_str: string;
    indices: number[];
    media_url: string;
    media_url_https: string;
    sizes: Sizes2;
    type: string;
    url: string;
}

export interface ExtendedEntities {
    media: Medium3[];
}

export interface Metadata2 {
    iso_language_code: string;
    result_type: string;
}

export interface Url4 {
    display_url: string;
    expanded_url: string;
    indices: number[];
    url: string;
}

export interface Url3 {
    urls: Url4[];
}

export interface Entities3 {
    url: Url3;
}

export interface User {
    contributors_enabled: boolean;
    created_at: string;
    default_profile: boolean;
    default_profile_image: boolean;
    description: string;
    entities: Entities3;
    favourites_count: number;
    follow_request_sent: boolean;
    followers_count: number;
    following: boolean;
    friends_count: number;
    geo_enabled: boolean;
    has_extended_profile: boolean;
    id: number;
    id_str: string;
    is_translation_enabled: boolean;
    is_translator: boolean;
    lang: string;
    listed_count: number;
    location: string;
    name: string;
    notifications: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    protected: boolean;
    screen_name: string;
    statuses_count: number;
    translator_type: string;
    url: string;
    verified: boolean;
}

export interface QuotedStatus {
    created_at: string;
    entities: Entities2;
    extended_entities: ExtendedEntities;
    favorite_count: number;
    favorited: boolean;
    id: number;
    id_str: string;
    is_quote_status: boolean;
    lang: string;
    metadata: Metadata2;
    possibly_sensitive: boolean;
    retweet_count: number;
    retweeted: boolean;
    source: string;
    text: string;
    truncated: boolean;
    user: User;
}

export interface Url6 {
    display_url: string;
    expanded_url: string;
    indices: number[];
    url: string;
}

export interface Url5 {
    urls: Url6[];
}

export interface Entities4 {
    url: Url5;
}

export interface User2 {
    contributors_enabled: boolean;
    created_at: string;
    default_profile: boolean;
    default_profile_image: boolean;
    description: string;
    entities: Entities4;
    favourites_count: number;
    follow_request_sent: boolean;
    followers_count: number;
    following: boolean;
    friends_count: number;
    geo_enabled: boolean;
    has_extended_profile: boolean;
    id: number;
    id_str: string;
    is_translation_enabled: boolean;
    is_translator: boolean;
    lang: string;
    listed_count: number;
    location: string;
    name: string;
    notifications: boolean;
    profile_background_color: string;
    profile_background_image_url: string;
    profile_background_image_url_https: string;
    profile_background_tile: boolean;
    profile_image_url: string;
    profile_image_url_https: string;
    profile_link_color: string;
    profile_sidebar_border_color: string;
    profile_sidebar_fill_color: string;
    profile_text_color: string;
    profile_use_background_image: boolean;
    protected: boolean;
    screen_name: string;
    statuses_count: number;
    translator_type: string;
    url: string;
    verified: boolean;
}

export interface Tweet {
    created_at: Date;
    entities: Entities;
    favorite_count: number;
    favorited: boolean;
    id: number;
    id_str: string;
    in_reply_to_screen_name: string;
    in_reply_to_status_id: number;
    in_reply_to_status_id_str: string;
    in_reply_to_user_id: number;
    in_reply_to_user_id_str: string;
    is_quote_status: boolean;
    lang: string;
    metadata: Metadata;
    possibly_sensitive: boolean;
    quoted_status: QuotedStatus;
    quoted_status_id: number;
    quoted_status_id_str: string;
    retweet_count: number;
    retweeted: boolean;
    source: string;
    text: string;
    truncated: boolean;
    user: User2;
}



