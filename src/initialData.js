const initialData = {
    tasks: [
        {id: 'task-1', title: 'Create List View', status: 'done', type: 'bug'},
        {id: 'task-2', title: 'Create Add Form', status: 'in-progress', type: 'bug'},
        {id: 'task-3', title: 'Install Dependencies', status: 'done', type: 'feature'},
        {id: 'task-4', title: 'Create Grid View', status: 'done', type: 'feature'},
        {id: 'task-5', title: 'Set Up Github', status: 'in-progress', type: 'bug'},
        {id: 'task-6', title: 'Create App Component', status: 'todo', type: 'task'},
        {id: 'task-7', title: 'Plain Component Diagram', status: 'review', type: 'bug'},
        {id: 'task-8', title: 'Install React', status: 'review', type: 'task'},
        {id: 'task-9', title: 'Invite Collaborators', status: 'todo', type: 'feature'},
       {id: 'task-10', title: 'App Crashes', status: 'review', type: 'task'},
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
            title: 'in review',
            taskIds: ['task-8']
        },
        'column-4': {
            id: 'column-4',
            title: 'done',
            taskIds: ['task-9', 'task-10']
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4']
};

export default initialData;