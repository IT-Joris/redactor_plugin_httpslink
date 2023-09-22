(function ($R) {
    $R.add('plugin', 'httpsLink', {

        init: function (app) {
            this.app = app;
        },

        onmodal: {
            link: {
                open: function ($modal, $form) {
                    if ($form.getData().url) {
                        $form.setData({url: $form.getData().url});
                    } else {
                        $form.setData({url: 'https://'});
                    }
                }
            }
        }
    });
})(Redactor);
