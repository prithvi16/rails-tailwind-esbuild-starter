// Entrypoint for the esbuild command defined in package.json scripts

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "./channels/index.js"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import './stylesheets/stylesheet.css';