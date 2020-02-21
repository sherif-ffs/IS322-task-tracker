const initialData = {
    tasks: [
        {id: '1', title: 'Create List View', status: 'done', type: 'bug'},
        {id: '2', title: 'Create Add Form', status: 'in-progress', type: 'bug'},
        {id: '3', title: 'Install Dependencies', status: 'done', type: 'feature'},
        {id: '4', title: 'Create Grid View', status: 'done', type: 'feature'},
        {id: '5', title: 'Set Up Github', status: 'in-progress', type: 'bug'},
        {id: '6', title: 'Create App Component', status: 'todo', type: 'task'},
        {id: '7', title: 'Plain Component Diagram', status: 'review', type: 'bug'},
        {id: '8', title: 'Install React', status: 'review', type: 'task'},
        {id: '9', title: 'Invite Collaborators', status: 'todo', type: 'feature'},
        {id: '10', title: 'App Crashes', status: 'review', type: 'task'},
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