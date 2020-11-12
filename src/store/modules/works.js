const getDefaultState = () => {
    return {
        templates: [
            {
                workname: "Устройство конструкции пола Аттика",
                id: "b1a1cea7-36aa-4750-bf87-8b15f96bed1a",
                thick: 100

            },
            {
                workname: "Устройство конструкции пола Готтика",
                id: "0ddb6496-677f-4746-b11c-bdc28de2b06c",
                thick: 100
            }
        ],
        selected: 1,
        value: "default"
    }
};
export default {
    state: getDefaultState(),
    getters: {
        getWorks(state) {

            return state.templates;
        },
        getSelected(state) {

            return state.selected;
        },
        getValue(state) {
            return state.value;
        },
    },
    mutations: {
        SOCKET_TemplatesUpdate(state, message) {

        },
        SOCKET_RolesUpdate(state, message) {

        },
        setSelected(state, status) {
            state.selected = status;
            state.value = JSON.stringify(state.templates[status]);
        }
    }
}
