'use strict';

page('/', () => app.Task.fetchAll(app.taskView.initIndexPage));
page('/tasks/add', app.taskView.initAddForm);

page();