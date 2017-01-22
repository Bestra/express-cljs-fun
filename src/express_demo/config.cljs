(ns express-demo.config)

(def app-roots (atom #{"/Users/bestra/mh/tahi/client/app"
                       "/Users/bestra/mh/tahi/engines/tahi_standard_tasks/client/app"
                       "/Users/bestra/mh/tahi/engines/plos_billing/client/app"
                       "/Users/bestra/mh/tahi/engines/plos_bio_internal_review/client/app"
                       "/Users/bestra/mh/tahi/engines/plos_bio_tech_check/client/app"
                       "/Users/bestra/mh/tahi/engines/tahi-assign_team/client/app"}))
(def app-name (atom "tahi"))
