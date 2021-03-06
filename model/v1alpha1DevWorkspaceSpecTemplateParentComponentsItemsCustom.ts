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
* Custom component whose logic is implementation-dependant and should be provided by the user possibly through some dedicated controller
*/
export class V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsCustom {
    /**
    * Class of component that the associated implementation controller should use to process this command with the appropriate logic
    */
    'componentClass': string;
    /**
    * Additional free-form configuration for this custom component that the implementation controller will know how to use
    */
    'embeddedResource': object;
    /**
    * Mandatory name that allows referencing the component in commands, or inside a parent
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "componentClass",
            "baseName": "componentClass",
            "type": "string"
        },
        {
            "name": "embeddedResource",
            "baseName": "embeddedResource",
            "type": "object"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateParentComponentsItemsCustom.attributeTypeMap;
    }
}

