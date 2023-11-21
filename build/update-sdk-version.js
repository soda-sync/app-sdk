const fs = require('fs');

const {version} = JSON.parse(fs.readFileSync('package.json').toString());

const content = `// auto generated file
import {SdkVersionT} from "./types";
export const SdkVersion: SdkVersionT = "${version}";
`;

fs.writeFileSync('src/sdk/sdk-version.ts', content);
