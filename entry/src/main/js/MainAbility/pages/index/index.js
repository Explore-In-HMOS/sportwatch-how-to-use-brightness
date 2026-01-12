import Brightness from '@system.brightness';

export default {
    data: {
        status: 'Waiting operation...'
    },

    getVal() {
        Brightness.getValue({
            success: (data) => this.status = `Brightness: ${data.value}`
        });
    },

    setVal() {
        Brightness.setValue({
            value: 180,
            success: () => this.status = 'Brightness set to 180'
        });
    },

    setKeepScreenOn() {
        Brightness.setKeepScreenOn({
            keepScreenOn: true,
            success: () => this.status = 'Screen will stay on'
        });
    },

    setKeepScreenOff() {
        Brightness.setKeepScreenOn({
            keepScreenOn: false,
            success: () => this.status = 'Screen will stay off'
        });
    }
};
