<?php
namespace Deployer;

require 'recipe/laravel.php';

// Default env.
set('default_stage', 'staging');

// Project name
set('application', 'NMSTheme');

// Project repository
set('repository', 'git@gitlab.nms.kcl.ac.uk:nms-web/nms_theme.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Laravel shared file
set('shared_files', []);

// Hosts

host('nmswebcore0t.nms.kcl.ac.uk')
    ->stage('staging')
    ->user('w3admin')
    ->forwardAgent(true)
    ->set('deploy_path', '/var/www/vhost/theme-test.nms.kcl.ac.uk/app');

host('nmswebcore0.nms.kcl.ac.uk')
    ->stage('production')
    ->user('w3admin')
    ->forwardAgent(true)
    ->set('deploy_path', '/var/www/vhost/theme.nms.kcl.ac.uk/app');

host('nmswebcore1.nms.kcl.ac.uk')
    ->stage('production1')
    ->user('w3admin')
    ->forwardAgent(true)
    ->set('deploy_path', '/var/www/vhost/theme.nms.kcl.ac.uk/app');

// Custom tasks

task('reload:php-fpm', function () {
    run('sudo /bin/systemctl reload php7.2-fpm');
});

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);
