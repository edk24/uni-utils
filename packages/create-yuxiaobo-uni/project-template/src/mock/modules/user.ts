import mock from 'mockjs';

mock.mock('/api/user/get', 'get', () => {
    return {
        code: 0,
        data: {
            name: 'mock-user',
            age: 18,
        },
    };
});