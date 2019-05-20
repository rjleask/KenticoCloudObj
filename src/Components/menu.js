
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
* This class was generated by 'kentico-cloud-model-generator-utility' at Wed Apr 24 2019 12:52:58 GMT-0400 (Eastern Daylight Time).
*/
export class Menu extends ContentItem {
        constructor() {
        super({
            propertyResolver: ((fieldName) => {
                if (fieldName === 'pizza_s') {
                    return 'pizzaS';
                }
                return fieldName;
            })
        });
    }
}
