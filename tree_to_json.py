import json
import sys

def parse_tree(lines):
    root = {"name": "root", "type": "folder", "children": []}
    stack = [root]
    for line in lines[1:]:  # Skip the first line (root directory)
        depth = (len(line) - len(line.lstrip())) // 4
        name = line.strip()
        if name.endswith('/'):
            name = name[:-1]
            node = {"name": name, "type": "folder", "children": []}
        else:
            node = {"name": name, "type": "file"}
        
        while depth < len(stack) - 1:
            stack.pop()
        
        stack[-1]["children"].append(node)
        if node["type"] == "folder":
            stack.append(node)
    
    return root

tree_output = sys.stdin.read().splitlines()
json_tree = parse_tree(tree_output)
print(json.dumps(json_tree, indent=2))
