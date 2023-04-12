import { ResponseImage } from "./response-image";

export interface ResponseSearchedImage {
  total: number;
  total_pages: number;
  results: ResponseImage[];
}

// //es lo mismo
// interface Result {
//   id: string;
//   created_at: string;
//   updated_at: string;
//   promoted_at?: string;
//   width: number;
//   height: number;
//   color: string;
//   blur_hash: string;
//   description?: string;
//   alt_description: string;
//   urls: Urls;
//   links: Links;
//   likes: number;
//   liked_by_user: boolean;
//   current_user_collections: any[];
//   sponsorship?: any;
//   topic_submissions: Topicsubmissions;
//   user: User;
//   tags: Tag[];
// }

// //es lo mismo
// interface Tag {
//   type: string;
//   title: string;
//   source?: Source;
// }

// //es lo mismo
// interface Source {
//   ancestry: Ancestry;
//   title: string;
//   subtitle: string;
//   description: string;
//   meta_title: string;
//   meta_description: string;
//   cover_photo: Coverphoto;
// }

// //es lo mismo
// interface Coverphoto {
//   id: string;
//   created_at: string;
//   updated_at: string;
//   promoted_at?: null | string | string;
//   width: number;
//   height: number;
//   color: string;
//   blur_hash: string;
//   description?: null | string | string;
//   alt_description?: null | string | string;
//   urls: Urls;
//   links: Links;
//   likes: number;
//   liked_by_user: boolean;
//   current_user_collections: any[];
//   sponsorship?: any;
//   topic_submissions: Topicsubmissions2;
//   premium?: boolean;
//   plus?: boolean;
//   user: User2;
// }

// //es lo mismo
// interface User2 {
//   id: string;
//   updated_at: string;
//   username: string;
//   name: string;
//   first_name: string;
//   last_name: string;
//   twitter_username?: string;
//   portfolio_url?: string;
//   bio: string;
//   location?: string;
//   links: Links2;
//   profile_image: Profileimage;
//   instagram_username?: string;
//   total_collections: number;
//   total_likes: number;
//   total_photos: number;
//   accepted_tos: boolean;
//   for_hire: boolean;
//   social: Social;
// }

// //no es lo mismo
// interface Topicsubmissions2 {
//   "current-events"?: Businesswork;
//   "architecture-interior"?: Businesswork;
//   wallpapers?: Architectureinterior;
//   "color-of-water"?: Businesswork;
//   nature?: Businesswork;
//   "textures-patterns"?: Businesswork;
//   monochrome?: Monochrome;
//   interiors?: Businesswork;
// }

// interface Monochrome {
//   status: string;
// }

// //es lo mismo
// interface Ancestry {
//   type: Type;
//   category?: Type;
//   subcategory?: Type;
// }

// interface Type {
//   slug: string;
//   pretty_slug: string;
// }

// //es lo mismo
// interface User {
//   id: string;
//   updated_at: string;
//   username: string;
//   name: string;
//   first_name: string;
//   last_name?: string;
//   twitter_username?: string;
//   portfolio_url?: string;
//   bio?: string;
//   location?: string;
//   links: Links2;
//   profile_image: Profileimage;
//   instagram_username?: string;
//   total_collections: number;
//   total_likes: number;
//   total_photos: number;
//   accepted_tos: boolean;
//   for_hire: boolean;
//   social: Social;
// }

// //es lo mismo
// interface Social {
//   instagram_username?: string;
//   portfolio_url?: string;
//   twitter_username?: string;
//   paypal_email?: any;
// }

// //es lo mismo
// interface Profileimage {
//   small: string;
//   medium: string;
//   large: string;
// }

// interface Links2 {
//   self: string;
//   html: string;
//   photos: string;
//   likes: string;
//   portfolio: string;
//   following: string;
//   followers: string;
// }

// interface Topicsubmissions {
//   "business-work"?: Businesswork;
//   interiors?: Businesswork;
//   wallpapers?: Businesswork;
//   "current-events"?: Businesswork;
//   entrepreneur?: Businesswork;
//   "architecture-interior"?: Architectureinterior;
//   work?: Businesswork;
// }

// interface Architectureinterior {
//   status: string;
//   approved_on?: string;
// }

// interface Businesswork {
//   status: string;
//   approved_on: string;
// }

// interface Links {
//   self: string;
//   html: string;
//   download: string;
//   download_location: string;
// }

// interface Urls {
//   raw: string;
//   full: string;
//   regular: string;
//   small: string;
//   thumb: string;
//   small_s3: string;
// }
