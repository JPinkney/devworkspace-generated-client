/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: master
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Project\'s Custom source
*/
export class V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsCustom {
    'embeddedResource': object;
    'projectSourceClass': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "embeddedResource",
            "baseName": "embeddedResource",
            "type": "object"
        },
        {
            "name": "projectSourceClass",
            "baseName": "projectSourceClass",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsCustom.attributeTypeMap;
    }
}

