# Cloudflared Quick Reference

## Tunnel Commands

```bash
# Login (one-time)
cloudflared tunnel login

# Create tunnel
cloudflared tunnel create local

# List tunnels
cloudflared tunnel list

# Run tunnel manually
cloudflared tunnel run local
```

## DNS Routes

```bash
# Add route
cloudflared tunnel route dns local "*.darkhold.dev"
cloudflared tunnel route dns local "local.darkhold.dev"

# Delete route: Dashboard → DNS → Delete CNAME
```

## Config File

Location: `~/.cloudflared/config.yml`

```yaml
tunnel: <uuid>
credentials-file: /Users/<you>/.cloudflared/<uuid>.json

ingress:
  - hostname: "*.darkhold.dev"
    service: http://localhost:3000
  - service: http_status:404
```

**Note:** Both DNS route AND ingress rule required for each hostname.

## Cloudflare Access

1. **https://one.dash.cloudflare.com**
2. **Access** → **Applications** → **Add application** → **Self-hosted**
3. Subdomain: `*` | Domain: `darkhold.dev`
4. Policy: Allow → Emails = `your@email.com`

## macOS Service (launchctl)

```bash
# Install service
cloudflared service install

# Fix plist (add "tunnel" "run" "local" to ProgramArguments)
nano ~/Library/LaunchAgents/com.cloudflare.cloudflared.plist

# Load/Unload
launchctl load ~/Library/LaunchAgents/com.cloudflare.cloudflared.plist
launchctl unload ~/Library/LaunchAgents/com.cloudflare.cloudflared.plist

# Start/Stop/Restart
launchctl start com.cloudflare.cloudflared
launchctl stop com.cloudflare.cloudflared
launchctl kickstart -k com.cloudflare.cloudflared

# Check status (PID = running)
launchctl list | grep cloudflared

# View logs
tail -f ~/Library/Logs/com.cloudflare.cloudflared.out.log
```

## Adding New Hostname

```bash
# 1. DNS route
cloudflared tunnel route dns local "new.darkhold.dev"

# 2. Add to config.yml ingress

# 3. Restart
launchctl stop com.cloudflare.cloudflared && launchctl start com.cloudflare.cloudflared
```

