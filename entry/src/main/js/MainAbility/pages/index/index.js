import Brightness from '@system.brightness';

export default {
    data: {
        status: 'Waiting operation...'
    },

    getVal() {
        Brightness.getValue({
            success: (data) => this.status = 'Brightness:' + data.value,
            fail: (err, code) => console.error('Failed to get brightness' + err + code),
        });
    },

    setVal() {
        Brightness.setValue({
            value: 180,
            success: () => this.status = 'Brightness set to 180',
            fail: (err, code) => console.error('Failed to set brightness' + err + code),
        });
    },

    setKeepScreenOn() {
        Brightness.setKeepScreenOn({
            keepScreenOn: true,
            success: () => this.status = 'Screen will stay on',
            fail: (err, code) => console.error('Failed to setKeepScreenOn' + err + code),
        });
    },

    setKeepScreenOff() {
        Brightness.setKeepScreenOn({
            keepScreenOn: false,
            success: () => this.status = 'Screen will stay off',
            fail: (err, code) => console.error('Failed to setKeepScreenOff' + err + code),
        });
    },
};
