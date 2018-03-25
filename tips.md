## Delete all node_modules folders recursively on Windows or Mac
`FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" echo "%d" && rimraf "%d"`
Refrence: https://winsmarts.com/delete-all-node-modules-folders-recursively-on-windows-edcc9a9c079e
