import requests
import json
import os
import pandas as pd
import json

id_values=['...'] # Applets Ids


for id in id_values:
    url = "https://ifttt.com/api/v3/graph"
    headers = {
        'Content-Type': 'application/json; charset=utf-8',
    }
    payload = {
        "query": """
            query($applet_id:String!){
                applet(id:$applet_id){
                    id
                    name
                    description
                    published
                    archived
                    filter_code
                    channel_id
                    applet_trigger {
                        channel_module_name
                        module_name
                        fields {
                            name
                            custom_label
                            hidden
                            default_value_json
                        }
                    }
                    applet_actions {
                        channel_module_name
                        module_name
                        fields {
                            name
                            custom_label
                            hidden
                            default_value_json
                        }
                    }
                    applet_queries {
                        channel_module_name
                        module_name
                        fields {
                            name
                            custom_label
                            hidden
                            default_value_json
                        }
                    }
                }
            }
        """,
        "variables": {
            "applet_id": id
        }
    }
    response = requests.post(url, headers=headers, data=json.dumps(payload))

    file_path = os.path.join("data/applet", f"{id}_response.json")
    if response.status_code == 200:
        try:
            response_json = response.json()
            applet = response_json['data']['applet']
            if applet is not None:
                filter_code=applet.get('filter_code', None)
                if filter_code is not None:
                    with open(file_path, 'w') as f:
                        json.dump(response.json(), f, indent=4)
                        print(f"Risultato per {id} salvato in {file_path}")
                else:
                    print('Filter_code:'+str(filter_code)) 
            else:
                print('Applet: None')
        except json.JSONDecodeError:
            print(f"Errore nel parsing del JSON per {id}")
    else:
        print(f"Richiesta fallita per {id} con status code {response.status_code}")
