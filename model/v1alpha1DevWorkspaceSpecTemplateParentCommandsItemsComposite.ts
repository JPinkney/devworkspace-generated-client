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

import { V1alpha1DevWorkspaceSpecTemplateParentCommandsItemsCompositeGroup } from './v1alpha1DevWorkspaceSpecTemplateParentCommandsItemsCompositeGroup';

/**
* Composite command that allows executing several sub-commands either sequentially or concurrently
*/
export class V1alpha1DevWorkspaceSpecTemplateParentCommandsItemsComposite {
    /**
    * Optional map of free-form additional command attributes
    */
    'attributes'?: { [key: string]: string; };
    /**
    * The commands that comprise this composite command
    */
    'commands'?: Array<string>;
    'group'?: V1alpha1DevWorkspaceSpecTemplateParentCommandsItemsCompositeGroup;
    /**
    * Mandatory identifier that allows referencing this command in composite commands, from a parent, or in events.
    */
    'id': string;
    /**
    * Optional label that provides a label for this command to be used in Editor UI menus for example
    */
    'label'?: string;
    /**
    * Indicates if the sub-commands should be executed concurrently
    */
    'parallel'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "commands",
            "baseName": "commands",
            "type": "Array<string>"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentCommandsItemsCompositeGroup"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "parallel",
            "baseName": "parallel",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateParentCommandsItemsComposite.attributeTypeMap;
    }
}

