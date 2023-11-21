const fs = require('fs');

const {version} = JSON.parse(fs.readFileSync('package.json').toString());

const content = `// auto generated file
import {SdkVersion as sdkVersion} from "./types";
export const SdkVersion: sdkVersion = "${version}";
`;

fs.writeFileSync('src/sdk/sdk-version.ts', content);
