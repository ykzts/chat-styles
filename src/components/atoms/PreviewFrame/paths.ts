export const previewPath = require('file-loader?name=[name].[hash:8].[ext]!extract-loader!html-loader?minimize!./preview.html') as string
