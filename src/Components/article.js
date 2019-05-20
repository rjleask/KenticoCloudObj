
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
* This class was generated by 'kentico-cloud-model-generator-utility' at Wed Apr 24 2019 12:52:58 GMT-0400 (Eastern Daylight Time).
*/
export class Article extends ContentItem {
        constructor() {
        super({
            propertyResolver: ((fieldName) => {
                if (fieldName === 'metadata__og_description') {
                    return 'metadataOgDescription';
                }
                if (fieldName === 'metadata__meta_title') {
                    return 'metadataMetaTitle';
                }
                if (fieldName === 'body_copy') {
                    return 'bodyCopy';
                }
                if (fieldName === 'metadata__og_title') {
                    return 'metadataOgTitle';
                }
                if (fieldName === 'metadata__meta_description') {
                    return 'metadataMetaDescription';
                }
                if (fieldName === 'metadata__twitter_site') {
                    return 'metadataTwitterSite';
                }
                if (fieldName === 'post_date') {
                    return 'postDate';
                }
                if (fieldName === 'meta_keywords') {
                    return 'metaKeywords';
                }
                if (fieldName === 'teaser_image') {
                    return 'teaserImage';
                }
                if (fieldName === 'metadata__twitter_image') {
                    return 'metadataTwitterImage';
                }
                if (fieldName === 'metadata__twitter_creator') {
                    return 'metadataTwitterCreator';
                }
                if (fieldName === 'metadata__twitter_title') {
                    return 'metadataTwitterTitle';
                }
                if (fieldName === 'metadata__twitter_description') {
                    return 'metadataTwitterDescription';
                }
                if (fieldName === 'meta_description') {
                    return 'metaDescription';
                }
                if (fieldName === 'metadata__og_image') {
                    return 'metadataOgImage';
                }
                if (fieldName === 'jelly_fish') {
                    return 'jellyFish';
                }
                if (fieldName === 'related_articles') {
                    return 'relatedArticles';
                }
                if (fieldName === 'url_pattern') {
                    return 'urlPattern';
                }
                return fieldName;
            })
        });
    }
}
