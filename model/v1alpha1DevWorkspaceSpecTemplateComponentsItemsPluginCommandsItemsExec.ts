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

import { V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecEnv } from './v1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecEnv';
import { V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecGroup } from './v1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecGroup';

/**
* CLI Command executed in an existing component container
*/
export class V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExec {
    /**
    * Optional map of free-form additional command attributes
    */
    'attributes'?: { [key: string]: string; };
    /**
    * The actual command-line string   Special variables that can be used:    - `$PROJECTS_ROOT`: A path where projects sources are mounted    - `$PROJECT_SOURCE`: A path to a project source ($PROJECTS_ROOT/<project-name>). If there are multiple projects, this will point to the directory of the first one.
    */
    'commandLine'?: string;
    /**
    * Describes component to which given action relates
    */
    'component'?: string;
    /**
    * Optional list of environment variables that have to be set before running the command
    */
    'env'?: Array<V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecEnv>;
    'group'?: V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecGroup;
    /**
    * Whether the command is capable to reload itself when source code changes. If set to `true` the command won\'t be restarted and it is expected to handle file changes on its own.   Default value is `false`
    */
    'hotReloadCapable'?: boolean;
    /**
    * Mandatory identifier that allows referencing this command in composite commands, from a parent, or in events.
    */
    'id': string;
    /**
    * Optional label that provides a label for this command to be used in Editor UI menus for example
    */
    'label'?: string;
    /**
    * Working directory where the command should be executed   Special variables that can be used:    - `${PROJECTS_ROOT}`: A path where projects sources are mounted    - `${PROJECT_SOURCE}`: A path to a project source (${PROJECTS_ROOT}/<project-name>). If there are multiple projects, this will point to the directory of the first one.
    */
    'workingDir'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "attributes",
            "baseName": "attributes",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "commandLine",
            "baseName": "commandLine",
            "type": "string"
        },
        {
            "name": "component",
            "baseName": "component",
            "type": "string"
        },
        {
            "name": "env",
            "baseName": "env",
            "type": "Array<V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecEnv>"
        },
        {
            "name": "group",
            "baseName": "group",
            "type": "V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExecGroup"
        },
        {
            "name": "hotReloadCapable",
            "baseName": "hotReloadCapable",
            "type": "boolean"
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
            "name": "workingDir",
            "baseName": "workingDir",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateComponentsItemsPluginCommandsItemsExec.attributeTypeMap;
    }
}

