const initialData = {
    tasks: {
        'task-1': {id: 'task-1', title: 'Create List View', status: 'done', type: 'bug'},
        'task-2': {id: 'task-2', title: 'Create Add Form', status: 'in-progress', type: 'bug'},
        'task-3': {id: 'task-3', title: 'Install Dependencies', status: 'done', type: 'feature'},
        'task-4': {id: 'task-4', title: 'Create Grid View', status: 'done', type: 'feature'},
        'task-5': {id: 'task-5', title: 'Set Up Github', status: 'in-progress', type: 'bug'},
        'task-6': {id: 'task-6', title: 'Create App Component', status: 'todo', type: 'task'},
        'task-7': {id: 'task-7', title: 'Plain Component Diagram', status: 'review', type: 'bug'},
        'task-8': {id: 'task-8', title: 'Install React', status: 'review', type: 'task'},
        'task-9': {id: 'task-9', title: 'Invite Collaborators', status: 'todo', type: 'feature'},
        'task-10': {id: 'task-10', title: 'App Crashes', status: 'review', type: 'task'},
    },
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