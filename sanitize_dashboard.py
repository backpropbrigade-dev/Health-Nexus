
import os

file_path = r"c:\Users\cool\Downloads\HealthNexus\HealthNexus-\patient-dashboard.html"

with open(file_path, 'rb') as f:
    content = f.read()

# Replace common non-ascii or weird characters with clean ones
# Hand-picked problematic sequences seen in cat output
content = content.replace(b'\xef\xbf\xbd', b'') # Replacement char
content = content.replace(b'\xc2\xa0', b' ')    # Non-breaking space

# Convert to string and back to keep it clean
text = content.decode('utf-8', errors='ignore')

# Manually fix specific IDs if they still look weird
text = text.replace('viewFamilyConnect', 'viewFamilyConnect')
text = text.replace('viewAiAssistant', 'viewAiAssistant')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Sanitization complete.")
