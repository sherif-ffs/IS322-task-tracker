const initialData = {
    tasks: [
        {id: '1', title: 'example task 1', status: 'done', type: 'bug'},
        {id: '2', title: 'example task 2', status: 'in-progress', type: 'bug'},
        {id: '3', title: 'example task 3', status: 'done', type: 'feature'},
        {id: '4', title: 'example task 4', status: 'done', type: 'feature'},
        {id: '5', title: 'example task 5', status: 'in-progress', type: 'bug'},
        {id: '6', title: 'example task 6', status: 'todo', type: 'task'},
        {id: '7', title: 'example task 7', status: 'review', type: 'bug'},
        {id: '8', title: 'example task 8', status: 'review', type: 'task'},
        {id: '9', title: 'example task 9', status: 'todo', type: 'feature'},
        {id: '10', title: 'example task 10', status: 'review', type: 'task'},
    ],
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'to-do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'doing',
            taskIds: ['task-5','task-6', 'task-7']
        },
        'column-3': {
            id: 'column-3',
            title: 'done',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;