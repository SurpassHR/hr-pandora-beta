self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('pandora-cloud-cache').then(function (cache) {
            return cache.addAll([
                '/_next/static/VkDNisWOezhjENf61sgQl/buildManifest.js',
                '/_next/static/VkDNisWOezhjENf61sgQl/ssgManifest.js',
                '/_next/static/chunks/1213-3a349d30aa6a72a3.js',
                '/_next/static/chunks/1438-8d1de903270120c8.js',
                '/_next/static/chunks/1564-77f6f9ff5dc52ea0.js',
                '/_next/static/chunks/1966.293545626fb83130.js',
                '/_next/static/chunks/1f110208-24bf6c2e080e0308.js',
                '/_next/static/chunks/2104-09304abac0293deb.js',
                '/_next/static/chunks/2186.470cc82a65d54ead.js',
                '/_next/static/chunks/2357-96faabdfa8cc96a3.js',
                '/_next/static/chunks/273.c06548dd1df12f14.js',
                '/_next/static/chunks/2766-4b22cbefddaac9b3.js',
                '/_next/static/chunks/3267-ff92f42a054abd60.js',
                '/_next/static/chunks/3389-482943a0011c8266.js',
                '/_next/static/chunks/3a34cc27-fd0458d5c342aa61.js',
                '/_next/static/chunks/4099-9cd8db1fba82daf6.js',
                '/_next/static/chunks/4137-447db6c53ca8543c.js',
                '/_next/static/chunks/4184.6c7782ced6bdbb7f.js',
                '/_next/static/chunks/5427-fa01eda28dd41717.js',
                '/_next/static/chunks/6199c948-28b15521c4eb1cf7.js',
                '/_next/static/chunks/6321.3b3b94262104b5a6.js',
                '/_next/static/chunks/667-f735c0905709b955.js',
                '/_next/static/chunks/695-b25da1b96da3ac16.js',
                '/_next/static/chunks/722-f4a61e9d1191da1c.js',
                '/_next/static/chunks/7985-7419f0f46b18b9d5.js',
                '/_next/static/chunks/8107.dcdd5a446cf308a4.js',
                '/_next/static/chunks/8238.f8d89e403ca66b7a.js',
                '/_next/static/chunks/8937-f86d189206c4dbba.js',
                '/_next/static/chunks/8967-4e6340f89a707cbe.js',
                '/_next/static/chunks/9119-c2ab9bf5947373cf.js',
                '/_next/static/chunks/9441-b93d2e2ad8e95779.js',
                '/_next/static/chunks/1724.7c86cd47cf0b0726.js',
                '/_next/static/chunks/bd26816a-537855338b714f81.js',
                '/_next/static/chunks/framework-10a404587b40544b.js',
                '/_next/static/chunks/main-989cac6f6309d951.js',
                '/_next/static/chunks/pages/account/cancel-14d6d463a6c44c7b.js',
                '/_next/static/chunks/pages/account/manage-8051354766adfd0e.js',
                '/_next/static/chunks/pages/account/upgrade-77841e658a0602be.js',
                '/_next/static/chunks/pages/admin/AdminPageLayout-384796b7cc00f3b3.js',
                '/_next/static/chunks/pages/admin/analytics-16ed523f42c51c90.js',
                '/_next/static/chunks/pages/admin/billing-e422fb7ce3f97e13.js',
                '/_next/static/chunks/pages/admin/identity-f84f4b5d6a174e03.js',
                '/_next/static/chunks/pages/admin/settings-bec522f40537bc92.js',
                '/_next/static/chunks/pages/admin-62657cde350fa71e.js',
                '/_next/static/chunks/pages/aip/pluginId/oauth/callback-d5082a83b78918bf.js',
                '/_next/static/chunks/pages/app-1f71ef8cca5f3e9a.js',
                '/_next/static/chunks/pages/auth/error-da90df12684f035a.js',
                '/_next/static/chunks/pages/auth/ext_callback-88767d6f96e2da41.js',
                '/_next/static/chunks/pages/auth/ext_callback_refresh-766ffa48c8abc1ce.js',
                '/_next/static/chunks/pages/auth/login-435c9c3793d69432.js',
                '/_next/static/chunks/pages/auth/logout-2052428c6c77a882.js',
                '/_next/static/chunks/pages/auth/mocked_login-741f054137ff6588.js',
                '/_next/static/chunks/pages/bypass-cb85f9907e9ab321.js',
                '/_next/static/chunks/pages/default-c4c1189c3fd9de91.js',
                '/_next/static/chunks/pages/error-97106a6822dc2ecb.js',
                '/_next/static/chunks/pages/gizmo/editor-e8128173ed7ae55f.js',
                '/_next/static/chunks/pages/gizmo/explore-f6662f0584fdbab8.js',
                '/_next/static/chunks/pages/gizmo/g/gizmoId-776c39951ef183d1.js',
                '/_next/static/chunks/pages/gizmo-4aca7b5cee2daa05.js',
                '/_next/static/chunks/pages/invite/accepted-bf3aaaac98fba33d.js',
                '/_next/static/chunks/pages/invite/referralCodeParam-9eca98ffd6d30730.js',
                '/_next/static/chunks/pages/payments/success-2f34fd07b877eeeb.js',
                '/_next/static/chunks/pages/payments/success-trial-b6c96bfd4ec867fc.js',
                '/_next/static/chunks/pages/share/e/shareParams-3493dfe0e4f58508.js',
                '/_next/static/chunks/pages/share/shareParams-c90f9822af7eabf2.js',
                '/_next/static/chunks/pages/status-1f84c7ce6fff2a12.js',
                '/_next/static/chunks/pages/templates/editor-342f0f40b111c2a3.js',
                '/_next/static/chunks/pages/templates-ffd48d24e93d5198.js',
                '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js',
                '/_next/static/chunks/sso-48a31b9a0b9013eb.js',
                '/_next/static/chunks/webpack-00de4b1a3c21b6d8.js',
                '/_next/static/css/f40b2ebfb8cc1614.css',
                '/apple-touch-icon.png',
                '/favicon-16x16.png',
                '/favicon-32x32.png',
                '/fonts/colfax/ColfaxAIBold.woff',
                '/fonts/colfax/ColfaxAIBold.woff2',
                '/fonts/colfax/ColfaxAIBoldItalic.woff',
                '/fonts/colfax/ColfaxAIBoldItalic.woff2',
                '/fonts/colfax/ColfaxAIRegular.woff',
                '/fonts/colfax/ColfaxAIRegular.woff2',
                '/fonts/colfax/ColfaxAIRegularItalic.woff',
                '/fonts/colfax/ColfaxAIRegularItalic.woff2',
                '/fonts/katex/KaTeX_AMS-Regular.woff2',
                '/fonts/katex/KaTeX_Caligraphic-Bold.woff2',
                '/fonts/katex/KaTeX_Caligraphic-Regular.woff2',
                '/fonts/katex/KaTeX_Fraktur-Bold.woff2',
                '/fonts/katex/KaTeX_Fraktur-Regular.woff2',
                '/fonts/katex/KaTeX_Main-Bold.woff2',
                '/fonts/katex/KaTeX_Main-BoldItalic.woff2',
                '/fonts/katex/KaTeX_Main-Italic.woff2',
                '/fonts/katex/KaTeX_Main-Regular.woff2',
                '/fonts/katex/KaTeX_Math-BoldItalic.woff2',
                '/fonts/katex/KaTeX_Math-Italic.woff2',
                '/fonts/katex/KaTeX_SansSerif-Bold.woff2',
                '/fonts/katex/KaTeX_SansSerif-Italic.woff2',
                '/fonts/katex/KaTeX_SansSerif-Regular.woff2',
                '/fonts/katex/KaTeX_Script-Regular.woff2',
                '/fonts/katex/KaTeX_Size1-Regular.woff2',
                '/fonts/katex/KaTeX_Size2-Regular.woff2',
                '/fonts/katex/KaTeX_Size3-Regular.woff2',
                '/fonts/katex/KaTeX_Size4-Regular.woff2',
                '/fonts/katex/KaTeX_Typewriter-Regular.woff2',
                '/fonts/signifier/signifier-bold-italic.woff2',
                '/fonts/signifier/signifier-bold.woff2',
                '/fonts/signifier/signifier-light-italic.woff2',
                '/fonts/signifier/signifier-light.woff2',
                '/fonts/soehne/soehne-buch-kursiv.woff2',
                '/fonts/soehne/soehne-buch.woff2',
                '/fonts/soehne/soehne-halbfett-kursiv.woff2',
                '/fonts/soehne/soehne-halbfett.woff2',
                '/fonts/soehne/soehne-kraftig-kursiv.woff2',
                '/fonts/soehne/soehne-kraftig.woff2',
                '/fonts/soehne/soehne-mono-buch-kursiv.woff2',
                '/fonts/soehne/soehne-mono-buch.woff2',
                '/fonts/soehne/soehne-mono-halbfett.woff2',
                '/fonts/soehne-circle/soehne-circle-buch.woff2',
                '/fonts/soehne-circle/soehne-circle-halbfett.woff2',
                '/sweetalert2/bulma.min.css',
                '/sweetalert2/sweetalert2.all.min-bc15590d.js',
                '/ulp/react-components/1.66.5/css/main.cdn.min.css',
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});
