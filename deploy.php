<?php
namespace Deployer;

require 'recipe/laravel.php';

// Default env.
set('default_stage', 'production');

// Project name
set('application', 'e-Research Theme');

// Project repository
set('repository', 'git@gitlab.er.kcl.ac.uk:web/theme.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Laravel shared file
set('shared_files', []);

// Hosts

host('erwebctl1.er.kcl.ac.uk')
    ->stage('production')
    ->user('w3admin')
    ->forwardAgent(true)
    ->set('deploy_path', '/var/www/vhost/theme.er.kcl.ac.uk/app');

// Custom tasks

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);
