function addAndRemoveElements(commandList) {
    let result = [];

    for (let i = 0; i < commandList.length; i++) {
        let currentCommand = commandList[i];
        if (currentCommand === 'add') {
            result.push(i + 1);

        } else if (currentCommand === 'remove') {
            result.pop();
        }

    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }
}
addAndRemoveElements(['add',
    'add',
    'remove',
    'add',
    'add']
);