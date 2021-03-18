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

import { V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsCustom } from './v1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsCustom';
import { V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGit } from './v1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGit';
import { V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGithub } from './v1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGithub';
import { V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsZip } from './v1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsZip';

export class V1alpha1DevWorkspaceSpecTemplateParentStarterProjects {
    /**
    * Path relative to the root of the projects to which this project should be cloned into. This is a unix-style relative path (i.e. uses forward slashes). The path is invalid if it is absolute or tries to escape the project root through the usage of \'..\'. If not specified, defaults to the project name.
    */
    'clonePath'?: string;
    'custom'?: V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsCustom;
    /**
    * Description of a starter project
    */
    'description'?: string;
    'git'?: V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGit;
    'github'?: V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGithub;
    /**
    * Project name
    */
    'name': string;
    /**
    * Type of project source
    */
    'sourceType'?: V1alpha1DevWorkspaceSpecTemplateParentStarterProjects.SourceTypeEnum;
    'zip'?: V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsZip;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "clonePath",
            "baseName": "clonePath",
            "type": "string"
        },
        {
            "name": "custom",
            "baseName": "custom",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsCustom"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "git",
            "baseName": "git",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGit"
        },
        {
            "name": "github",
            "baseName": "github",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsGithub"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "sourceType",
            "baseName": "sourceType",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentStarterProjects.SourceTypeEnum"
        },
        {
            "name": "zip",
            "baseName": "zip",
            "type": "V1alpha1DevWorkspaceSpecTemplateParentStarterProjectsItemsZip"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplateParentStarterProjects.attributeTypeMap;
    }
}

export namespace V1alpha1DevWorkspaceSpecTemplateParentStarterProjects {
    export enum SourceTypeEnum {
        Git = <any> 'Git',
        Github = <any> 'Github',
        Zip = <any> 'Zip',
        Custom = <any> 'Custom'
    }
}