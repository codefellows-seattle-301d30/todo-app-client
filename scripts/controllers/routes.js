'use strict';

page('/', () => app.Task.fetchAll(app.taskView.initIndexPage));
page('/tasks/add', app.taskView.initAddForm);

page('/admin', 
  (ctx, next) => app.adminView.initAdminPage(ctx, next), 
  (ctx) => app.adminView.verify);

page();