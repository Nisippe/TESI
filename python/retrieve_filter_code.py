import os
import json


folder_path = 'H:\\TESI\\data\\applet'


files = os.listdir(folder_path)
for file in files:
    with open('H:\\TESI\\data\\applet\\'+file, 'r') as f:
        data = json.load(f)
        applet = data['data']['applet']
        filter_code=applet.get('filter_code', None)
    
    output_path = os.path.join("data/filter_code", f"{file}.js")
    with open(output_path,'w', encoding='utf-8') as output:
        output.write(filter_code)
