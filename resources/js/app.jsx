import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

import MainLayout from './Layouts/MainLayout';


createInertiaApp({
    title: (title) => `${title} || Alex Portfolio`,

    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.jsx', {
            eager: true,
        });

        const page = pages[`./Pages/${name}.jsx`];

        if (!page) {
            throw new Error(`Page ${name} not found`);
        }

        page.default.layout =
            page.default.layout ||
            ((page) => <MainLayout>{page}</MainLayout>);

        return page;
    },

    setup({ el, App, props }) {
        createRoot(el).render(
            <App {...props} />
        );
    },

    progress: {
        color: '#2563EB',
    },
});