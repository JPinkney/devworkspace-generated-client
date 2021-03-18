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
* Defines the group this command is part of
*/
export class V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsVscodeTaskGroup {
    /**
    * Identifies the default command for a given group kind
    */
    'isDefault'?: boolean;
    /**
    * Kind of group the command is part of
    */
    'kind': V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsVscodeTaskGroup.KindEnum;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "isDefault",
            "baseName": "isDefault",
            "type": "boolean"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsVscodeTaskGroup.KindEnum"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsVscodeTaskGroup.attributeTypeMap;
    }
}

export namespace V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsVscodeTaskGroup {
    export enum KindEnum {
        Build = <any> 'build',
        Run = <any> 'run',
        Test = <any> 'test',
        Debug = <any> 'debug'
    }
}
