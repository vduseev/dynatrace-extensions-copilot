---
title: 📄 Load Schemas
permalink: /docs/cmd/load-schemas/
toc: true
toc_sticky: true
---

Downloads schema files of a specific version and sets up validation for the extension manifest
through the Support for YAML extension. If repository has an `extension.yaml` file, it updates
the version in there too.

## Command Pre-conditions

- The Copilot must be connected to a Dynatrace environment

## Demo

![load_schemas]({{ site.baseurl }}assets/gifs/load_schemas.gif)

## Detailed command flow

1. The connected Dynatrace environment is queried for the list of available schema versions.
   You are prompted to select which version to use.

2. The files associated with the selected schema version are downloaded and stored in the
   global VSCode storage.

   <p class="notice--info">
     <strong>📝 Note:</strong>
     <br/>
     If the files have been previously downloaded you are prompted and can skip downloading
     them again.
   </p>

3. The workflow finalizes by setting up validation of the extension manifest in the Support
   for YAML extension using the schema version selected. 
   
   If a manifest file is present in the workspace, it will also be updated with the selected
    minimum version.
