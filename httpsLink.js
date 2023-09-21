(function($R)
{
    $R.add('plugin', 'httpsLink', {

        init: function(app)
        {
            this.app = app;
        },

        onmodal: {
            link: {
                open: function($modal, $form)
                {
                    $form.setData({url: 'https://'});
                }
            }
        }
    });
})(Redactor);
