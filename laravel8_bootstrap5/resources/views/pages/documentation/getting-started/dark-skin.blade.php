<x-base-layout>

    <!--begin::Section-->
    <div class="pt-5">
        <!--begin::Heading-->
        <h1 class="anchor fw-bolder mb-5" id="rtl-version">
            <a href="#rtl-version"></a>
            Quick Setup
        </h1>
        <!--end::Heading-->

        <!--begin::Block-->
        <div class="py-5">
            <p>For the preview purpose, we use URL query <code>?skin=dark</code> to enable the other demos preview without modifying the Laravel routes.
                See the example preview URL <a href="{{ url()->current() . '?skin=dark' }}">{{ url()->current() . '?skin=dark' }}</a>.</p>

            <p>Dark Skin mode of <?php echo theme()->getProductName()?> can be easily setup.</p>
        </div>
        <!--end::Block-->

        <!--begin::List-->
        <ol class="pt-5">
            <li class="py-3">
                Run gulp task with <code>--dark-skin</code> flag to generate the Dark Skin mode of CSS files. This will generate both normal and dark CSS files.
                <div class="py-5">
                    <?php util()->highlight('
                    npm run dev --dark-skin
                ', 'bash')
                    ?>
                </div>
            </li>

            <li class="py-3">
                Switch CSS files to their Dark Skin mode. These files are required for the dark skin mode. The CSS files are generated in the <code>public</code> assets folder:
                <div class="py-5">
                    <?php util()->highlight("
// Assets
'assets'  => array(
    // ...
    'css'     => array(
        'plugins/global/plugins.dark.bundle.css',
        'plugins/global/plugins-custom.dark.bundle.css',
        'css/style.dark.bundle.css',
    ),
    // ...
),
", 'php')
                    ?>
                </div>
            </li>

            <li class="py-3">
                Add <code>dark-skin</code> class name to the <code><?php echo htmlspecialchars('<body>') ?></code> tag. Keep other <code>body</code> class names.
                <div class="py-5">
                    <?php util()->highlight('<body class="dark-skin ...">
<!-- HTML content -->
</body>', 'html')
                    ?>
                </div>
            </li>
        </ol>
        <!--end::List-->
    </div>
    <!--end::Section-->

</x-base-layout>
