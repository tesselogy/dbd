const getDefaultState = () => {
    return {
        templates: [
            {
                workname: "Устройство конструкции пола Аттика"

            },
            {
                workname: "Устройство конструкции пола Готтика"

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
