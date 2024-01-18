<template>
    <div class="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
            <slot></slot>
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
            <ul class="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                <!-- Sidebar content here -->
                <li><router-link to="/tools/windows">Customizing windows</router-link></li>
                <li><router-link to="/tools/winget">Winget</router-link></li>
                <li><router-link to="/tools/choco">Chocolatey</router-link></li>
                <li><router-link to="/tools/scoop">Scoop</router-link></li>
                <li>
                    <a>Terminal</a>
                    <ul>
                        <li><router-link to="/tools/terminal/github">GitHub</router-link></li>
                        <li><router-link to="/tools/terminal/msstore">Microsoft Store</router-link></li>
                        <li><router-link to="/tools/terminal/winget">Winget</router-link></li>
                        <li><router-link to="/tools/terminal/choco">Chocolatey</router-link></li>
                        <li><router-link to="/tools/terminal/scoop">Scoop</router-link></li>
                    </ul>
                </li>
                <li>
                    <a>Visual Studo Code</a>
                    <ul>
                        <li><a>Winget</a></li>
                        <li><a>Chocolatey</a></li>
                        <li><a>Scoop</a></li>
                    </ul>
                </li>
                <li>
                    <a>Git/Git Bash</a>
                    <ul>
                        <li><a>Winget</a></li>
                        <li><a>Chocolatey</a></li>
                        <li><a>Scoop</a></li>
                    </ul>
                </li>
            </ul>

        </div>
    </div>
</template>