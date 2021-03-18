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

import { V1alpha1DevWorkspaceSpecTemplateCommands } from './v1alpha1DevWorkspaceSpecTemplateCommands';
import { V1alpha1DevWorkspaceSpecTemplateComponents } from './v1alpha1DevWorkspaceSpecTemplateComponents';
import { V1alpha1DevWorkspaceSpecTemplateEvents } from './v1alpha1DevWorkspaceSpecTemplateEvents';
import { V1alpha1DevWorkspaceSpecTemplateParent } from './v1alpha1DevWorkspaceSpecTemplateParent';
import { V1alpha1DevWorkspaceSpecTemplateProjects } from './v1alpha1DevWorkspaceSpecTemplateProjects';
import { V1alpha1DevWorkspaceSpecTemplateStarterProjects } from './v1alpha1DevWorkspaceSpecTemplateStarterProjects';

/**
* Structure of the workspace. This is also the specification of a workspace template.
*/
export class V1alpha1DevWorkspaceSpecTemplate {
    /**
    * Predefined, ready-to-use, workspace-related commands
    */
    'commands'?: Array<V1alpha1DevWorkspaceSpecTemplateCommands>;
    /**
    * List of the workspace components, such as editor and plugins, user-provided containers, or other types of components
    */
    'components'?: Array<V1alpha1DevWorkspaceSpecTemplateComponents>;
    'events'?: V1alpha1DevWorkspaceSpecTemplateEvents;
    'parent'?: V1alpha1DevWorkspaceSpecTemplateParent;
    /**
    * Projects worked on in the workspace, containing names and sources locations
    */
    'projects'?: Array<V1alpha1DevWorkspaceSpecTemplateProjects>;
    /**
    * StarterProjects is a project that can be used as a starting point when bootstrapping new projects
    */
    'starterProjects'?: Array<V1alpha1DevWorkspaceSpecTemplateStarterProjects>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "commands",
            "baseName": "commands",
            "type": "Array<V1alpha1DevWorkspaceSpecTemplateCommands>"
        },
        {
            "name": "components",
            "baseName": "components",
            "type": "Array<V1alpha1DevWorkspaceSpecTemplateComponents>"
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "V1alpha1DevWorkspaceSpecTemplateEvents"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "V1alpha1DevWorkspaceSpecTemplateParent"
        },
        {
            "name": "projects",
            "baseName": "projects",
            "type": "Array<V1alpha1DevWorkspaceSpecTemplateProjects>"
        },
        {
            "name": "starterProjects",
            "baseName": "starterProjects",
            "type": "Array<V1alpha1DevWorkspaceSpecTemplateStarterProjects>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1DevWorkspaceSpecTemplate.attributeTypeMap;
    }
}
