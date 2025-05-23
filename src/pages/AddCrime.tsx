
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { FileText, Save, CalendarIcon } from 'lucide-react';
import { addCrimeRecord } from '@/data/crimeData';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

type CrimeFormValues = {
  area: string;
  crimeType: string;
  count: number;
  date: Date;
  time: string;
  festival?: string;
  riskLevel: "high" | "moderate" | "low";
};

const crimeFormSchema = z.object({
  area: z.string().min(1, { message: "Area is required" }),
  crimeType: z.string().min(1, { message: "Crime type is required" }),
  count: z.coerce.number().min(1, { message: "Count must be at least 1" }),
  date: z.date({ required_error: "Date is required" }),
  time: z.string().min(1, { message: "Time is required" }),
  festival: z.string().optional(),
  riskLevel: z.enum(["high", "moderate", "low"], {
    required_error: "Risk level is required",
  }),
});

const AddCrime = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [customArea, setCustomArea] = useState(false);
  const [customCrimeType, setCustomCrimeType] = useState(false);
  const navigate = useNavigate();

  const defaultValues: Partial<CrimeFormValues> = {
    riskLevel: "moderate",
    count: 1,
    date: new Date(),
    time: format(new Date(), 'HH:mm')
  };

  const form = useForm<CrimeFormValues>({
    resolver: zodResolver(crimeFormSchema),
    defaultValues,
  });

  const onSubmit = async (data: CrimeFormValues) => {
    setIsSubmitting(true);

    try {
      const selectedDate = new Date(data.date);
      const [hours, minutes] = data.time.split(':');
      selectedDate.setHours(parseInt(hours), parseInt(minutes));

      // Ensure custom entries are properly formatted
      const formattedArea = data.area.trim();
      const formattedCrimeType = data.crimeType.toLowerCase().trim();

      await addCrimeRecord({
        area: formattedArea,
        crimeType: formattedCrimeType,
        count: data.count,
        year: selectedDate.getFullYear(),
        month: selectedDate.getMonth() + 1,
        day: selectedDate.getDate(),
        hour: selectedDate.getHours(),
        festival: data.festival,
        riskLevel: data.riskLevel
      });

      toast({
        title: "Crime record added successfully",
        description: `Added ${data.count} ${data.crimeType} incidents in ${data.area}.`,
      });

      // Reset custom input states along with form
      setCustomArea(false);
      setCustomCrimeType(false);
      form.reset(defaultValues);
    } catch (error) {
      console.error('Error adding crime record:', error);
      toast({
        title: "Error",
        description: "Failed to add crime record. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const areas = [
    "Thoothukudi Port",
    "Tiruchendur Road",
    "Palayamkottai Road",
    "Millerpuram",
    "Bryant Nagar",
    "Street 1",
    "Thoothukudi District",
    "Other"
  ];

  const crimeTypes = ["theft", "assault", "vandalism", "drugs", "other"];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-20 pb-16 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Add Crime Record</h1>
            <p className="text-muted-foreground">
              Manually add a new crime incident to the database
            </p>
          </div>
        </div>

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              New Crime Report
            </CardTitle>
            <CardDescription>
              Enter the details of the crime incident below
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="area"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Area</FormLabel>
                        {!customArea ? (
                          <Select
                            onValueChange={(value) => {
                              if (value === "Other") {
                                setCustomArea(true);
                                field.onChange("");
                              } else {
                                field.onChange(value);
                              }
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {areas.map((area) => (
                                <SelectItem key={area} value={area}>{area}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <div className="space-y-2">
                            <FormControl>
                              <Input
                                placeholder="Enter area name"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value}
                              />
                            </FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setCustomArea(false);
                                field.onChange("");
                              }}
                            >
                              Back to selection
                            </Button>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="crimeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Crime Type</FormLabel>
                        {!customCrimeType ? (
                          <Select
                            onValueChange={(value) => {
                              if (value === "other") {
                                setCustomCrimeType(true);
                                field.onChange("");
                              } else {
                                field.onChange(value);
                              }
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select crime type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {crimeTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                  {type.charAt(0).toUpperCase() + type.slice(1)}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <div className="space-y-2">
                            <FormControl>
                              <Input
                                placeholder="Enter crime type"
                                {...field}
                                onChange={(e) => field.onChange(e.target.value)}
                                value={field.value}
                              />
                            </FormControl>
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => {
                                setCustomCrimeType(false);
                                field.onChange("");
                              }}
                            >
                              Back to selection
                            </Button>
                          </div>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="count"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Incident Count</FormLabel>
                        <FormControl>
                          <Input type="number" {...field} />
                        </FormControl>
                        <FormDescription>
                          Number of incidents of this type
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="riskLevel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Risk Level</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select risk level" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() || date < new Date("1900-01-01")
                              }
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time</FormLabel>
                        <FormControl>
                          <Input type="time" {...field} />
                        </FormControl>
                        <FormDescription>
                          24-hour format
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="festival"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Festival (Optional)</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          If related to a festival or event
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <CardFooter className="flex justify-end px-0 pb-0">
                  <Button
                    type="submit"
                    className="ml-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Saving..." : "Add Crime Record"}
                    <Save className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddCrime;
