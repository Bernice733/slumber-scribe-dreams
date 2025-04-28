
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { DreamHeader } from "@/components/DreamHeader";
import { Settings, ArrowLeft, Moon, Sun, Eye, Download, UserCircle, Bell, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const SettingsPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("system");
  const [dreamListView, setDreamListView] = useState("grid");
  const [defaultSorting, setDefaultSorting] = useState("newest");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [privateJournal, setPrivateJournal] = useState(true);
  
  if (!user) {
    return null;
  }

  const handleSaveSettings = () => {
    // In a real implementation, this would save settings to Supabase or localStorage
    toast.success("Settings saved successfully");
    
    // Save to localStorage for now
    localStorage.setItem("userSettings", JSON.stringify({
      theme,
      dreamListView,
      defaultSorting,
      emailNotifications,
      privateJournal
    }));
  };

  return (
    <div className="container py-8 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex items-center mb-6">
        <Button variant="ghost" className="mr-4" asChild>
          <Link to="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Link>
        </Button>
        <DreamHeader 
          title="Settings" 
          subtitle="Customize your dream journal experience" 
        />
      </div>

      <Tabs defaultValue="appearance" className="w-full">
        <TabsList className="mb-8 flex flex-wrap">
          <TabsTrigger value="appearance" className="flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            Appearance
          </TabsTrigger>
          <TabsTrigger value="journal">
            <Settings className="h-4 w-4 mr-2" />
            Journal Preferences
          </TabsTrigger>
          <TabsTrigger value="account">
            <UserCircle className="h-4 w-4 mr-2" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="h-4 w-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="privacy">
            <Shield className="h-4 w-4 mr-2" />
            Privacy
          </TabsTrigger>
        </TabsList>

        {/* Appearance Settings */}
        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>Appearance Settings</CardTitle>
              <CardDescription>
                Customize how your dream journal looks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="theme">Theme</Label>
                <Select value={theme} onValueChange={setTheme}>
                  <SelectTrigger id="theme">
                    <SelectValue placeholder="Select a theme preference" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Theme Options</SelectLabel>
                      <SelectItem value="light">
                        <div className="flex items-center">
                          <Sun className="h-4 w-4 mr-2" />
                          Light
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center">
                          <Moon className="h-4 w-4 mr-2" />
                          Dark
                        </div>
                      </SelectItem>
                      <SelectItem value="system">System Default</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Dream List View</Label>
                <RadioGroup value={dreamListView} onValueChange={setDreamListView}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="grid" id="grid" />
                    <Label htmlFor="grid">Grid View</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="list" id="list" />
                    <Label htmlFor="list">List View</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="compact" id="compact" />
                    <Label htmlFor="compact">Compact View</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="sorting">Default Sorting</Label>
                <Select value={defaultSorting} onValueChange={setDefaultSorting}>
                  <SelectTrigger id="sorting">
                    <SelectValue placeholder="Select default sorting" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="lucid">Lucid Dreams First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Journal Preferences */}
        <TabsContent value="journal">
          <Card>
            <CardHeader>
              <CardTitle>Journal Preferences</CardTitle>
              <CardDescription>
                Customize your dream journaling experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Default Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Flying</Badge>
                  <Badge variant="secondary">Falling</Badge>
                  <Badge variant="secondary">Water</Badge>
                  <Badge variant="secondary">Family</Badge>
                  <Badge variant="secondary">+ Add Tag</Badge>
                </div>
              </div>
              
              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="lucid-tracker">Lucid Dream Tracker</Label>
                    <p className="text-sm text-muted-foreground">Track statistics about your lucid dreams</p>
                  </div>
                  <Switch id="lucid-tracker" defaultChecked />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Dream Export Format</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <Button variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Export as PDF
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Export as JSON
                  </Button>
                  <Button variant="outline" className="flex items-center">
                    <Download className="h-4 w-4 mr-2" />
                    Export as CSV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Account Settings */}
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>
                Manage your account details and password
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" value={user.email || ""} disabled />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" placeholder="••••••••" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" placeholder="••••••••" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" placeholder="••••••••" />
              </div>

              <Button variant="outline">Change Password</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications Settings */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>
                Manage how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email notifications about your dreams</p>
                </div>
                <Switch 
                  id="email-notifications" 
                  checked={emailNotifications} 
                  onCheckedChange={setEmailNotifications} 
                />
              </div>

              <Separator />

              <div>
                <h3 className="text-md font-medium mb-2">Notification Types</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dream-reminders" />
                    <Label htmlFor="dream-reminders">Daily dream journal reminders</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="pattern-alerts" />
                    <Label htmlFor="pattern-alerts">Dream pattern alerts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="lucid-tips" />
                    <Label htmlFor="lucid-tips">Lucid dreaming tips</Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy Settings */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>
                Manage your privacy and data preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="private-journal">Private Journal</Label>
                  <p className="text-sm text-muted-foreground">Keep your dream journal private</p>
                </div>
                <Switch 
                  id="private-journal" 
                  checked={privateJournal} 
                  onCheckedChange={setPrivateJournal} 
                />
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Data Storage</Label>
                <RadioGroup defaultValue="cloud">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="cloud" id="cloud" />
                    <Label htmlFor="cloud">Store in cloud (recommended)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="local" id="local" />
                    <Label htmlFor="local">Store locally only</Label>
                  </div>
                </RadioGroup>
              </div>

              <Separator />

              <div>
                <Button variant="destructive">Delete My Account</Button>
                <p className="text-xs text-muted-foreground mt-2">
                  This will permanently delete your account and all your data.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleSaveSettings} 
          className="bg-dream-primary hover:bg-dream-primary/90 transition-all"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default SettingsPage;
